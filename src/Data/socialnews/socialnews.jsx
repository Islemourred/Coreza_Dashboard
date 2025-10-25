import { Instagram, Likes, Linkedins, Posts } from "../../Constant";
import { Facebooks, Twitters } from "../../Constant";
import { dynamicImage } from "../../Services";

export const socialnews = [
  {
    title: Facebooks,
    post: Posts,
    totalpost: "6589",
    like: Likes,
    likes: "6589",
    img: dynamicImage("general-widget/svg-icon/2.svg"),
  },
  {
    title: Twitters,
    post: Posts,
    totalpost: "920",
    like: Likes,
    likes: "4k",
    img: dynamicImage("general-widget/svg-icon/3.svg"),
  },
  {
    title: Linkedins,
    post: Posts,
    totalpost: "1234",
    like: Likes,
    likes: "4369",
    img: dynamicImage("general-widget/svg-icon/6.svg"),
  },
  {
    title: Instagram,
    post: Posts,
    totalpost: "369",
    like: Likes,
    likes: "3458",
    img: dynamicImage("general-widget/svg-icon/4.svg"),
  },
];
