import React from "react";
import { MessageSquare, ThumbsUp, UserPlus } from "react-feather";
import {
  AndewJon,
  BuckyBarnes,
  ComerenDiaz,
  JasonBorne,
  JohnyWaston,
  JohnyWilliam,
  SarahLoren,
} from "../../Constant";
import { dynamicImage } from "../../Services";

export const activityLogData = [
  {
    id: 1,
    icon: <ThumbsUp className="m-r-20" />,
    desc: "Comeren Diaz likes your photos.",
  },
  {
    id: 2,
    icon: <UserPlus className="m-r-20" />,
    desc: "Karlene Lex and Comeren Diaz now friends.",
  },
  {
    id: 3,
    icon: <MessageSquare className="m-r-20" />,
    desc: "Sarah Loren wrote on your timeline",
  },
  {
    id: 4,
    icon: <ThumbsUp className="m-r-20" />,
    desc: `Johny Waston likes your post's.`,
  },
  {
    id: 5,
    icon: <UserPlus className="m-r-20" />,
    desc: "Andew Jon became friends with Comeren Diaz.",
  },
  {
    id: 6,
    icon: <UserPlus className="m-r-20" />,
    desc: "Johny Waston became friends with Bucky Barnes.",
  },
];

export const EducationData = [
  {
    id: 1,
    title: "The New College of Design",
    date: "2001 - 2006",
    desc: "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.",
    detailClass: false,
  },
  {
    id: 2,
    title: "Digital Design Intern",
    date: "2006-2008",
    desc: "Digital Design Intern for the “Multimedz” agency. Was in charge of the communication with the clients.",
    detailClass: true,
  },
  {
    id: 3,
    title: "Rembrandt Institute",
    date: "2008",
    desc: "Five months Digital Illustration course. Professor: Leonardo Stagg.",
    detailClass: false,
  },
  {
    id: 4,
    title: "UI/UX Designer",
    date: "2001 - 2006",
    desc: "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.",
    detailClass: true,
  },
  {
    id: 5,
    title: "The Digital College",
    date: "2010",
    desc: "6 months intensive Motion Graphics course. After Effects and Premire. Professor: Donatello Urtle.",
    detailClass: false,
  },
  {
    id: 6,
    title: "The New College of Design",
    date: "2001 - 2006",
    desc: "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.",
    detailClass: true,
  },
];

export const HobbiesData = [
  {
    id: 1,
    title: "Hobbies:",
    desc: "I like to ride the bike to work, swimming, and working out. I also like reading design magazines, go to museums, and binge watching a good tv show while it’s raining outside.",
    detailClass: false,
  },
  {
    id: 2,
    title: "Favourite Music Bands / Artists:",
    desc: "Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.",
    detailClass: true,
  },
  {
    id: 3,
    title: "Favourite TV Shows:",
    desc: "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.",
    detailClass: false,
  },
  {
    id: 4,
    title: "Favourite Books:",
    desc: "The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.",
    detailClass: true,
  },
  {
    id: 5,
    title: "Favourite Movies:",
    desc: "Idiocratic, The Scarred Wizard and the Fire Crown, Crime Squad Ferrum Man.",
    detailClass: false,
  },
  {
    id: 6,
    title: "Favourite Writers:",
    desc: "Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle, Alexandr Platt, Marcus Roth.",
    detailClass: true,
  },
  {
    id: 7,
    title: "Favourite Games:",
    desc: "The First of Us, Assassin’s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto.",
    detailClass: false,
  },
  {
    id: 8,
    title: "Other Interests:",
    desc: "Swimming, Surfing, Scuba Diving, Anime, Photography, Tattoos, Street Art.",
    detailClass: true,
  },
];

export const ActivityFeedData = [
  {
    id: 1,
    img: dynamicImage("user/10.jpg"),
    title: AndewJon,
    desc: `Commented on Shaun Park's `,
    time: "20 min Ago",
  },
  {
    id: 2,
    img: dynamicImage("user/3.jpg"),
    title: JohnyWaston,
    desc: `Commented on Shaun Park's `,
    time: "1 hour Ago",
  },
  {
    id: 3,
    img: dynamicImage("user/5.jpg"),
    title: ComerenDiaz,
    desc: `Commented on Shaun Park's `,
    time: "1 days Ago",
  },
  {
    id: 4,
    img: dynamicImage("user/4.jpg"),
    title: ComerenDiaz,
    desc: `Commented on Shaun Park's `,
    time: "6 days Ago",
  },
  {
    id: 5,
    img: dynamicImage("user/3.jpg"),
    title: JohnyWaston,
    desc: `Commented on Shaun Park's `,
    time: "1 hour Ago",
  },
  {
    id: 6,
    img: dynamicImage("user/5.jpg"),
    title: ComerenDiaz,
    desc: `Commented on Shaun Park's `,
    time: "1 days Ago",
  },
];

export const MutualFrndData = [
  {
    id: 1,
    img: dynamicImage("user/2.png"),
    title: BuckyBarnes,
    email: "winter@gmail.com",
    socialClass: "social-online",
  },
  {
    id: 2,
    img: dynamicImage("user/10.jpg"),
    title: SarahLoren,
    email: "barnes@gmail.com",
    socialClass: "social-busy",
  },
  {
    id: 3,
    img: dynamicImage("user/6.jpg"),
    title: JasonBorne,
    email: "jasonb@gmail.com",
    socialClass: "social-offline",
  },
  {
    id: 4,
    img: dynamicImage("user/8.jpg"),
    title: ComerenDiaz,
    email: "comere@gmail.com",
    socialClass: "social-offline",
  },
  {
    id: 5,
    img: dynamicImage("user/4.jpg"),
    title: AndewJon,
    email: "andrewj@gmail.com",
    socialClass: "social-online",
  },
  {
    id: 6,
    img: dynamicImage("user/4.jpg"),
    title: JohnyWaston,
    email: "johny@gmail.com",
    socialClass: "social-busy",
  },
  {
    id: 7,
    img: dynamicImage("user/3.jpg"),
    title: JohnyWilliam,
    email: "johnyw@gmail.com",
    socialClass: "social-offline",
  },
  {
    id: 8,
    img: dynamicImage("user/2.png"),
    title: BuckyBarnes,
    email: "winter@gmail.com",
    socialClass: "social-online",
  },
  {
    id: 9,
    img: dynamicImage("user/10.jpg"),
    title: SarahLoren,
    email: "barnes@gmail.com",
    socialClass: "social-busy",
  },
  {
    id: 10,
    img: dynamicImage("user/6.jpg"),
    title: JasonBorne,
    email: "jasonb@gmail.com",
    socialClass: "social-offline",
  },
  {
    id: 11,
    img: dynamicImage("user/8.jpg"),
    title: ComerenDiaz,
    email: "comere@gmail.com",
    socialClass: "social-offline",
  },
  {
    id: 12,
    img: dynamicImage("user/4.jpg"),
    title: AndewJon,
    email: "andrewj@gmail.com",
    socialClass: "social-online",
  },
  {
    id: 13,
    img: dynamicImage("user/4.jpg"),
    title: JohnyWaston,
    email: "johny@gmail.com",
    socialClass: "social-busy",
  },
  {
    id: 14,
    img: dynamicImage("user/3.jpg"),
    title: JohnyWilliam,
    email: "johnyw@gmail.com",
    socialClass: "social-offline",
  },
];

export const FriendsData = [
  {
    id: 1,
    img: require("../../assets/images/user/3.jpg"),
    title: "Jason Borne",
  },
  {
    id: 2,
    img: require("../../assets/images/user/5.jpg"),
    title: "Anna Mull",
  },
  {
    id: 3,
    img: require("../../assets/images/user/2.png"),
    title: "Dion Cast",
  },
  {
    id: 4,
    img: require("../../assets/images/user/3.jpg"),
    title: "Karlene Lex",
  },
  {
    id: 5,
    img: require("../../assets/images/user/6.jpg"),
    title: "Vella Chism",
  },
  {
    id: 6,
    img: require("../../assets/images/user/10.jpg"),
    title: "Wai Schalk",
  },
  {
    id: 7,
    img: require("../../assets/images/user/14.png"),
    title: "Karlene Lex",
  },
];
