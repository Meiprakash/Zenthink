export const ServiceDetails = {
  categories: [
    {
      id: 1,
      title: "Software Development",
      slug: "software-development",
      sections: [
        {
          id: "1a",
          title: "Custom Software Development",
          slug: "custom-software-development",
          overview:
            "Focuses on building software solutions specifically designed to meet an organization’s unique business requirements. Our custom-built solutions align precisely with business processes, compliance needs, and future scalability plans.",
          deliveryModel:
            "Structured, transparent, and business-driven lifecycle-based model ensuring quality and security.",
          groups: [
            {
              label: "Core Enterprise & Business Applications",
              items: [
                "Enterprise business management systems",
                "Internal operations platforms",
                "Department-specific applications (HR, Finance, Sales)",
                "Multi-user & multi-location systems",
                "Mission-critical applications",
              ],
            },
            {
              label: "Workflow & Automation",
              items: [
                "Workflow automation and approval systems",
                "Request and decision-tracking apps",
                "Document management systems",
                "Business process management (BPM)",
                "Task and ticketing platforms",
              ],
            },
            {
              label: "Enterprise Management Systems",
              items: [
                "Custom CRM applications",
                "Custom ERP modules (Inventory, Finance)",
                "HRMS applications (Payroll, Performance)",
                "Billing and invoicing systems",
              ],
            },
            {
              label: "Identity, Access & Security",
              items: [
                "Role-based access control (RBAC)",
                "User, admin, and partner portals",
                "Secure authentication applications",
                "User activity tracking",
              ],
            },
            {
              label: "Data, Reporting & Compliance",
              items: [
                "Management dashboards & MIS",
                "Business intelligence applications",
                "Real-time operational monitoring",
                "Audit-ready reporting systems",
              ],
            },
          ],
          industries: [
            "Healthcare",
            "BFSI",
            "Manufacturing",
            "Education",
            "Retail",
            "Government",
            "Logistics",
          ],
        },
        {
          id: "1b",
          title: "Web Application Development",
          slug: "web-application-development",
          overview:
            "Focuses on building secure, scalable, and high-performance browser-based applications that support business operations and digital service delivery.",
          groups: [
            {
              label: "Core Business Web Applications",
              items: [
                "Enterprise web-based management systems",
                "Internal web portals",
                "Department-specific web apps",
                "Multi-location web platforms",
              ],
            },
            {
              label: "Workflow & Automation Web",
              items: [
                "Web-based workflow automation",
                "Approval management portals",
                "Document management web systems",
                "Task and ticketing platforms",
              ],
            },
            {
              label: "Identity & Access Web",
              items: [
                "RBAC web platforms",
                "User and partner web portals",
                "Secure authentication web apps",
                "Activity logging web systems",
              ],
            },
          ],
          industries: [
            "Healthcare",
            "BFSI",
            "Manufacturing",
            "Education",
            "Retail",
            "Government",
            "Logistics",
          ],
        },
        {
          id: "1c",
          title: "Mobile App Development",
          slug: "mobile-app-development",
          overview:
            "Building secure, scalable, and high-performance mobile applications for Android, iOS, and Flutter to enable mobility and faster decision-making.",
          platforms: ["Android", "iOS", "Flutter"],
          groups: [
            {
              label: "Consumer & Business Mobile",
              items: [
                "Customer-facing mobile apps",
                "Brand engagement apps",
                "Multi-user mobile platforms",
                "High-performance apps",
              ],
            },
            {
              label: "Enterprise & Workforce Mobility",
              items: [
                "Employee management apps",
                "Field-force mobility solutions",
                "Attendance & location-based apps",
                "Offline-capable mobile apps",
              ],
            },
            {
              label: "Commerce & Transactions",
              items: [
                "Mobile commerce & ordering",
                "Service booking apps",
                "Subscription-based apps",
                "Payment-enabled apps",
              ],
            },
          ],
          industries: [
            "Healthcare",
            "BFSI",
            "Manufacturing",
            "Education",
            "Retail",
            "Government",
            "Logistics",
          ],
        },
        {
          id: "1d",
          title: "SaaS & PaaS Development",
          slug: "saas-paas-development",
          overview:
            "Building scalable, subscription-based software platforms and extensible technology platforms that serve multiple customers from a single solution.",
          groups: [
            {
              label: "SaaS Product Platforms",
              items: [
                "Subscription-based products",
                "Multi-tenant SaaS apps",
                "B2B and B2C SaaS platforms",
                "Usage-based solutions",
              ],
            },
            {
              label: "Platform-as-a-Service (PaaS)",
              items: [
                "API and integration platforms",
                "Data orchestration platforms",
                "Internal rapid development platforms",
              ],
            },
            {
              label: "Subscription Management",
              items: [
                "Tenant and org management",
                "Plan and license management",
                "Secure authentication platforms",
              ],
            },
          ],
          industries: [
            "Healthcare",
            "BFSI",
            "Manufacturing",
            "Education",
            "Retail",
            "Government",
            "Logistics",
          ],
        },
        {
          id: "1e",
          title: "Website Design & Development",
          slug: "website-design-development",
          overview:
            "Creating professional, responsive, and visually engaging websites that establish digital presence and drive user engagement.",
          groups: [
            {
              label: "Corporate & Business",
              items: [
                "Corporate profile websites",
                "Service showcase websites",
                "Institutional websites",
                "Multi-page informational sites",
              ],
            },
            {
              label: "Marketing & Campaigns",
              items: [
                "Landing pages for products",
                "Lead generation pages",
                "Microsites",
                "Event announcement websites",
              ],
            },
            {
              label: "Portals & Info",
              items: [
                "Customer portals",
                "Partner information websites",
                "Public-facing dashboards",
              ],
            },
          ],
          industries: [
            "IT Services",
            "Professional Services",
            "Education",
            "Healthcare",
            "Manufacturing",
            "Retail",
            "Government",
          ],
        },
        {
          id: "1f",
          title: "Legacy System Modernization",
          slug: "legacy-system-modernization",
          overview:
            "Transforming outdated software systems into modern, secure, and scalable platforms without disrupting ongoing business operations.",
          groups: [
            {
              label: "Application Modernization",
              items: [
                "Monolith modernization",
                "Re-engineering legacy systems",
                "Migration to modern architectures",
                "UI and usability modernization",
              ],
            },
            {
              label: "Data Transformation",
              items: [
                "Database optimization",
                "Data restructuring",
                "Data integrity enhancement",
                "Historical data retention",
              ],
            },
            {
              label: "Security & Compliance",
              items: [
                "Security hardening",
                "Access control modernization",
                "Audit logging enablement",
                "Governance-focused upgrades",
              ],
            },
          ],
          industries: [
            "BFSI",
            "Manufacturing",
            "Government",
            "Healthcare",
            "Telecom",
            "Logistics",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Database & Data Services",
      slug: "database-data-services",
      sections: [
        {
          id: "3a",
          title: "Database as a Service ",
          slug: "dbaas",
          overview:
            "Providing managed, scalable, and secure database solutions that support business applications without operational complexity.",
          groups: [
            {
              label: "Managed Database Platforms",
              items: [
                "Managed relational/NoSQL DBs",
                "High-availability systems",
                "Enterprise-optimized databases",
                "Scalable workloads",
              ],
            },
            {
              label: "Security & Governance",
              items: [
                "Role-based access",
                "Encrypted database systems",
                "Compliance-aligned storage",
              ],
            },
          ],
          industries: ["BFSI", "Healthcare", "SaaS", "Retail", "Government"],
        },
        {
          id: "3b",
          title: "Database Design & Optimization",
          slug: "database-design-optimization",
          overview:
            "Structuring and refining databases to ensure efficient storage, fast query performance, and long-term scalability.",
          groups: [
            {
              label: "Architecture & Modeling",
              items: [
                "Logical and physical design",
                "Transactional data modeling",
                "Schema design",
              ],
            },
            {
              label: "Performance Tuning",
              items: [
                "Query tuning",
                "Indexing strategies",
                "Bottleneck reduction",
              ],
            },
          ],
          industries: ["SaaS", "BFSI", "Healthcare", "Retail", "Manufacturing"],
        },
        {
          id: "3c",
          title: "Data Migration",
          slug: "data-migration",
          overview:
            "We enable organizations to transform raw data into meaningful insights through structured, reliable, and analytics-ready data platforms. ",
          groups: [
            {
              label: "Migration Types",
              items: [
                "Legacy-to-Modern migration",
                "Platform-to-Platform transitions",
                "Application database migration",
                "Historical data reconciliation",
              ],
            },
          ],
          industries: ["BFSI", "Government", "Healthcare", "Manufacturing"],
        },
        {
          id: "3d",
          title: "Data Warehousing",
          slug: "data-warehousing",
          overview:
            "Structuring and refining databases to ensure efficient storage, fast query performance, and long-term scalability.",
          groups: [
            {
              label: "Enterprise Data Warehouses ",
              items: [
                "Centralized enterprise data warehouses",
                "Consolidation of operational and transactional data ",
                "Historical data storage and trend analysis platforms ",
              ],
            },
            {
              label: "Analytics & Reporting Warehouses ",
              items: [
                "Reporting-focused data warehouses",
                "Business intelligence and analytics data platforms",
                "Performance and KPI tracking repositories",
              ],
            },
            {
              label: "Compliance & Governance Data Platforms  ",
              items: [
                "Audit-ready and traceable data warehouses",
                "Regulatory and compliance reporting data stores ",
                "Data governance and access-controlled warehouses",
              ],
            },
          ],
          industries: ["SaaS", "BFSI", "Healthcare", "Retail", "Manufacturing"],
        },
      ],
    },
    {
      id: 4,
      title: "IT Support & Maintenance",
      slug: "it-support-maintenance",
      sections: [
        {
          id: "4a",
          title: "IT Helpdesk Support",
          slug: "it-helpdesk-support",
          overview:
            "Multi-level technical assistance (L1/L2/L3) to ensure smooth operations and minimal system downtime.",
          groups: [
            {
              label: "L1 Support",
              items: [
                "Account management",
                "Password resets",
                "Software install",
                "Ticket logging",
              ],
            },
            {
              label: "L2 Support",
              items: [
                "System troubleshooting",
                "Hardware diagnostics",
                "Network connectivity",
              ],
            },
            {
              label: "L3 Support",
              items: [
                "Server troubleshooting",
                "Root-cause analysis",
                "Critical incident resolution",
              ],
            },
          ],
          industries: [
            "BFSI",
            "Healthcare",
            "IT Services",
            "Manufacturing",
            "Government",
          ],
        },
        {
          id: "4b",
          title: "Remote & Onsite Support",
          slug: "remote-onsite-support",
          overview:
            "Remote & Onsite Support ensures continuous IT operations by resolving issues through real-time remote assistance and on-site interventions, helping businesses maintain productivity and operational efficiency.",
          groups: [
            {
              label: "Remote Support",
              items: [
                "Real-time troubleshooting for software and systems",
                "Network and connectivity issue resolution",
                "Remote monitoring and proactive alerts",
              ],
            },
            {
              label: "Onsite Support",
              items: [
                "Hardware repair and replacement",
                "System installation and upgrades",
                "Critical incident management and recovery",
              ],
            },
            {
              label: "Hybrid Support Models",
              items: [
                "Combination of remote and onsite coverage",
                "Scheduled preventive maintenance visits",
                "Flexible support for peak and off-peak periods",
              ],
            },
          ],
          industries: [
            "BFSI",
            "Healthcare & Life Sciences",
            "Manufacturing & Supply Chain",
            "Government & Public Sector",
            "IT & Technology Services",
            "Education & EdTech",
            "Retail & E-commerce",
            "Logistics & Transportation",
            "Telecom & Utilities",
            "Professional Services",
          ],
        },

        {
          id: "4c",
          title: "Annual Maintenance Contracts (AMC)",
          slug: "annual-maintenance-contracts",
          overview:
            "Structured, long-term IT support covering preventive and corrective maintenance for hardware and software.",
          groups: [
            {
              label: "Infrastructure Maintenance",
              items: [
                "Hardware inspection",
                "Update & patch management",
                "Network optimization",
                "Backup & disaster recovery",
              ],
            },
          ],
          industries: [
            "BFSI",
            "Healthcare",
            "Manufacturing",
            "Government",
            "IT Services",
          ],
        },
      ],
    },
    {
      id: 5,
      title: "DevOps & Automation",
      slug: "devops-automation",
      sections: [
        {
          id: "5a",
          title: "CI/CD Pipeline Implementation",
          slug: "cicd-pipeline",
          overview:
            "Automating build, test, and deployment processes to enable faster and error-free software delivery.",
          groups: [
            {
              label: "Pipeline Solutions",
              items: [
                "Automated build/test/deploy",
                "Version control integration",
                "Multi-environment pipelines",
                "Release automation",
              ],
            },
          ],
          industries: [
            "IT Services",
            "SaaS",
            "BFSI",
            "Healthcare",
            "Government",
          ],
        },
        {
          id: "5b",
          title: "Infrastructure as Code (IaC)",
          slug: "infrastructure-as-code",
          overview:
            "Infrastructure as Code (IaC) enables organizations to define, provision, and manage IT infrastructure using automation and code, ensuring consistent, scalable, and error-free deployments while reducing operational overhead.",
          groups: [
            {
              label: "IaC Solutions",
              items: [
                "Automated infrastructure provisioning and configuration",
                "Version-controlled infrastructure definitions",
                "Environment replication for Dev, QA, and Production",
                "Cloud infrastructure management and optimization",
                "Hybrid and multi-cloud infrastructure automation",
              ],
            },
          ],
          industries: [
            "IT & Technology Services",
            "SaaS & Product Companies",
            "BFSI",
            "Healthcare & Life Sciences",
            "Government & Public Sector",
            "Retail & E-commerce",
            "Manufacturing & Supply Chain",
            "Education & EdTech",
            "Logistics & Transportation",
            "Professional Services",
          ],
        },

        {
          id: "5c",
          title: "Docker & Kubernetes Services",
          slug: "docker-kubernetes",
          overview:
            "Containerization and orchestration to deliver scalable, portable, and efficient application deployment.",
          groups: [
            {
              label: "Container Services",
              items: [
                "Docker containerization",
                "Kubernetes cluster management",
                "Microservices orchestration",
                "Auto-scaling & load balancing",
              ],
            },
          ],
          industries: [
            "IT Services",
            "SaaS",
            "BFSI",
            "Healthcare",
            "Government",
          ],
        },
        {
          id: "5d",
          title: "Monitoring & Logging Solutions",
          slug: "monitoring-logging-solutions",
          overview:
            "Monitoring & Logging Solutions provide real-time visibility into applications, infrastructure, and services, enabling proactive issue detection, performance optimization, and faster incident response to ensure business continuity.",
          groups: [
            {
              label: "Monitoring & Logging Solutions",
              items: [
                "Real-time application and infrastructure monitoring",
                "Centralized log collection and analysis",
                "Alerts and notifications for system anomalies",
                "Performance and SLA tracking dashboards",
                "Root-cause analysis and incident reporting",
              ],
            },
          ],
          industries: [
            "IT & Technology Services",
            "SaaS & Product Companies",
            "BFSI",
            "Healthcare & Life Sciences",
            "Government & Public Sector",
            "Retail & E-commerce",
            "Manufacturing & Supply Chain",
            "Education & EdTech",
            "Logistics & Transportation",
            "Professional Services",
          ],
        },
        {
          id: "5e",
          title: "Release & Deployment Management",
          slug: "release-deployment-management",
          overview:
            "Release & Deployment Management ensures controlled, reliable, and efficient software delivery to production environments by reducing deployment risks, improving release quality, and enhancing lifecycle transparency.",
          groups: [
            {
              label: "Release & Deployment Services",
              items: [
                "Release planning and orchestration",
                "Automated deployment to multiple environments",
                "Version management and rollback strategies",
                "Deployment governance and approval workflows",
                "Coordination between development, QA, and operations teams",
              ],
            },
          ],
          industries: [
            "IT & Technology Services",
            "SaaS & Product Companies",
            "BFSI",
            "Healthcare & Life Sciences",
            "Government & Public Sector",
            "Retail & E-commerce",
            "Manufacturing & Supply Chain",
            "Education & EdTech",
            "Logistics & Transportation",
            "Professional Services",
          ],
        },
      ],
    },
  ],
};
