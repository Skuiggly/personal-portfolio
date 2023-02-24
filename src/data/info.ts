export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Philip Krogh",
  jobDescription: "Student",
  about: `I'm a student from Oslo with a passion for everything digital.
  I enjoy creating websites, videos, music, etc.
  At middle school I was taught HTML, CSS, Javascript, SQL, and how relational databases worked.
  Afterwards I've learnt about React and other web frameworks in my spare time.
  I love learning about new technologies, the problems they solve and how they solve them.
  Technologies like: Svelte, Astro, Deno, NEXT, TailwindCSS
  `,

  experience: [
    {
      name: "Store Employee",
      location: "Skafferiet",
      startDate: "Aug 2021",
      endDate: "Feb 2022",
      description: [""],
    },

    {
      name: "Mentor",
      location: "MentorNorge",
      startDate: "Nov 2021",
      endDate: "Dec 2021",
      description: [""],
    },

    {
      name: "IT Support",
      location: "Kamy Kommunikasjon",
      startDate: "Jun 2020",
      endDate: "Aug 2020",
      description: [""],
    },
  ],

  education: [
    {
      name: "Folkehøgskolen Sørlandet",
      location: "Digital Creativity",
      startDate: "Aug 2022",
      endDate: "Current",
      description: [
        "A gap year spent learning and practicing:",
        "-Cinematography",
        "-Video editing",
        "-VFX",
        "-Music production",
        "-Photography",
        "We, as a team of 19, even collaborated to create a music video and a live show"
      ],
    },
    {
      name: "BI Norwegian Business School",
      location: "Creative Industries Management",
      startDate: "Mar 2021",
      endDate: "Aug 2021",
      description: ["A small time spent experimenting"],
    },
    {
      name: "University of Oslo",
      location: "Informatics",
      startDate: "Aug 2020",
      endDate: "Jan 2021",
      description: [""],
    },
  ],

  socialMedia: {
    github: "https://github.com/Skuiggly",
    email: "philib.krogh@gmail.com",
    linkedin: "https://www.linkedin.com/in/philib-krogh/",
  },

  projects: [
    {
      title: "Tic-Tic-Toe in React",
      isFeatured: true,
      thumbnail: "/assets/images/tic-tac-toe.png",
      githubUrl: "https://github.com/Skuiggly/tic_tac_toe",
      liveUrl: "https://tic-tac-toe-skuiggly.vercel.app/",
    },
    {
      title: "Live Show",
      thumbnail: "/assets/images/elevkveld_bilde_16_9.jpg",
      isFeatured: true,
      liveUrl: "https://youtu.be/pB-VkCRCHa4",
    },
    {
      title: "Brutalist Art Site",
      thumbnail: "/assets/images/art-site.png",
      isFeatured: true,
      githubUrl: "https://github.com/Skuiggly/brutalist-art-site",
      liveUrl: "https://art-site-lilac.vercel.app/",
    },
    {
      title: "Interactive rating component",
      thumbnail: "/assets/images/interactive-rating-component.png",
      isFeatured: false,
      githubUrl: "https://github.com/Skuiggly/interactive-rating-component",
      liveUrl: "https://interactive-rating-component-skuiggly.vercel.app/",
    },
    {
      title: "Giphy API exercise",
      thumbnail: "/assets/images/cats.png",
      githubUrl: "https://github.com/Skuiggly/giphy_API_exercise",
      liveUrl: "https://skuiggly.github.io/giphy_API_exercise/",
      isFeatured: false,
    },
    {
      title: "Recipe Book",
      thumbnail: "/assets/images/recipe.png",
      isFeatured: false,
      githubUrl: "https://github.com/Skuiggly/odin-recipes",
      liveUrl: "https://skuiggly.github.io/odin-recipes/",
    },
    {
      title: "Landing Page",
      thumbnail: "/assets/images/landing-page.png",
      isFeatured: false,
      githubUrl: "https://github.com/Skuiggly/odin-landing-page",
      liveUrl: "https://skuiggly.github.io/odin-landing-page/",
    },
  ],
};
