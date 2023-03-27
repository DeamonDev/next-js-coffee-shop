import { Coffee } from "../types/Coffee";

const DUMMY_COFFEES: Coffee[] = [
  {
    id: "cf-1",
    name: "Rojas",
    imageLink: "/coffee-1.jpg",
    countries: ["BR", "NP"],
    price: 3.99
  },

  {
    id: "cf-2",
    name: "Da Malleo",
    imageLink: "/coffee-2.jpg",
    countries: ["BR"],
    price: 8.99
  },

  {
    id: "cf-3",
    name: "Breve",
    imageLink: "/coffee-3.jpg",
    countries: ["BR", "IN"],
    price: 6.99
  },

  {
    id: "cf-4",
    name: "Cortado",
    imageLink: "/coffee-4.jpg",
    countries: ["MX"],
    price: 4.99
  },
];

export default DUMMY_COFFEES;
