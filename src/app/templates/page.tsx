"use client";

import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { categories, complexityColors, templates } from "@/data/templates";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Code,
  Download,
  ExternalLink,
  Eye,
  FileText,
  Filter,
  Globe,
  Search,
  Shield,
  Smartphone,
  Star,
  X,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";

type ComplexityLevel = keyof typeof complexityColors;

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedComplexity, setSelectedComplexity] = useState("All");
  const [selectedMinistry, setSelectedMinistry] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("popularity"); // popularity, rating, newest, downloads

  // Get unique ministries for filter
  const ministries = useMemo(() => {
    const unique = Array.from(
      new Set(templates.map((t) => t.ministry).filter(Boolean))
    );
    return ["All", ...unique];
  }, []);

  // Filter and sort templates
  const filteredTemplates = useMemo(() => {
    const filtered = templates.filter((template) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === "" ||
        template.title.toLowerCase().includes(searchLower) ||
        template.description.toLowerCase().includes(searchLower) ||
        template.tags.some((tag) => tag.toLowerCase().includes(searchLower)) ||
        template.ministry?.toLowerCase().includes(searchLower) ||
        template.department?.toLowerCase().includes(searchLower);

      // Category filter
      const matchesCategory =
        selectedCategory === "All" || template.category === selectedCategory;

      // Complexity filter
      const matchesComplexity =
        selectedComplexity === "All" ||
        template.complexity === selectedComplexity;

      // Ministry filter
      const matchesMinistry =
        selectedMinistry === "All" || template.ministry === selectedMinistry;

      return (
        matchesSearch && matchesCategory && matchesComplexity && matchesMinistry
      );
    });

    // Sort templates
    switch (sortBy) {
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort(
          (a, b) =>
            new Date(b.lastUpdated).getTime() -
            new Date(a.lastUpdated).getTime()
        );
        break;
      case "downloads":
        filtered.sort((a, b) => b.downloads - a.downloads);
        break;
      case "popularity":
      default:
        filtered.sort(
          (a, b) => b.downloads * b.rating - a.downloads * a.rating
        );
        break;
    }

    return filtered;
  }, [
    searchQuery,
    selectedCategory,
    selectedComplexity,
    selectedMinistry,
    sortBy,
  ]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedComplexity("All");
    setSelectedMinistry("All");
  };

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedCategory !== "All" ||
    selectedComplexity !== "All" ||
    selectedMinistry !== "All";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 py-16 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-slate-800 dark:via-slate-700 dark:to-indigo-900 rounded-3xl shadow-2xl border border-blue-100 dark:border-slate-600 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-500 rounded-3xl mb-8 shadow-lg">
              <FileText className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-indigo-400 dark:to-blue-400 bg-clip-text text-transparent mb-6 leading-tight">
              Government Templates
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-slate-700 dark:text-slate-300 mb-6 font-bengali">
              সরকারি টেমপ্লেট
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-5xl mx-auto leading-relaxed">
              Ready-to-use templates designed specifically for Bangladesh
              government projects. Build e-governance solutions quickly with our
              comprehensive template library.
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 mt-4 font-bengali max-w-4xl mx-auto leading-relaxed">
              বাংলাদেশ সরকারের প্রকল্পের জন্য বিশেষভাবে ডিজাইন করা প্রস্তুত
              টেমপ্লেট।
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white dark:bg-slate-800 rounded-full px-6 py-3 shadow-lg border border-purple-100 dark:border-slate-600">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {templates.length}+ Templates
                </span>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-full px-6 py-3 shadow-lg border border-blue-100 dark:border-slate-600">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Government Ready
                </span>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-full px-6 py-3 shadow-lg border border-green-100 dark:border-slate-600">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Responsive Design
                </span>
              </div>
            </div>
          </div>

          {/* Stats and Search */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
              <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>
                    {filteredTemplates.length} of {templates.length} Templates
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>
                    {templates
                      .reduce((sum, t) => sum + t.downloads, 0)
                      .toLocaleString()}{" "}
                    Downloads
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>
                    {(
                      templates.reduce((sum, t) => sum + t.rating, 0) /
                      templates.length
                    ).toFixed(1)}{" "}
                    Avg Rating
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search templates, tags, ministries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 pr-4 py-2 w-64 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="small"
                  onClick={() => setShowFilters(!showFilters)}
                  className={
                    showFilters ? "bg-primary-50 border-primary-300" : ""
                  }
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                  <option value="downloads">Most Downloaded</option>
                </select>
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-6">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Category
                      </label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      >
                        {categories.map((category) => (
                          <option key={category.name} value={category.name}>
                            {category.name} ({category.count})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Complexity
                      </label>
                      <select
                        value={selectedComplexity}
                        onChange={(e) => setSelectedComplexity(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      >
                        <option value="All">All Levels</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Ministry
                      </label>
                      <select
                        value={selectedMinistry}
                        onChange={(e) => setSelectedMinistry(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      >
                        {ministries.map((ministry) => (
                          <option key={ministry} value={ministry}>
                            {ministry}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex items-end">
                      {hasActiveFilters && (
                        <Button
                          variant="outline"
                          size="small"
                          onClick={clearFilters}
                          className="w-full"
                        >
                          <X className="h-4 w-4 mr-2" />
                          Clear Filters
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.name
                      ? "bg-primary-500 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Search Results */}
          {filteredTemplates.length === 0 ? (
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-center py-12">
              <CardContent>
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  No templates found
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Try adjusting your search criteria or filters
                </p>
                {hasActiveFilters && (
                  <Button onClick={clearFilters} variant="primary">
                    Clear all filters
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            /* Templates Grid */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredTemplates.map((template) => (
                <Card
                  key={template.id}
                  className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* Template Preview */}
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-primary-100 via-blue-50 to-green-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 flex items-center justify-center">
                      <div className="text-center">
                        <FileText className="h-16 w-16 text-primary-500 dark:text-gray-400 mx-auto mb-2" />
                        <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                          <Smartphone className="h-3 w-3" />
                          <Shield className="h-3 w-3" />
                          <Zap className="h-3 w-3" />
                          <Code className="h-3 w-3" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 flex space-x-2">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${complexityColors[template.complexity as ComplexityLevel]}`}
                      >
                        {template.complexity}
                      </span>
                    </div>
                    {template.ministry && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 text-xs font-medium bg-white/90 text-gray-700 rounded">
                          {template.ministry}
                        </span>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    {/* Template Info */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                            {template.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 font-bengali">
                            {template.titlebn}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 ml-4">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span>{template.rating}</span>
                        </div>
                      </div>

                      <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded mb-3">
                        {template.category}
                      </span>

                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">
                        {template.description}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs font-bengali line-clamp-1">
                        {template.descriptionbn}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {template.features.slice(0, 3).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-300"
                          >
                            <CheckCircle className="h-3 w-3 text-success-500 flex-shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                      {template.features.length > 3 && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          +{template.features.length - 3} more features
                        </p>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{template.estimatedTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download className="h-3 w-3" />
                          <span>{template.downloads.toLocaleString()}</span>
                        </div>
                      </div>
                      <span>
                        Updated{" "}
                        {new Date(template.lastUpdated).toLocaleDateString()}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {template.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded cursor-pointer hover:bg-primary-100 dark:hover:bg-primary-900/30"
                          onClick={() => setSearchQuery(tag)}
                        >
                          {tag}
                        </span>
                      ))}
                      {template.tags.length > 4 && (
                        <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded">
                          +{template.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-3">
                      <Button variant="primary" size="small" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                      <Button variant="outline" size="small" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      {template.demoUrl && (
                        <Button variant="outline" size="small">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Template Usage Guide */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
              How to Use Templates / টেমপ্লেট কিভাবে ব্যবহার করবেন
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Download className="h-6 w-6 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    1. Download
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Choose and download the template that best fits your needs.
                    All templates include source files and documentation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-success-100 dark:bg-success-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-success-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    2. Customize
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Modify colors, content, and branding to match your ministry
                    or department. Follow the included guidelines.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-warning-100 dark:bg-warning-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ExternalLink className="h-6 w-6 text-warning-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    3. Deploy
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Launch your customized template. All templates are tested
                    for accessibility and performance standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-primary-500 to-bangladesh-green text-white border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Need a Custom Template?
                </h2>
                <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                  Can&apos;t find what you need? Our team can create custom
                  templates specifically for your government department or
                  ministry.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="large">
                    Request Custom Template
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="large"
                    className="border-white text-white hover:bg-white hover:text-primary-500"
                  >
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
