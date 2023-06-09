import { Coffee } from "../types/Coffee";

const DUMMY_COFFEES: Coffee[] = [
  {
    id: "coffee-1",
    name: "Rojas",
    imageLink: "/coffee-1.jpg",
    countries: ["BR", "NP"],
    price: 3.99,
  },

  {
    id: "coffee-2",
    name: "Da Malleo",
    imageLink: "/coffee-2.jpg",
    countries: ["BR"],
    price: 8.99,
  },

  {
    id: "coffee-3",
    name: "Breve",
    imageLink: "/coffee-3.jpg",
    countries: ["BR", "IN"],
    price: 6.99,
  },

  {
    id: "coffee-4",
    name: "Cortado",
    imageLink: "/coffee-4.jpg",
    countries: ["MX"],
    price: 4.99,
  },
];

export const getCoffees = () => {
  return DUMMY_COFFEES;
};

export const getCoffeeById = (id: string) => {
  return DUMMY_COFFEES.filter((coffe) => coffe.id === id)[0];
};

export default DUMMY_COFFEES;
