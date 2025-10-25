import { dynamicImage } from "../../../Services";

const user = dynamicImage("user/3.jpg");
const user2 = dynamicImage("user/5.jpg");
const user3 = dynamicImage("user/1.jpg");

export const Imageclass1 = [
  { className: "img-100 rounded-circle" , basicClass:'primary p-2 rounded-pill'},
  { className: "img-90 rounded-circle" , basicClass:'secondary p-2 rounded-pill'},
  { className: "img-80 rounded-circle" , basicClass:'success p-2 rounded-pill'},
  { className: "img-70 rounded-circle" , basicClass:'danger p-2 rounded-pill'},
  { className: "img-60 rounded-circle" , basicClass:'info p-2 rounded-pill'},
  { className: "img-50 rounded-circle" , basicClass:'warning p-2 rounded-pill'},
  { className: "img-40 rounded-circle" , basicClass:'dark p-2 rounded-pill'},
];

export const imageclass2 = [
  { className: "img-100 rounded-circle", statuClass: "status status-90 bg-primary" },
  { className: "img-90 rounded-circle", statuClass: "status status-80 bg-secondary"},
  { className: "img-80 rounded-circle", statuClass: "status status-70 bg-success" },
  { className: "img-70 rounded-circle", statuClass: "status status-60 bg-info"},
  { className: "img-60 rounded-circle", statuClass: "status status-50 bg-danger" },
  { className: "img-50 rounded-circle", statuClass: "status status-40 bg-dark" },
  { className: "img-40 rounded-circle", statuClass: "status status-30 bg-warning" },
];

export const imageclass3 = [
  { className: "img-100 rounded-circle" },
  { className: "img-90 rounded-circle" },
  { className: "img-80 rounded-circle" },
  { className: "img-70 rounded-circle" },
  { className: "img-60 rounded-circle" },
  { className: "img-50 rounded-circle" },
  { className: "img-40 rounded-circle" }
];

export const imageData4 = [
  { className: "img-90 b-r-30" },
  { className: "img-80 b-r-35" },
  { className: "img-70 rounded-circle" },
  { className: "img-60 b-r-25" },
  { className: "img-50 b-r-15" },
];

export const imageData5 = [
  { className: "b-r-8 img-90" },
  { className: "b-r-8 img-80" },
  { className: "b-r-8 img-70" },
  { className: "b-r-8 img-60" },
  { className: "b-r-8 img-50" },
  { className: "b-r-8 img-40" },
];

export const imageData = [
  { className: "img-70 rounded-circle" },
  { className: "img-50 rounded-circle" },
  { className: "img-40 rounded-circle" },
];

export const UsersImage = [{ src: user }, { src: user2 }, { src: user3 }];
