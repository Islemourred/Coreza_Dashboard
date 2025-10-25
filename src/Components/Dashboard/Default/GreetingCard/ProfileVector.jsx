import { LI, UL, Image } from "../../../../AbstractElements";
import {profileVector} from "../../../../Data/Profiledata/profiledata";
import { dynamicImage } from "../../../../Services/index";
import ProfileImageCard from "./ProfileImageCard";

const ProfileVector = () => {
  return (
    <div className="profile-vector">
      <UL attrUL={{ className: "dots-images simple-list" }}>
        {profileVector.map((item, i) => (
          <LI attrLI={{ className: `${item.classname} ` }} key={i}></LI>
        ))}
      </UL>
      <Image attrImage={{ className: "img-fluid", src: dynamicImage("dashboard/default/profile.png"),}} alt="image"/>
      <ProfileImageCard/>
    </div>
  );
};

export default ProfileVector;