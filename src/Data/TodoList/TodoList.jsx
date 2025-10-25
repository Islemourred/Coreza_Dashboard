import react from "react"
import { Activity, Cast, CheckCircle, FilePlus, Trash } from "react-feather"


export const TodoList =[
   {
      id:1,
      icon:FilePlus,
      title:"All Task",
      classname:"iconbg badge-light-primary",

   },
   {
   id:2,
   icon:CheckCircle,
   title:"Completed",
   classname:"iconbg badge-light-success",
   badegclassname:"badge rounded-pill badge-success",
   number:3
   },
   {
      id:3,
      icon:Cast,
      title:"Pending",
      classname:"iconbg badge-light-danger",
      badegclassname:"badge rounded-pill badge-danger",
      number:2
   },
   {
   id:4,
   icon:Activity,
   title:"In Process",
   classname:"iconbg badge-light-info",
   badegclassname:"badge rounded-pill badge-primary",
   number:2
   },
   {
      id:5,
      icon:Trash,
      title:"Trash",
      classname:"iconbg badge-light-danger",
   }
]