type Translation = {
  nav: {
    about: string
    education: string
    skills: string
    experience: string
    projects: string
  }
  profile: {
    name: string
    title: string
    description: string
    skills: {
      dataAnalysis: string
      marketResearch: string
      businessInsight: string
    }
  }
  education: {
    title: string
    schools: {
      simon: {
        name: string
        degree: string
        gpa: string
      }
      usst: {
        name: string
        degree: string
        gpa: string
        awards: string
      }
    }
    photos: {
      kunming: {
        title: string
        description: string
      }
      study: {
        title: string
        description: string
      }
      lake: {
        title: string
        description: string
      }
    }
  }
  skills: {
    title: string
    programming: {
      title: string
      skills: {
        python: string
        r: string
        c: string
        javascript: string
        sql: string
        hardware: string
      }
    }
    analysis: {
      title: string
      skills: {
        statistics: string
        prediction: string
        machine: string
      }
    }
  }
  projects: {
    title: string
    heloc: {
      title: string
      subtitle: string
      description: string[]
      achievements: string[]
    }
    pmg: {
      title: string
      subtitle: string
      description: string[]
      achievements: string[]
    }
    education: {
      title: string
      subtitle: string
      description: string[]
      achievements: string[]
    }
    business: {
      title: string
      subtitle: string
      description: string[]
      achievements: string[]
    }
  }
  common: {
    backHome: string
    technologies: string
    details: string
    close: string
  }
}

export type Translations = {
  [key in 'zh' | 'en']: Translation
}

export const translations: Translations = {
  zh: {
    nav: {
      about: '关于我',
      education: '教育背景',
      skills: '专业技能',
      experience: '工作经验',
      projects: '项目经历'
    },
    profile: {
      name: '杨子婷',
      title: '市场分析与数据科学专家',
      description: '擅长数据分析和市场研究，热衷于将数据洞察转化为商业价值。在多个行业项目中积累了丰富的分析经验。',
      skills: {
        dataAnalysis: '数据分析',
        marketResearch: '市场研究',
        businessInsight: '商业洞察'
      }
    },
    education: {
      title: '教育背景',
      schools: {
        simon: {
          name: '罗切斯特大学Simon商学院',
          degree: '市场分析硕士',
          gpa: '3.57/4.0'
        },
        usst: {
          name: '上海理工大学',
          degree: '传播学学士',
          gpa: '3.54/4.0',
          awards: '两次获得优秀学习奖学金'
        }
      },
      photos: {
        kunming: {
          title: '昆明',
          description: '我的家乡昆明'
        },
        study: {
          title: '留学',
          description: '罗切斯特大学留学生活'
        },
        lake: {
          title: '翠湖',
          description: '美丽的翠湖公园'
        }
      }
    },
    skills: {
      title: '专业技能',
      programming: {
        title: '编程语言',
        skills: {
          python: 'Python',
          r: 'R',
          c: 'C',
          javascript: 'JavaScript',
          sql: 'SQL',
          hardware: '硬件开发'
        }
      },
      analysis: {
        title: '数据分析',
        skills: {
          statistics: '统计分析',
          prediction: '预测建模',
          machine: '机器学习'
        }
      }
    },
    projects: {
      title: '项目经历',
      heloc: {
        title: 'HELOC决策支持系统',
        subtitle: '信用风险预测与可视化平台',
        description: [
          '开发了DSS来预测HELOC申请人的信用风险',
          '使用Python、Numpy和Scikit-learn构建预测模型',
          '应用包括决策树、随机森林和SVM的机器学习技术',
          '创建了使用Streamlit的可视化界面',
          '使用F1分数和Type II错误评估模型性能'
        ],
        achievements: [
          '构建了85%+准确率的预测模型',
          '开发了直观的用户界面，提高了银行的效率',
          '实现了实时风险评估'
        ]
      },
      pmg: {
        title: 'PMG项目',
        subtitle: '项目管理与数据科学',
        description: [
          '参与了PMG项目的多个子项目',
          '负责数据分析和市场研究',
          '使用Python和SQL进行数据处理和分析'
        ],
        achievements: [
          '提高了项目管理效率',
          '开发了数据驱动的决策支持系统'
        ]
      },
      education: {
        title: '教育项目',
        subtitle: '教育背景与数据科学',
        description: [
          '参与了多个教育项目的研究',
          '负责数据分析和市场研究',
          '使用Python和SQL进行数据处理和分析'
        ],
        achievements: [
          '提高了教育项目的效率',
          '开发了数据驱动的决策支持系统'
        ]
      },
      business: {
        title: '商业项目',
        subtitle: '商业分析与数据科学',
        description: [
          '参与了多个商业项目的研究',
          '负责数据分析和市场研究',
          '使用Python和SQL进行数据处理和分析'
        ],
        achievements: [
          '提高了商业项目的效率',
          '开发了数据驱动的决策支持系统'
        ]
      }
    },
    common: {
      backHome: '返回首页',
      technologies: '技术',
      details: '详情',
      close: '关闭'
    }
  },
  en: {
    nav: {
      about: 'About',
      education: 'Education',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects'
    },
    profile: {
      name: 'Ziting Yang',
      title: 'Market Analysis & Data Science Expert',
      description: 'Specialized in data analysis and market research, passionate about transforming data insights into business value. Rich experience in various industry projects.',
      skills: {
        dataAnalysis: 'Data Analysis',
        marketResearch: 'Market Research',
        businessInsight: 'Business Insight'
      }
    },
    education: {
      title: 'Education',
      schools: {
        simon: {
          name: 'Simon Business School, University of Rochester',
          degree: 'MS in Marketing Analytics',
          gpa: '3.57/4.0'
        },
        usst: {
          name: 'University of Shanghai for Science and Technology',
          degree: 'BA in Communication',
          gpa: '3.54/4.0',
          awards: 'Excellent Learning Scholarship (Twice)'
        }
      },
      photos: {
        kunming: {
          title: 'Kunming',
          description: 'My hometown Kunming'
        },
        study: {
          title: 'Study Abroad',
          description: 'Life at University of Rochester'
        },
        lake: {
          title: 'Green Lake',
          description: 'Beautiful Green Lake Park'
        }
      }
    },
    skills: {
      title: 'Professional Skills',
      programming: {
        title: 'Programming Languages',
        skills: {
          python: 'Python',
          r: 'R',
          c: 'C',
          javascript: 'JavaScript',
          sql: 'SQL',
          hardware: 'Hardware Development'
        }
      },
      analysis: {
        title: 'Data Analysis',
        skills: {
          statistics: 'Statistical Analysis',
          prediction: 'Predictive Modeling',
          machine: 'Machine Learning'
        }
      }
    },
    projects: {
      title: 'Projects',
      heloc: {
        title: 'HELOC Decision Support System',
        subtitle: 'Credit Risk Prediction & Visualization Platform',
        description: [
          'Developed DSS to predict HELOC applicant credit risk',
          'Built prediction models using Python, Numpy, and Scikit-learn',
          'Applied machine learning techniques including Decision Trees, Random Forests, SVM',
          'Created interactive visualization interface using Streamlit',
          'Evaluated model performance using F1 scores and Type II errors'
        ],
        achievements: [
          'Built prediction model with 85%+ accuracy',
          'Developed intuitive user interface improving bank efficiency',
          'Implemented real-time risk assessment'
        ]
      },
      pmg: {
        title: 'PMG Project',
        subtitle: 'Project Management & Data Science',
        description: [
          'Participated in multiple subprojects of the PMG project',
          'Responsible for data analysis and market research',
          'Data processing and analysis using Python and SQL'
        ],
        achievements: [
          'Improved project management efficiency',
          'Developed data-driven decision support system'
        ]
      },
      education: {
        title: 'Education Projects',
        subtitle: 'Education Background & Data Science',
        description: [
          'Participated in multiple research projects',
          'Responsible for data analysis and market research',
          'Data processing and analysis using Python and SQL'
        ],
        achievements: [
          'Improved efficiency of education projects',
          'Developed data-driven decision support system'
        ]
      },
      business: {
        title: 'Business Projects',
        subtitle: 'Business Analysis & Data Science',
        description: [
          'Participated in multiple research projects',
          'Responsible for data analysis and market research',
          'Data processing and analysis using Python and SQL'
        ],
        achievements: [
          'Improved efficiency of business projects',
          'Developed data-driven decision support system'
        ]
      }
    },
    common: {
      backHome: 'Back Home',
      technologies: 'Technologies',
      details: 'Details',
      close: 'Close'
    }
  }
} 