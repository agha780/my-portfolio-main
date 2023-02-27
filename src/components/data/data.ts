// This file contains the data for the projects and navbarbar items.
import { TypeMyData, TypeNavbar } from "./Models";
import Wordle from "../assets/Wordle.png";
import Snake from "../assets/Snake1.png";
import ticTacToe from "../assets/tic-tac-toe(2).png";
import Weather from "../assets/white-watherCold.png";
import FoodRecipe from "../assets/Shawarma.png";

export const data: TypeMyData[] = [
  {
    id: 1,
    title: "Wordle",
    img_url: `${Wordle}`,
    link: "https://ahmedproject.me/#wordleGame",
    gitHub: "https://github.com/agha780",
  },
  {
    id: 2,
    title: "tic-tac-toe",
    img_url: `${ticTacToe}`,
    link: "https://ahmedproject.me/#ForthProject",
    gitHub: "https://github.com/agha780",
  },
  {
    id: 3,
    title: "Snake",
    img_url: `${Snake}`,
    link: "https://snake-sylla.netlify.app",
    gitHub: "https://github.com/agha780",
  },
  {
    id: 4,
    title: "Weather",
    img_url: `${Weather}`,
    link: "https://ahmedproject.me/#ForthProject",
    gitHub: "https://github.com/agha780",
  },
  {
    id: 5,
    title: "Food Recipes",
    img_url: `${FoodRecipe}`,
    link: "https://ahmedproject.me/#ForthProject",
    gitHub: "https://github.com/agha780",
  },
];

export const listNavBar: TypeNavbar[] = [
  {
    id: 1,
    item: "Home",
    icon: "uil uil-home",
    href: "home",
  },
  {
    id: 2,
    item: "About",
    icon: "uil uil-user",
    href: "about",
  },
  {
    id: 3,
    item: "Skills",
    icon: "uil uil-file-alt",
    href: "skills",
  },
  {
    id: 4,
    item: "Qualifications",
    icon: "uil uil-graduation-cap",
    href: "qualification",
  },
  {
    id: 5,
    item: "Projects",
    icon: "uil uil-briefcase-alt",
    href: "projects",
  },
  {
    id: 6,
    item: "Contact",
    icon: "uil uil-envelope",
    href: "contact",
  },
];
