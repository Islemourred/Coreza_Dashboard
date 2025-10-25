import { Book, Briefcase, Droplet, Heart, MapPin } from "react-feather";
import { dynamicImage } from "../../Services";
import { AndewJon, BuckyBarnes, ComerenDiaz, JasonBorne, SarahLoren } from "../../Constant";

export const FollowersData = [
  {
    id: 1,
    img: dynamicImage("user/2.png"),
    name: BuckyBarnes,
  },
  {
    id: 2,
    img: dynamicImage("user/3.png"),
    name: SarahLoren,
  },
  {
    id: 3,
    img: dynamicImage("user/4.jpg"),
    name: JasonBorne,
  },
  {
    id: 4,
    img: dynamicImage("user/10.jpg"),
    name: ComerenDiaz,
  },
  {
    id: 5,
    img: dynamicImage("user/11.png"),
    name: AndewJon,
  },
];

export const AboutMeData = [
  {
    id: 1,
    icon: <Briefcase />,
    designation: "UX desginer at Pixelstrap",
    place: "banglore - 2021",
  },
  {
    id: 2,
    icon: <Book />,
    designation: "studied computer science",
    place: "at london univercity - 2015",
  },
  {
    id: 3,
    icon: <Heart />,
    designation: "relationship status",
    place: "single",
  },
  {
    id: 4,
    icon: <MapPin />,
    designation: "lived in london",
    place: "last 5 year",
  },
  {
    id: 5,
    icon: <Droplet />,
    designation: "blood group",
    place: "O+ positive",
  },
];

export const LatestPhotosData = [
  {
    id: 1,
    img: dynamicImage("social-app/post-1.png"),
  },
  {
    id: 2,
    img: dynamicImage("social-app/post-2.png"),
  },
  {
    id: 3,
    img: dynamicImage("social-app/post-3.png"),
  },
  {
    id: 4,
    img: dynamicImage("social-app/post-4.png"),
  },
  {
    id: 5,
    img: dynamicImage("social-app/post-5.png"),
  },
  {
    id: 6,
    img: dynamicImage("social-app/post-6.png"),
  },
  {
    id: 7,
    img: dynamicImage("social-app/post-7.png"),
  },
  {
    id: 8,
    img: dynamicImage("social-app/post-8.png"),
  },
];

export const FriendsData = [
  {
    id: 1,
    img: dynamicImage("user/3.jpg"),
  },
  {
    id: 2,
    img: dynamicImage("user/5.jpg"),
  },
  {
    id: 3,
    img: dynamicImage("user/2.png"),
  },
  {
    id: 4,
    img: dynamicImage("user/3.jpg"),
  },
  {
    id: 5,
    img: dynamicImage("user/6.jpg"),
  },
  {
    id: 6,
    img: dynamicImage("user/10.jpg"),
  },
  {
    id: 7,
    img: dynamicImage("user/14.png"),
  },
  {
    id: 8,
    img: dynamicImage("user/1.jpg"),
  },
  {
    id: 9,
    img: dynamicImage("user/4.jpg"),
  },
  {
    id: 10,
    img: dynamicImage("user/11.png"),
  },
  {
    id: 11,
    img: dynamicImage("user/8.jpg"),
  },
];
