import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Shop",
    newTab: false,
    path: "/shop-with-sidebar",
    submenu: [
      {
        id: 21,
        title: "Unstitched",
        newTab: false,
        path: "/shop-with-sidebar?category=unstitched",
      },
      {
        id: 22,
        title: "Stitched",
        newTab: false,
        path: "/shop-with-sidebar?category=stitched",
      },
      {
        id: 23,
        title: "Bridal",
        newTab: false,
        path: "/shop-with-sidebar?category=bridal",
      },
      {
        id: 24,
        title: "Party Wear",
        newTab: false,
        path: "/shop-with-sidebar?category=party-wear",
      },
      {
        id: 25,
        title: "Casual",
        newTab: false,
        path: "/shop-with-sidebar?category=casual",
      },
      {
        id: 26,
        title: "Designer",
        newTab: false,
        path: "/shop-with-sidebar?category=designer",
      },
      {
        id: 27,
        title: "Seasonal",
        newTab: false,
        path: "/shop-with-sidebar?category=seasonal",
      },
    ],
  },
  {
    id: 3,
    title: "New Arrivals",
    newTab: false,
    path: "/new-arrivals",
  },
  {
    id: 4,
    title: "Best Sellers",
    newTab: false,
    path: "/best-sellers",
  },
  {
    id: 5,
    title: "About Us",
    newTab: false,
    path: "/about",
  },
  {
    id: 6,
    title: "Contact Us",
    newTab: false,
    path: "/contact",
  },
];
