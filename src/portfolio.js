/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "opesinorbit",
  title: "Hi, I'm Jonathan Opperman",
  subTitle: emoji(
    "A passionate DevOps Engineer 🚀 with experience in testing, automation and working with cool stuff like Azure, Terraform and OWASP!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1NBJ7vcFbtyDmHwcgBbwXYH3Sh3WtrnOH/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jcopperman",
  linkedin: "https://www.linkedin.com/in/jonathan-opperman-0a368b4a/",
  gmail: "opperman.jonathan@gmail.com",
  gitlab: "https://gitlab.com/jcopperman",
  facebook: "https://www.facebook.com/jonathan.opperman.395",
  medium: "https://medium.com/@opesinorbit",
  stackoverflow: "https://stackoverflow.com/users/5032819/jonathan-opperman",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DEVOPS ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop and deploy solutions that scale development teams in DevOps"
    ),
    emoji("⚡ Employ patterns and practices for managing cloud infrastructure"),
    emoji(
      "⚡ Developer productivity engineering through automation"
    ),
    emoji(
      "⚡ Security first approach to cloud engineering"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "scripting",
      fontAwesomeClassname: "fab fa-dev"
    },
    {
      skillName: "datadog",
      fontAwesomeClassname: "fab fa-watchman-monitoring"
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "owasp",
      fontAwesomeClassname: "fas fa-user-secret"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Azure", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DevOps",
      progressPercentage: "70%"
    },
    {
      Stack: "Powershell",
      progressPercentage: "60%"
    },
    {
      Stack: "OWASP",
      progressPercentage: "60%"
    },
    {
      Stack: "Github",
      progressPercentage: "80%"
    },
    {
      Stack: "Datadog",
      progressPercentage: "60%"
    },
    {
      Stack: "Terraform",
      progressPercentage: "50%"
    },
    {
      Stack: "YAML",
      progressPercentage: "90%"
    },
    {
      Stack: "SonarCloud",
      progressPercentage: "70%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Platform Engineer",
      company: "The Sustainables",
      companylogo: require("./assets/images/ts.png"),
      date: "January 2022 – Present",
      desc: "Provide DevOps support and enable automation, scaling and security",
      descBullets: [
        "Azure Administration",
        "Manage and monitor CI/CD pipelines",
        "Integrate security auditing with industry standard tooling",
        "Assist with Terraform adoption for infrastructure as code"
      ]
    },
    {
      role: "Business Owner",
      company: "Outeniqua Studios",
      companylogo: require("./assets/images/out.png"),
      date: "2016 – 2018",
      desc: "Provided consultancy services",
      descBullets: [
        "DevOps and automation services",
        "Bespoke web development for local SMME's",
        "Started a greenfields Unity project to promote the independent video game industry in South Africa",
      ]
    },
    {
      role: "Team Lead",
      company: "Entersekt",
      companylogo: require("./assets/images/entersekt.png"),
      date: "2018 – 2020",
      desc: "Leading of Quality Engineering team",
      descBullets: [
        "VMWARE Administration",
        "Manage and monitor CI/CD pipelines",
        "Strategize test planning for GA releases and Black Friday War Room",
        "Involved with adoption of Kubernetes"
      ]
    },
    {
      role: "Senior Quality Assurance Engineer",
      company: "DigiOutsource",
      companylogo: require("./assets/images/digi.png"),
      date: "2016 – 2018",
      desc: "Test automation and agile quality delivery",
      descBullets: [
        "Coach and mentor junior engineers",
        "Maintain and build on automation frameworks",
        "Improve existing test strategies mature to Agile delivery methods",
      ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  // blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description:
  //       "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description:
  //       "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Test Driven Development",
      subtitle: "Talk at Axxess Africa 2015",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "opperman.jonathan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "opes_in_orbit", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
