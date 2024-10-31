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
  experience: {
    title: string
    items: {
      title: string
      company: string
      period: string
      description: string[]
      technologies: string[]
    }[]
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
          '开发决策支持系统(DSS)预测HELOC申请人信用风险',
          '使用Python、Numpy和Scikit-learn构建预测模型',
          '应用决策树、随机森林、SVM等机器学习技术'
        ],
        achievements: [
          '构建了85%+准确率的预测模型',
          '开发了直观的用户界面'
        ]
      },
      pmg: {
        title: 'PMG生产优化系统',
        subtitle: '线性规划与成本优化',
        description: [
          '使用Excel和Python开发线性优化模型',
          '优化Q1生产计划，最小化生产成本'
        ],
        achievements: [
          '显著降低了生产成本',
          '提高了资源利用效率'
        ]
      },
      education: {
        title: '教育数据分析平台',
        subtitle: '学生成绩分析与教育策略优化',
        description: [
          '使用Tableau和R分析学生成绩趋势',
          '进行线性回归分析评估课程类型影响'
        ],
        achievements: [
          '发现了关键的学习趋势',
          '提供了可行的教育策略建议'
        ]
      },
      business: {
        title: '业务运营分析系统',
        subtitle: 'MySQL数据分析与可视化',
        description: [
          '执行ETL流程整合数据',
          '开发SQL查询识别最畅销产品'
        ],
        achievements: [
          '优化了采购策略',
          '提升了整体业务表现'
        ]
      }
    },
    common: {
      backHome: '返回首页',
      technologies: '技术栈',
      details: '详情',
      close: '关闭'
    },
    experience: {
      title: '工作经验',
      items: [
        {
          title: "研究助理",
          company: "专利技术功能测量项目",
          period: "2023",
          description: [
            "参与生成式AI项目开发",
            "进行数据收集与处理",
            "执行NLP分析任务"
          ],
          technologies: ["AI", "NLP", "数据分析"]
        },
        {
          title: "尽职调查分析师",
          company: "Simon School Venture Fund",
          period: "2022",
          description: [
            "对数字商务领域初创企业进行评估",
            "分析医疗保健行业竞争态势",
            "参与投资决策流程"
          ],
          technologies: ["市场分析", "财务建模", "行业研究"]
        }
      ]
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
          'Applied machine learning techniques including Decision Trees, Random Forests, SVM'
        ],
        achievements: [
          'Built prediction model with 85%+ accuracy',
          'Developed intuitive user interface'
        ]
      },
      pmg: {
        title: 'PMG Production Optimization System',
        subtitle: 'Linear Programming & Cost Optimization',
        description: [
          'Developed linear optimization model using Excel and Python',
          'Optimized Q1 production schedule',
          'Maximized machine utilization',
          'Conducted sensitivity analysis for cost-saving opportunities'
        ],
        achievements: [
          'Significantly reduced production costs',
          'Improved resource utilization',
          'Provided data-driven decision support to management'
        ]
      },
      education: {
        title: 'Education Data Analysis Platform',
        subtitle: 'Student Performance Analysis & Strategy Optimization',
        description: [
          'Analyzed student performance trends using Tableau and R',
          'Conducted linear regression analysis for course impact',
          'Optimized market segmentation using Elbow Method',
          'Provided data-driven educational strategy insights'
        ],
        achievements: [
          'Identified key learning trends',
          'Provided actionable educational strategies',
          'Optimized course offerings'
        ]
      },
      business: {
        title: 'Business Operations Analysis System',
        subtitle: 'MySQL Data Analysis & Visualization',
        description: [
          'Executed ETL processes integrating six data tables',
          'Developed SQL queries to identify best-selling products',
          'Analyzed consumer preferences',
          'Visualized sales performance using Tableau'
        ],
        achievements: [
          'Optimized procurement strategies',
          'Improved overall business performance',
          'Established efficient data analysis pipeline'
        ]
      }
    },
    common: {
      backHome: 'Back Home',
      technologies: 'Technologies',
      details: 'Details',
      close: 'Close'
    },
    experience: {
      title: 'Work Experience',
      items: [
        {
          title: "Research Assistant",
          company: "Patent Technology Function Measurement Project",
          period: "2023",
          description: [
            "Participated in generative AI project development",
            "Conducted data collection and processing",
            "Performed NLP analysis tasks"
          ],
          technologies: ["AI", "NLP", "Data Analysis"]
        },
        {
          title: "Due Diligence Analyst",
          company: "Simon School Venture Fund",
          period: "2022",
          description: [
            "Evaluated startups in digital commerce sector",
            "Analyzed healthcare industry competitive landscape",
            "Participated in investment decision-making process"
          ],
          technologies: ["Market Analysis", "Financial Modeling", "Industry Research"]
        }
      ]
    }
  }
} 