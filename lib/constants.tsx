import {
    HandHelping,
    LayoutDashboard,
    LucideHome,
    Shapes,
    ShoppingBag,
    Tag,
    Truck,
    UsersRound,
    Utensils,
  } from "lucide-react";
  
  export const navLinks = [
    {
      url: "/",
      icon: <LayoutDashboard />,
      label: "Dashboard",
    },
    {
      url: "/collections",
      icon: <Shapes />,
      label: "Collections",
    },
    {
      url: "/products",
      icon: <Tag />,
      label: "Products",
    },
    {
      url: "/orders",
      icon: <ShoppingBag />,
      label: "Orders",
    },
    {
      url: "/customers",
      icon: <UsersRound />,
      label: "Customers",
    },
  ];

  export const menuLinks = [
    {
      url: "/",
      icon: <LucideHome />,
      label: "Home",
    },
    {
      url: "/menu",
      icon: <Utensils />,
      label: "Menu",
    },
    {
      url: "/orders",
      icon: <ShoppingBag />,
      label: "Orders",
    },
    {
      url: "/delivery",
      icon: <Truck />,
      label: "Delivery",
    },
    {
      url: "/help",
      icon: <HandHelping />,
      label: "Help",
    },
  ];
  