interface NavLink {
  activeRoute: string;
  activePath: string;
  href: string;
  title: string;
}

export const Links: Array<NavLink> = [
  {
    activeRoute: "Главная",
    activePath: "/",
    href: "/",
    title: "Главная",
  },
  {
    activeRoute: "Эбаут",
    activePath: "/about",
    href: "/about",
    title: "Эбаут",
  },
  // {
  //   activeRoute: "Резюме",
  //   activePath: "/resume",
  //   href: "/resume",
  //   title: "Резюме",
  // },
  // {
  //   activeRoute: "Закладки",
  //   activePath: "/bookmarks",
  //   href: "/bookmarks",
  //   title: "Закладки",
  // },
  // {
  //   activeRoute: "Проекты",
  //   activePath: "/projects",
  //   href: "/projects",
  //   title: "Проекты",
  // },
  {
    activeRoute: "1000 Days",
    activePath: "/1000days",
    href: "/1000days",
    title: "1000 Days",
  },
  {
    activeRoute: "Блог",
    activePath: "/blog",
    href: "/blog",
    title: "Блог",
  },
];

export const socialLinks = [
  {
    name: "twitter",
    href: "https://twitter.com/alexvyber",
    username: "alexvyber",
  },
  {
    name: "instagram",
    href: "https://instagram.com/alexvyber",
    username: "alexvyber",
  },
  {
    name: "github",
    href: "https://github.com/alexvyber",
    username: "alexvyber",
  },
];
