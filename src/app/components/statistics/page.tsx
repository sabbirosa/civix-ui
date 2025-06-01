"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Award,
    BarChart3,
    Check,
    CheckCircle,
    Clock,
    FileText,
    PieChart,
    Target,
    TrendingDown,
    TrendingUp,
    Users,
    XCircle,
} from "lucide-react";
import { useState } from "react";

// Statistics Components for demonstration
const StatCard = ({
  title,
  value,
  change,
  trend,
  icon: Icon,
  description,
}: {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {value}
          </p>
          <div className="flex items-center mt-1">
            {trend === "up" ? (
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
            )}
            <span
              className={`text-sm ${trend === "up" ? "text-green-600" : "text-red-600"}`}
            >
              {change}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
              {description}
            </span>
          </div>
        </div>
        <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
    </CardContent>
  </Card>
);

const ProgressBar = ({
  label,
  value,
  total,
  percentage,
  color = "blue",
}: {
  label: string;
  value: number;
  total: number;
  percentage: number;
  color?: string;
}) => {
  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    orange: "bg-orange-500",
    purple: "bg-purple-500",
    red: "bg-red-500",
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-gray-900 dark:text-gray-100">
          {label}
        </span>
        <span className="text-gray-500 dark:text-gray-400">
          {value.toLocaleString()}
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${colorClasses[color as keyof typeof colorClasses]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>{percentage}% of total</span>
        <span>Target: {total.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default function StatisticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

  const governmentMetrics = [
    {
      title: "Total Applications / মোট আবেদন",
      value: "১২,৫৪৭",
      change: "+15.3%",
      trend: "up" as const,
      icon: FileText,
      description: "This month / এই মাসে",
    },
    {
      title: "Active Citizens / সক্রিয় নাগরিক",
      value: "৮,৪২৯",
      change: "+8.7%",
      trend: "up" as const,
      icon: Users,
      description: "Registered users / নিবন্ধিত ব্যবহারকারী",
    },
    {
      title: "Processing Time / প্রক্রিয়াকরণের সময়",
      value: "৪.২ days / দিন",
      change: "-12.5%",
      trend: "down" as const,
      icon: Clock,
      description: "Average / গড়",
    },
    {
      title: "Success Rate / সফলতার হার",
      value: "৯৪.৮%",
      change: "+3.2%",
      trend: "up" as const,
      icon: CheckCircle,
      description: "Completion rate / সম্পূর্ণতার হার",
    },
  ];

  const servicePerformance = [
    {
      service: "Birth Certificate / জন্ম নিবন্ধন",
      applications: 3547,
      completion: 96.2,
      avgTime: "3.1 days",
      color: "green",
    },
    {
      service: "Passport / পাসপোর্ট",
      applications: 2341,
      completion: 94.8,
      avgTime: "5.2 days",
      color: "blue",
    },
    {
      service: "Trade License / ট্রেড লাইসেন্স",
      applications: 1892,
      completion: 92.1,
      avgTime: "6.8 days",
      color: "orange",
    },
    {
      service: "NID Registration / এনআইডি নিবন্ধন",
      applications: 4767,
      completion: 98.5,
      avgTime: "2.4 days",
      color: "purple",
    },
  ];

  const regionalData = [
    {
      division: "Dhaka / ঢাকা",
      applications: 4234,
      percentage: 33.7,
      population: "9.1M",
    },
    {
      division: "Chittagong / চট্টগ্রাম",
      applications: 2891,
      percentage: 23.0,
      population: "8.2M",
    },
    {
      division: "Rajshahi / রাজশাহী",
      applications: 1567,
      percentage: 12.5,
      population: "2.6M",
    },
    {
      division: "Khulna / খুলনা",
      applications: 1344,
      percentage: 10.7,
      population: "1.8M",
    },
    {
      division: "Barisal / বরিশাল",
      applications: 987,
      percentage: 7.9,
      population: "8.3M",
    },
    {
      division: "Sylhet / সিলেট",
      applications: 1524,
      percentage: 12.2,
      population: "3.5M",
    },
  ];

  const satisfactionData = [
    {
      category: "Overall Experience / সামগ্রিক অভিজ্ঞতা",
      rating: 4.2,
      responses: 2847,
      percentage: 84,
    },
    {
      category: "Process Speed / প্রক্রিয়ার গতি",
      rating: 3.8,
      responses: 2847,
      percentage: 76,
    },
    {
      category: "Staff Helpfulness / কর্মীদের সহায়তা",
      rating: 4.5,
      responses: 2847,
      percentage: 90,
    },
    {
      category: "Website Usability / ওয়েবসাইট ব্যবহারযোগ্যতা",
      rating: 4.1,
      responses: 2847,
      percentage: 82,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Statistics
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Data visualization and analytics components for displaying government
          metrics, performance indicators, and citizen engagement statistics
          with bilingual support.
        </p>
      </div>

      {/* Government Dashboard */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Government Dashboard Metrics
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Key performance indicators for government services with real-time data
          and trend analysis.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-6">
            {/* Period Selector */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Performance Overview / কর্মক্ষমতার সংক্ষিপ্ত বিবরণ
              </h3>
              <div className="flex space-x-2">
                {["daily", "weekly", "monthly", "yearly"].map((period) => (
                  <Button
                    key={period}
                    variant={selectedPeriod === period ? "primary" : "outline"}
                    size="small"
                    onClick={() => setSelectedPeriod(period)}
                    className="capitalize"
                  >
                    {period}
                  </Button>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {governmentMetrics.map((metric) => (
                <StatCard key={metric.title} {...metric} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Performance Analysis */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Service Performance Analysis
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Detailed breakdown of government service performance metrics and
          completion rates.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">
                Service Completion Rates / সেবা সম্পূর্ণতার হার
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {servicePerformance.map((service) => (
                <ProgressBar
                  key={service.service}
                  label={service.service}
                  value={service.applications}
                  total={service.applications}
                  percentage={service.completion}
                  color={service.color}
                />
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">
                Monthly Application Trends / মাসিক আবেদনের প্রবণতা
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { month: "January / জানুয়ারি", count: 8947, growth: 12.3 },
                  { month: "February / ফেব্রুয়ারি", count: 9823, growth: 9.8 },
                  { month: "March / মার্চ", count: 12547, growth: 27.7 },
                  { month: "April / এপ্রিল", count: 11234, growth: -10.5 },
                  { month: "May / মে", count: 13891, growth: 23.7 },
                ].map((month) => (
                  <div
                    key={month.month}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {month.month}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        {month.count.toLocaleString()}
                      </div>
                      <div
                        className={`text-xs ${month.growth > 0 ? "text-green-600" : "text-red-600"}`}
                      >
                        {month.growth > 0 ? "+" : ""}
                        {month.growth}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Regional Distribution */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Regional Distribution
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Geographic breakdown of service usage across different administrative
          divisions.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalData.map((division) => (
              <div
                key={division.division}
                className="space-y-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">
                    {division.division}
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Pop: {division.population}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Applications
                    </span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {division.applications.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${division.percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {division.percentage}% of total applications
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Citizen Satisfaction */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Citizen Satisfaction Survey
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Feedback and satisfaction ratings from citizens using government
          services.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {satisfactionData.map((item) => (
                <Card key={item.category}>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {item.rating}/5
                      </div>
                      <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                        {item.category}
                      </div>
                      <div className="flex justify-center items-center space-x-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div
                            key={star}
                            className={`w-4 h-4 ${star <= item.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                          >
                            ★
                          </div>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {item.responses} responses
                      </div>
                      <div className="mt-2">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                          <div
                            className="bg-green-500 h-1 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                        <div className="text-xs text-green-600 mt-1">
                          {item.percentage}% satisfied
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2" />
              Performance Dashboards
            </h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm mt-2">
              Real-time monitoring of government service metrics, KPIs, and
              operational efficiency
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 flex items-center">
              <PieChart className="h-5 w-5 mr-2" />
              Analytics Reports
            </h3>
            <p className="text-green-800 dark:text-green-200 text-sm mt-2">
              Comprehensive data analysis for policy decisions and resource
              allocation
            </p>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
            <h3 className="font-semibold text-orange-900 dark:text-orange-100 flex items-center">
              <Target className="h-5 w-5 mr-2" />
              Goal Tracking
            </h3>
            <p className="text-orange-800 dark:text-orange-200 text-sm mt-2">
              Monitor progress towards government initiatives and public service
              targets
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 flex items-center">
              <Award className="h-5 w-5 mr-2" />
              Citizen Feedback
            </h3>
            <p className="text-purple-800 dark:text-purple-200 text-sm mt-2">
              Satisfaction surveys, service ratings, and public feedback
              analysis
            </p>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Best Practices
        </h2>
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
              Data Visualization
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
              <li>
                • Use clear, intuitive charts that are easy to understand at a
                glance
              </li>
              <li>
                • Choose appropriate chart types for different data
                relationships
              </li>
              <li>
                • Maintain consistent color schemes and labeling across all
                charts
              </li>
              <li>
                • Provide context with trend indicators and comparative data
              </li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
              Data Accuracy & Transparency
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <li>• Ensure data sources are reliable and regularly updated</li>
              <li>
                • Provide clear timestamps and data collection methodologies
              </li>
              <li>
                • Include confidence intervals and margin of error when
                applicable
              </li>
              <li>
                • Make raw data accessible for transparency and verification
              </li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">
              User Experience
            </h3>
            <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
              <li>
                • Design responsive statistics that work on all device sizes
              </li>
              <li>• Provide interactive filters and drill-down capabilities</li>
              <li>• Use progressive disclosure to avoid overwhelming users</li>
              <li>
                • Include export options for further analysis and reporting
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Usage Guidelines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 flex items-center">
              <Check className="h-5 w-5 mr-2" />
              Do
            </h3>
            <ul className="space-y-3 text-green-700 dark:text-green-200">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Use clear, descriptive titles and labels for all data points
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Provide bilingual labels for government transparency
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Include trend indicators to show data direction
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Update statistics regularly to maintain relevance
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Use consistent units and formatting across metrics
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Provide context with benchmarks and targets
              </li>
            </ul>
          </div>
          <div className="space-y-4 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 flex items-center">
              <XCircle className="h-5 w-5 mr-2" />
              Don&apos;t
            </h3>
            <ul className="space-y-3 text-red-700 dark:text-red-200">
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Display too many metrics without clear hierarchy
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Use misleading scales or chart manipulations
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Present data without proper context or timeframes
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Overwhelm users with complex visualizations
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Forget to include data source and collection dates
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Use inappropriate color schemes that reduce readability
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Component Reference */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Component Specifications
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Detailed specifications and characteristics of the Statistics component for implementation guidance.
        </p>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Specification
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100">
                    Details
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100">
                    Purpose & Usage
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Component Type
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Data Visualization Element
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Displays numerical data and metrics in visually appealing and accessible formats
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Complexity Level
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                      Medium
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Moderate complexity with data formatting and visual representation features
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Chart Types
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Bar charts, Line graphs, Pie charts, Progress indicators, Metric cards
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Multiple visualization options for different data types and use cases
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Data Features
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Real-time updates, Historical trends, Comparative analysis, Filtering options
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Comprehensive data handling for government metrics and performance indicators
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Interactive Elements
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Hover details, Click-to-drill-down, Tooltip information, Export functionality
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Enhanced user interaction for detailed data exploration and analysis
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Accessibility Features
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Screen reader support, Keyboard navigation, Alternative text, Data tables
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Ensures data accessibility for all citizens including those with disabilities
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Language Support
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    English, Bengali (বাংলা)
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Bilingual labels, legends, and data formatting for government applications
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Design System
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Color tokens, Typography scale, Chart styling, Animation system
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Consistent with CivixUI design principles and government branding
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Responsive Features
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Mobile-friendly charts, Adaptive layouts, Touch interactions, Scalable graphics
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Optimized for various screen sizes and mobile government service applications
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Use Cases
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Performance dashboards, Service metrics, Budget visualization, Population data, Progress tracking
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Essential for displaying government data and performance metrics to citizens
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Accessibility
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li>
              • Alternative text descriptions for all charts and visual data
            </li>
            <li>• High contrast color schemes that meet WCAG standards</li>
            <li>• Screen reader compatible data tables with proper headers</li>
            <li>• Keyboard navigation support for interactive elements</li>
            <li>• Clear focus indicators for all interactive components</li>
            <li>• Text alternatives for color-coded information</li>
            <li>• Semantic markup for data relationships and hierarchies</li>
            <li>• Consistent labeling and data formatting patterns</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
