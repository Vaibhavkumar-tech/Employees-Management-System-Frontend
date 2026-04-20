const employees= [
    {
      "id": 1,
      "firstName": "Amit Sharma",
      "email": "employee1@example.com",
      "password": "123",
      "job": "Frontend Developer",
      "img": "https://i.pinimg.com/736x/6f/ab/e5/6fabe52272c04b0982ba0a0bc6a73779.jpg",
      "about": "AMIT is a passionate FRONTEND DEVELOPER with strong experience in creating modern, responsive, and visually attractive web applications. He has deep knowledge of React JS, JavaScript, Tailwind CSS, HTML, and CSS, which allows him to build high-quality interfaces for different industries. AMIT focuses on writing clean, reusable, and scalable code so projects remain easy to maintain and upgrade in the future. He has worked on dashboards, ecommerce websites, landing pages, and business portals where user experience and performance were major priorities. He is skilled in responsive design and ensures every website works perfectly on mobile, tablet, and desktop devices. AMIT enjoys solving UI bugs, improving page speed, and adding smooth animations that enhance user interaction. He regularly works with backend developers and designers to turn concepts into real products. His communication skills and professional mindset help him perform well in team environments. AMIT also understands Git, deployment processes, and API integration. He believes learning never stops and constantly updates himself with new frontend tools and trends. His dedication to quality and innovation makes him a reliable developer for any organization seeking growth and digital success.",
      "skills": ["React JS", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
      "language": ["Hindi", "English"],
      "availability": "Full Time",
      "age": 24,
      "location": "Delhi, India",
      "experience": "2 Years"
      ,
      "task_count": {
        "active": 1,
        "new_task": 1,
        "complete": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "complete": false,
          "failed": false,
          "task_title": "Fix login bug",
          "task_description": "Resolve issue with user login API",
          "task_date": "2026-04-13",
          "category": "Development"
        },
        {
          "active": false,
          "new_task": false,
          "complete": true,
          "failed": false,
          "task_title": "Update UI",
          "task_description": "Improve dashboard UI using Tailwind",
          "task_date": "2026-04-10",
          "category": "Frontend"
        },
        {
          "active": false,
          "new_task": false,
          "complete": false,
          "failed": true,
          "task_title": "Deploy app",
          "task_description": "Deploy app on AWS EC2",
          "task_date": "2026-04-11",
          "category": "DevOps"
        }
      ]
    },
    {
      "id": 2,
      "firstName": "Rahul Verma",
      "email": "employee2@example.com",
      "password": "123",
      "job": "UI/UX Designer",
      "img": "https://i.pinimg.com/736x/af/a4/a2/afa4a2754f1c3745f6435d256e9b6fb4.jpg",
      "about": "RAHUL is a creative UI/UX DESIGNER with strong expertise in designing user-friendly and attractive digital products. He specializes in wireframing, prototyping, user research, and interface design using Figma, Adobe XD, and Photoshop. Rahul has worked on websites, mobile apps, and dashboards where design quality and usability were top priorities. He believes that good design should be simple, elegant, and easy for users to understand. His strong understanding of typography, spacing, color combinations, and layout systems helps him create clean and professional interfaces. RAHUL studies user behavior and feedback carefully to improve product experience and satisfaction. He works closely with developers to ensure designs are implemented correctly with pixel-perfect accuracy. Rahul is skilled in responsive design and ensures products look great on every screen size. He enjoys redesigning outdated interfaces and bringing modern creative ideas into products. He also understands branding consistency and accessibility principles. Rahul keeps learning the latest design trends and tools to stay updated in the creative industry. His imagination, problem-solving skills, and dedication make him a valuable designer for companies looking to build powerful and engaging digital experiences.",
      "skills": ["Figma", "Adobe XD", "Photoshop", "UI Design"],
      "language": ["Hindi", "English"],
      "availability": "Part Time",
      "age": 26,
      "location": "Mumbai, India",
      "experience": "3 Years",
      "task_count": {
        "active": 2,
        "new_task": 1,
        "complete": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "complete": false,
          "failed": false,
          "task_title": "Design landing page",
          "task_description": "Create responsive landing page",
          "task_date": "2026-04-13",
          "category": "Design"
        },
        {
          "active": false,
          "new_task": false,
          "complete": true,
          "failed": false,
          "task_title": "Fix navbar",
          "task_description": "Fix mobile navbar issues",
          "task_date": "2026-04-09",
          "category": "Frontend"
        },
        {
          "active": true,
          "new_task": false,
          "complete": false,
          "failed": false,
          "task_title": "API integration",
          "task_description": "Connect frontend with backend APIs",
          "task_date": "2026-04-12",
          "category": "Development"
        },
        {
          "active": false,
          "new_task": false,
          "complete": false,
          "failed": true,
          "task_title": "Test payment",
          "task_description": "Test payment gateway integration",
          "task_date": "2026-04-11",
          "category": "Testing"
        }
      ]
    },
    {
      "id": 3,
      "firstName": "Priya Mehta",
      "email": "employee3@example.com",
      "password": "123",
      "job": "Backend Developer",
      "img": "https://i.pinimg.com/1200x/24/91/0f/24910f726e8e849d73ba395a584181f0.jpg",
      "about": "PRIYA is an experienced BACKEND DEVELOPER who specializes in building secure, scalable, and high-performance server-side systems. She has strong knowledge of Node JS, Express JS, MongoDB, REST APIs, and database design. Priya has worked on ecommerce platforms, booking systems, admin dashboards, and enterprise applications where backend stability was critical. She focuses on writing efficient business logic, clean APIs, and optimized database queries to deliver smooth performance. Priya understands authentication systems, role-based access, data security, and cloud deployment methods. She enjoys solving technical challenges and improving application speed for better user experience. Priya works closely with frontend developers to ensure seamless connection between UI and backend services. She is skilled in debugging errors, integrating third-party services, and maintaining structured codebases. Her analytical thinking helps her quickly identify problems and provide reliable solutions. Priya values testing, documentation, and version control for long-term project success. She continuously learns modern backend tools and technologies to stay updated in the fast-changing software world. Her technical confidence, teamwork skills, and dedication make her a dependable engineer for companies needing robust and scalable systems.",
      "skills": ["Node JS", "MongoDB", "Express JS", "REST API"],
      "language": ["Hindi", "English"],
      "availability": "Full Time",
      "age": 25,
      "location": "Bangalore, India",
      "experience": "4 Years",
      "task_count": {
        "active": 2,
        "new_task": 1,
        "complete": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "complete": false,
          "failed": false,
          "task_title": "Database schema",
          "task_description": "Design MongoDB schema",
          "task_date": "2026-04-13",
          "category": "Backend"
        },
        {
          "active": true,
          "new_task": false,
          "complete": false,
          "failed": false,
          "task_title": "Optimize queries",
          "task_description": "Improve database performance",
          "task_date": "2026-04-12",
          "category": "Backend"
        },
        {
          "active": false,
          "new_task": false,
          "complete": true,
          "failed": false,
          "task_title": "Bug fixing",
          "task_description": "Fix backend bugs",
          "task_date": "2026-04-08",
          "category": "Development"
        }
      ]
    },
    {
      "id": 4,
      "firstName": "Sneha Gupta",
      "email": "employee4@example.com",
      "password": "123",
      "job": "QA Engineer",
      "img": "https://i.pinimg.com/1200x/43/1b/49/431b4970110f41b1b6f3cbf3a3d9f1e8.jpg",
      "about": "SNEHA is a dedicated QA ENGINEER with strong experience in software testing, quality assurance, and bug management. She specializes in manual testing, automation testing, regression testing, and performance validation for modern applications. Sneha has worked on web apps, mobile apps, and enterprise systems where product quality was highly important. She is skilled in writing test cases, identifying defects, reporting issues clearly, and working with developers for quick resolution. Sneha uses tools like Selenium, Jira, and modern testing frameworks to improve speed and testing accuracy. She believes quality assurance is one of the most important parts of software success. Her attention to detail helps her find even small issues before release. Sneha understands user expectations and tests products from both technical and customer perspectives. She enjoys improving workflows, building automation scripts, and ensuring stable product launches. Sneha works effectively in agile teams and communicates clearly during planning and review meetings. She keeps learning new testing tools and quality standards to stay updated. Her patience, consistency, and analytical mindset make her a valuable professional for organizations that want reliable and bug-free software products.",
      "skills": ["Selenium", "Manual Testing", "Jira", "Automation"],
      "language": ["Hindi", "English"],
      "availability": "Remote",
      "age": 27,
      "location": "Pune, India",
      "experience": "3 Years",
      "task_count": {
        "active": 2,
        "new_task": 1,
        "complete": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "complete": false,
          "failed": false,
          "task_title": "Write test cases",
          "task_description": "Create unit test cases",
          "task_date": "2026-04-13",
          "category": "Testing"
        },
        {
          "active": false,
          "new_task": false,
          "complete": true,
          "failed": false,
          "task_title": "Fix bugs",
          "task_description": "Fix UI bugs reported by QA",
          "task_date": "2026-04-10",
          "category": "Frontend"
        },
        {
          "active": false,
          "new_task": false,
          "complete": false,
          "failed": true,
          "task_title": "Automation script",
          "task_description": "Write automation scripts",
          "task_date": "2026-04-11",
          "category": "Testing"
        },
        {
          "active": true,
          "new_task": false,
          "complete": false,
          "failed": false,
          "task_title": "Regression testing",
          "task_description": "Perform regression testing",
          "task_date": "2026-04-12",
          "category": "Testing"
        }
      ]
    },
    {
      "id": 5,
      "firstName": "Arjun Singh",
      "email": "employee5@example.com",
      "password": "123",
      "job": "DevOps Engineer",
      "img": "https://i.pinimg.com/736x/4a/e9/e3/4ae9e3b85f79f3169dba49259fe897fe.jpg",
      "about": "ARJUN is a highly skilled DEVOPS ENGINEER with excellent expertise in cloud infrastructure, automation, and deployment management. He works with AWS, Docker, Kubernetes, Linux, and CI/CD pipelines to create efficient development and production environments. Arjun has handled multiple projects where uptime, security, and fast deployments were important business requirements. He specializes in automating repetitive tasks, configuring servers, monitoring systems, and improving software release processes. Arjun understands networking, scaling strategies, load balancing, backup systems, and infrastructure security practices. He enjoys solving production issues quickly and ensuring applications remain stable during heavy traffic. Arjun collaborates closely with developers and testers to build smooth workflows from coding to deployment. His proactive mindset helps reduce downtime and improve operational efficiency. He regularly monitors logs, optimizes resources, and controls cloud costs effectively. Arjun values documentation, disaster recovery planning, and continuous improvement in every project. He keeps learning new DevOps tools and cloud technologies to stay updated in the industry. His reliability, calm problem-solving attitude, and technical depth make him a valuable asset for companies seeking secure and scalable infrastructure solutions.",
      "skills": ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"],
      "language": ["Hindi", "English"],
      "availability": "Full Time",
      "age": 28,
      "location": "Hyderabad, India",
      "experience": "5 Years",
      "task_count": {
        "active": 2,
        "new_task": 1,
        "complete": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "complete": false,
          "failed": false,
          "task_title": "Setup CI/CD",
          "task_description": "Setup CI/CD pipeline",
          "task_date": "2026-04-13",
          "category": "DevOps"
        },
        {
          "active": false,
          "new_task": false,
          "complete": true,
          "failed": false,
          "task_title": "Server setup",
          "task_description": "Configure AWS server",
          "task_date": "2026-04-09",
          "category": "DevOps"
        },
        {
          "active": true,
          "new_task": false,
          "complete": false,
          "failed": false,
          "task_title": "Monitor logs",
          "task_description": "Monitor application logs",
          "task_date": "2026-04-12",
          "category": "Maintenance"
        },
        {
          "active": false,
          "new_task": false,
          "complete": false,
          "failed": true,
          "task_title": "Backup system",
          "task_description": "Setup backup system",
          "task_date": "2026-04-11",
          "category": "Maintenance"
        }
      ]
    }
]


const admin=[{
    "id": 1,
    "firstName": "Admin-Vaibhav",
    "email": "admin@example.com",
    "password": "123"
}];


export const SetLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
    console.log("running")
  }

  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};
export const getLocalStorage=()=>{
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin=JSON.parse(localStorage.getItem("admin"));
    return {employees,admin};
    
}