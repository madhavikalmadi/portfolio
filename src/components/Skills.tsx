import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Code,
  Database,
  BarChart3,
  Brain,
  FileSpreadsheet,
  TrendingUp,
  Cpu,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('programming');

  const skillCategories = {
    programming: {
      title: 'Programming & Development',
      icon: Code,
      skills: [
        { name: '🐍 Python', description: 'Data analysis • Visualization • Machine learning using NumPy • Scikit-learn • Matplotlib • Seaborn • yfinance • XGBoost' },
        { name: '🗄 SQL', description: 'MySQL' },
        { name: '🌐 HTML', description: 'Web structure and semantics' },
        { name: '🎨 CSS', description: 'Styling and responsive design' },
      ]
    },
    analytics: {
      title: 'Data Analytics & Business Intelligence (BI)',
      icon: BarChart3,
      skills: [
        { name: '📊 Pandas', description: 'Data manipulation and analysis' },
        { name: '🧹 Data Cleaning and Preprocessing', description: 'Handling missing values • outliers • data normalization' },
        { name: '📈 Exploratory Data Analysis (EDA)', description: 'Visualizing data distributions • correlations • trends' },
        { name: '📊 Business Intelligence', description: 'Transforming data into actionable insights for decision-making' },
        { name: '📗 Excel', description: 'Advanced formulas • pivot tables • charts' },
        { name: '🖥️ Streamlit', description: 'Building interactive data web applications and dashboards' }
      ]
    },
    machine_learning: {
      title: 'Machine Learning & AI',
      icon: Brain,
      skills: [
        { name: '📏 Model Evaluation', description: 'Hyperparameter tuning • performance metrics' },
        { name: '⚙️ Feature Engineering', description: 'Creating and selecting relevant features for models' },
        { name: '💬 Natural Language Processing (NLP)', description: 'Text processing • sentiment analysis' },
        { name: '🎯 Supervised Learning', description: 'Regression • Classification' },
        { name: '🔍 Unsupervised Learning', description: 'Clustering • Dimensionality Reduction' },
        { name: '🧠 Deep Learning', description: 'TensorFlow • Keras • Neural Networks' }
      ]
    }
  };

  const categoryKeys = Object.keys(skillCategories);

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 border-b-4 border-primary inline-block pb-2 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            A comprehensive toolkit for modern data analysis and machine learning
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categoryKeys.map((key) => {
            const category = skillCategories[key];
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeCategory === key
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-card-foreground hover:bg-muted'
                  }`}
              >
                <Icon className="h-5 w-5" />
                <span className="hidden sm:inline">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold">
                  {skill.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Apache Spark', 'Flask', 'MongoDB', 'Linux', 'Hadoop',
            ].map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="px-3 py-1 text-sm text-gray-800 border-gray-300 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
