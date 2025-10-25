import { dynamicImage } from "../../../Services"

export const Todolist=[
   {
      id:1,
      title:"New Order $2340",
      date:"20-04-2023",
      circle: "primary",
      dot: "primary",
      para:"Update New Product Pdf And Delivery Product",
      day:"Today",
      img:dynamicImage("dashboard/default/todo.png"),
      todoimageclass:"img-fluid img-30",
      classname:"activity-dot-primary",
      radiocircle:"fa fa-circle circle-dot-primary pull-right"
   },
   {
      id:2,
      title:"James just like your product",
      date:"20-04-2023",
      badgeName: <span className="badge badge-primary ms-2">New</span>,
      day:"Today",
      classname:"activity-dot-secondary",
      radiocircle:"fa fa-circle circle-dot-secondary pull-right"

   },
   {
      id:3,
      title:"Jihan Doe just like your product",
      date:"20-04-2023",
      circle: "primary",
      para:"Design and style should work making you look good and feel good without lot of effort.",
      day:"Today",
      classname:"activity-dot-primary"

   },
   {
      id:4,
      title:"Take Our Client Metting",
      date:"20-04-2023",
      dot: "primary",
      circle: "primary",
      para:"Hosting an effective client meeting.",
      day:"Today",
      classname:"activity-dot-primary",
      radiocircle:"fa fa-circle circle-dot-primary pull-right"

   }

]
