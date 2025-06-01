import { Template } from "@/data/templates";

export interface FilterOptions {
  searchQuery?: string;
  category?: string;
  complexity?: string;
  ministry?: string;
  tags?: string[];
  minRating?: number;
  maxComplexity?: string;
}

export interface SortOptions {
  sortBy: "popularity" | "rating" | "newest" | "downloads" | "alphabetical";
  sortOrder?: "asc" | "desc";
}

/**
 * Filter templates based on various criteria
 */
export function filterTemplates(
  templates: Template[],
  filters: FilterOptions
): Template[] {
  return templates.filter((template) => {
    // Search query filter
    if (filters.searchQuery) {
      const searchLower = filters.searchQuery.toLowerCase();
      const matchesSearch = 
        template.title.toLowerCase().includes(searchLower) ||
        template.description.toLowerCase().includes(searchLower) ||
        template.titlebn.toLowerCase().includes(searchLower) ||
        template.descriptionbn.toLowerCase().includes(searchLower) ||
        template.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        template.ministry?.toLowerCase().includes(searchLower) ||
        template.department?.toLowerCase().includes(searchLower);
      
      if (!matchesSearch) return false;
    }

    // Category filter
    if (filters.category && filters.category !== "All") {
      if (template.category !== filters.category) return false;
    }

    // Complexity filter
    if (filters.complexity && filters.complexity !== "All") {
      if (template.complexity !== filters.complexity) return false;
    }

    // Ministry filter
    if (filters.ministry && filters.ministry !== "All") {
      if (template.ministry !== filters.ministry) return false;
    }

    // Tags filter
    if (filters.tags && filters.tags.length > 0) {
      const hasMatchingTag = filters.tags.some(tag => 
        template.tags.some(templateTag => 
          templateTag.toLowerCase().includes(tag.toLowerCase())
        )
      );
      if (!hasMatchingTag) return false;
    }

    // Rating filter
    if (filters.minRating !== undefined) {
      if (template.rating < filters.minRating) return false;
    }

    return true;
  });
}

/**
 * Sort templates based on different criteria
 */
export function sortTemplates(
  templates: Template[],
  sortOptions: SortOptions
): Template[] {
  const { sortBy, sortOrder = "desc" } = sortOptions;
  
  return [...templates].sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case "popularity":
        // Popularity based on downloads * rating
        comparison = (b.downloads * b.rating) - (a.downloads * a.rating);
        break;
      
      case "rating":
        comparison = b.rating - a.rating;
        break;
      
      case "newest":
        comparison = new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        break;
      
      case "downloads":
        comparison = b.downloads - a.downloads;
        break;
      
      case "alphabetical":
        comparison = a.title.localeCompare(b.title);
        break;
      
      default:
        return 0;
    }

    // Apply sort order
    return sortOrder === "asc" ? -comparison : comparison;
  });
}

/**
 * Get unique values for filter options
 */
export function getFilterOptions(templates: Template[]) {
  const categories = Array.from(new Set(templates.map(t => t.category))).sort();
  const complexities = Array.from(new Set(templates.map(t => t.complexity)));
  const ministries = Array.from(new Set(templates.map(t => t.ministry).filter(Boolean))).sort();
  const allTags = Array.from(new Set(templates.flatMap(t => t.tags))).sort();

  return {
    categories,
    complexities,
    ministries,
    tags: allTags
  };
}

/**
 * Get template statistics
 */
export function getTemplateStats(templates: Template[]) {
  const totalTemplates = templates.length;
  const totalDownloads = templates.reduce((sum, t) => sum + t.downloads, 0);
  const averageRating = templates.reduce((sum, t) => sum + t.rating, 0) / totalTemplates;
  
  const categoryStats = templates.reduce((stats, template) => {
    stats[template.category] = (stats[template.category] || 0) + 1;
    return stats;
  }, {} as Record<string, number>);

  const complexityStats = templates.reduce((stats, template) => {
    stats[template.complexity] = (stats[template.complexity] || 0) + 1;
    return stats;
  }, {} as Record<string, number>);

  return {
    totalTemplates,
    totalDownloads,
    averageRating,
    categoryStats,
    complexityStats
  };
}

/**
 * Search templates with fuzzy matching
 */
export function fuzzySearchTemplates(
  templates: Template[],
  query: string,
  threshold: number = 0.3
): Template[] {
  if (!query) return templates;

  const queryLower = query.toLowerCase();
  
  return templates
    .map(template => {
      let score = 0;
      const searchableText = [
        template.title,
        template.description,
        template.titlebn,
        template.descriptionbn,
        ...template.tags,
        template.ministry || "",
        template.department || ""
      ].join(" ").toLowerCase();

      // Exact match gets highest score
      if (searchableText.includes(queryLower)) {
        score += 10;
      }

      // Word boundary matches
      const words = queryLower.split(" ");
      words.forEach(word => {
        if (searchableText.includes(word)) {
          score += 5;
        }
      });

      // Character proximity matching
      let charMatches = 0;
      for (let i = 0; i < queryLower.length; i++) {
        if (searchableText.includes(queryLower[i])) {
          charMatches++;
        }
      }
      score += (charMatches / queryLower.length) * 2;

      return { template, score };
    })
    .filter(item => item.score > threshold)
    .sort((a, b) => b.score - a.score)
    .map(item => item.template);
}

/**
 * Get related templates based on tags and category
 */
export function getRelatedTemplates(
  targetTemplate: Template,
  allTemplates: Template[],
  limit: number = 3
): Template[] {
  return allTemplates
    .filter(template => template.id !== targetTemplate.id)
    .map(template => {
      let score = 0;
      
      // Same category bonus
      if (template.category === targetTemplate.category) {
        score += 5;
      }
      
      // Shared tags bonus
      const sharedTags = template.tags.filter(tag => 
        targetTemplate.tags.includes(tag)
      );
      score += sharedTags.length * 2;
      
      // Similar complexity bonus
      if (template.complexity === targetTemplate.complexity) {
        score += 1;
      }
      
      // Same ministry bonus
      if (template.ministry === targetTemplate.ministry) {
        score += 3;
      }

      return { template, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.template);
}

/**
 * Validate template data
 */
export function validateTemplate(template: Partial<Template>): string[] {
  const errors: string[] = [];

  if (!template.id) errors.push("Template ID is required");
  if (!template.title) errors.push("Template title is required");
  if (!template.description) errors.push("Template description is required");
  if (!template.category) errors.push("Template category is required");
  if (!template.complexity) errors.push("Template complexity is required");
  if (!template.features || template.features.length === 0) {
    errors.push("Template must have at least one feature");
  }
  if (!template.tags || template.tags.length === 0) {
    errors.push("Template must have at least one tag");
  }
  if (template.rating !== undefined && (template.rating < 0 || template.rating > 5)) {
    errors.push("Template rating must be between 0 and 5");
  }
  if (template.downloads !== undefined && template.downloads < 0) {
    errors.push("Template downloads cannot be negative");
  }

  return errors;
}

/**
 * Format template for export
 */
export function exportTemplate(template: Template) {
  return {
    ...template,
    exportedAt: new Date().toISOString(),
    version: "1.0"
  };
}

/**
 * Get template by ID
 */
export function getTemplateById(
  templates: Template[],
  id: string
): Template | undefined {
  return templates.find(template => template.id === id);
}

/**
 * Check if template meets requirements
 */
export function checkTemplateRequirements(
  template: Template,
  userRequirements: string[]
): { meets: boolean; missing: string[] } {
  const missing = userRequirements.filter(req => 
    !template.requirements.some(templateReq => 
      templateReq.toLowerCase().includes(req.toLowerCase())
    )
  );

  return {
    meets: missing.length === 0,
    missing
  };
} 