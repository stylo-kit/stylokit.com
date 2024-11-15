export default defineAppConfig({
  site: {
    title: "Stylokit - Premium Framer Templates",
    description:
      "Accelerate your web development with our expertly designed Framer and Nuxt templates at Stylokit. Stand out from the competition with unique, customizable designs that are built to enhance efficiency and creativity.",
    image: "/og-image.jpg",
  },

  sidebar: {
    sections: [
      {
        title: "Pages",

        items: [
          {
            title: "Explore",
            icon: "heroicons:home",
            to: "/",
          },
          {
            title: "All Access",
            icon: "heroicons:tag",
            to: "/all-access",
          },
          {
            title: "Affiliate",
            icon: "heroicons:currency-dollar",
            to: "/affiliate",
          },
          {
            title: "Blog",
            icon: "heroicons:pencil",
            to: "/blog",
          },
        ],
      },
      {
        title: "Connect",

        items: [
          {
            title: "Connect on X",
            icon: "tabler:brand-x",
            to: "https://x.com/dmytri_design",
          },
          {
            title: "Connect on Medium",
            icon: "tabler:brand-medium",
            to: "https://medium.com/@dmytriivanov",
          },
        ],
      },
    ],

    author: {
      designer: {
        display: "block",
        handle: "@dmytri_design",
        link: "https://x.com/Dmytri_Design",
      },
      developer: {
        display: "none",
        handle: "@acep_mon",
        link: "https://x.com/acep_mon",
      },
    },

    banner: {
      display: "block",
      icon: "framer",
      title: "Framer",
      description: "Design and ship your dream site. Zero code, maximum speed.",
      button: {
        text: "Get Started",
        link: "https://www.framer.com/?via=dmytri_design",
      },
    },
  },
});
