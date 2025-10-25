import {
  Activity,
  AlertCircle,
  AlertTriangle,
  Award,
  Bell,
  GitHub,
  Headphones,
  Heart,
  Link,
  Mail,
  Music,
  Settings,
} from "react-feather";
import { Danger, DataUsed, Notification, PlayingNow, UpdateAvailable } from "../../Constant";

export const Contextualvariationsarr = [
  { color: "secondary", Tittle: "Secondary" },
  { color: "success", Tittle: "Success" },
  { color: "info", Tittle: "Info" },
  { color: "warning", Tittle: "Warning" },
  { color: "danger", Tittle: "Danger" },
  { color: "light text-dark", Tittle: "Light" },
  { color: "dark tag-pills-sm-mb", Tittle: "Dark" },
];
export const Contextualvariationsarr2 = [
  { color: "secondary", Tittle: "Secondary" },
  { color: "success", Tittle: "Success" },
  { color: "info", Tittle: "Info" },
  { color: "warning", Tittle: "Warning" },
  { color: "danger", Tittle: "Danger" },
  { color: "light text-dark", Tittle: "Light" },
  { color: "dark tag-pills-sm-mb", Tittle: "Dark" },
];
export const TagsWithNumberarr = [
  { color: "secondary", Tittle: "2" },
  { color: "success", Tittle: "3" },
  { color: "info", Tittle: "4" },
  { color: "warning", Tittle: "5" },
  { color: "danger", Tittle: "6" },
  { color: "light text-dark", Tittle: "7" },
  { color: "dark ", Tittle: "8" },
];
export const PillsNumber = [
  { color: "secondary", Tittle: "2" },
  { color: "success", Tittle: "3" },
  { color: "info", Tittle: "4" },
  { color: "warning", Tittle: "5" },
  { color: "danger", Tittle: "6" },
  { color: "light text-dark", Tittle: "7" },
  { color: "dark ", Tittle: "8" },
];
// TagsIcon
export const TagsIcon = [
  { color: "secondary", Tittle: <Headphones /> },
  { color: "success", Tittle: <Link /> },
  { color: "info", Tittle: <GitHub /> },
  { color: "warning", Tittle: <Award /> },
  { color: "danger", Tittle: <Activity /> },
  { color: "light text-dark", Tittle: <Heart /> },
  { color: "dark ", Tittle: <Mail /> },
];
// PillIcon

export const PillIcon = [
  { color: "secondary", Tittle: <Headphones /> },
  { color: "success", Tittle: <Link /> },
  { color: "info", Tittle: <GitHub /> },
  { color: "warning", Tittle: <Award /> },
  { color: "danger", Tittle: <Activity /> },
  { color: "light text-dark", Tittle: <Heart /> },
  { color: "dark ", Tittle: <Mail /> },
];

export const BadgesButtons = [
  { buttonclass: "primary", tittle: "Message", icon: <Mail /> },
  { buttonclass: "secondary", tittle: "Notifications", icon: <Bell /> },
  { buttonclass: "success", tittle: "Update avaliable", icon: <Settings /> },
  { buttonclass: "info ", tittle: "Playing now", icon: <Music /> },
  { buttonclass: "warning", tittle: "1.2gb used", icon: <AlertTriangle /> },
];

export let  ButtonPartData =[
  {tittle:Notification,color:"secondary", icon:<Bell />},
  {tittle:UpdateAvailable,color:"success", icon:<Settings />},
  {tittle:PlayingNow,color:"info", icon:<Music />},
  {tittle:DataUsed,color:"warning", icon:<AlertTriangle />},
  {tittle:Danger,color:"danger", icon:<AlertCircle />},
]