import { useState } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Brain, TrendingUp, Users, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Smart Investor Assistant',
      description:
        'A comprehensive, performance-driven stock analysis platform built with Streamlit. Analyzes the Indian Stock Market (NSE/BSE) using academic-grade metrics and real-time data.',
      category: 'analytics',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Streamlit', 'yfinance', 'MongoDB', 'Pandas', 'NumPy', 'Matplotlib'],
      features: [
        'Real-time market monitoring with personalized dashboard and watchlist analysis feed',
        'Sector & Thematic Advisor for comparing market categories (Banking, IT, etc.)',
        'Market Leaderboard with 10-year risk-adjusted scoring (CAGR, Sharpe, Sortino)',
        'Dual-mode Company Advisor for single stock deep-dives and head-to-head comparisons',
      ],
      github: 'https://github.com/madhavikalmadi/Stock-Analysis-and-Prediction',
      live: 'https://stock-analysis-and-prediction-qw2nwvktpxkzhbfzxwpakk.streamlit.app/',
      impact: 'Financial Analytics',
      icon: TrendingUp,
    },
    {
      id: 2,
      title: 'Next-Day IT Forecaster',
      description:
        'Built a platform analyzing 5 IT companies (TCS, Infosys, Wipro, HCL, L&T) using 5 years of Yahoo Finance data. Created dual models: Logistic Regression for investment safety and Linear Regression for next-day forecasts. Designed Flask dashboard with real-time visualizations and automated predictions.',
      category: 'analytics',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Flask', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Yahoo Finance API'],
      features: [
        'Dual-model architecture: Logistic Regression for investment safety scoring',
        'Linear Regression model for next-day stock price forecasting',
        'Flask web dashboard with real-time visualizations and automated daily predictions',
      ],
      github: 'https://github.com/madhavikalmadi/Next-Day-IT-Forecaster',
      impact: 'Financial Analysis',
      icon: TrendingUp,
    },
    {
      id: 3,
      title: 'Laptop Price Prediction',
      description:
        'Built an end-to-end data preprocessing and modeling pipeline using Pandas, NumPy, and Scikit-learn. Implemented and compared machine learning models such as Linear Regression and Gradient Boosting to analyze outcomes. Applied data visualization and evaluation metrics to assess model performance effectively.',
      category: 'machine-learning',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      features: [
        'Comprehensive data preprocessing with feature engineering on 12+ laptop specifications',
        'Comparative analysis of multiple ML models (Linear Regression, Random Forest, XGBoost)',
        'Interactive price prediction interface with real-time model performance metrics',
      ],
      github: 'https://github.com/madhavikalmadi/Laptop-Price-Analysis',
      impact: 'Machine Learning Model',
      icon: Brain,
    },
    {
      id: 4,
      title: 'Jobseekers Analytics – Applicant Shortlisting Model',
      description:
        'Conducted a structured project following the CRISP-ML(Q) methodology, covering business understanding, data preparation, and modeling. Applied machine learning algorithms including Logistic Regression, Decision Trees, Random Forest, and XGBoost for predictive analysis.',
      category: 'analytics',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      features: [
        'CRISP-ML(Q) methodology implementation for structured ML project lifecycle',
        'Multi-algorithm comparison (Logistic Regression, Decision Trees, Random Forest, XGBoost)',
        'Automated applicant scoring system with ranked shortlisting recommendations',
      ],
      github: 'https://github.com/madhavikalmadi/Job-Seeker-Analysis',
      impact: 'HR Analytics',
      icon: Users,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'machine-learning', label: 'Machine Learning' },
    { id: 'analytics', label: 'Analytics' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 border-b-4 border-primary inline-block pb-2 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Real-world data science projects showcasing end-to-end analytical capabilities
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category.id
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-card text-card-foreground hover:bg-muted'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={project.id}
                className="glass-card border-0 shadow-card hover:shadow-hover transition-all duration-500 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {project.impact}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                      disabled={project.github === '#'}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                    {project.live && (
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="px-8 py-3"
            onClick={() => window.open('https://github.com/madhavikalmadi', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
