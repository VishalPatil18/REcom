import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "I am Adarsh Balika and I can do no wrong",
  },
  {
    _id: uuid(),
    firstName: "Bablu",
    lastName: "Tailor",
    username: "bablutailor",
    email: "bablutailor@gmail.com",
    password: "bablutailor",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Bablu Tailor here! Wadisup public!",
  },
  {
    _id: uuid(),
    firstName: "Chaman",
    lastName: "Zhinga",
    username: "chamanzhinga",
    email: "chamanzhinga@gmail.com",
    password: "chamanzhinga",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Zhinga wale Zhingaaaa!$&",
  },
  {
    _id: uuid(),
    firstName: "Sham ",
    lastName: "Sundar",
    username: "shamsundarOP",
    email: "shamsundar@gmail.com",
    password: "shamsundarOP",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Ekdum Sundar, Sham Sundar!",
  },
];
