import { Image, LI, UL } from "../../../../AbstractElements"
import { profileImage } from "../../../../Data/Profiledata/profiledata"
import { dynamicImage } from "../../../../Services"

const ProfileImageCard = () => {
  return (
    <UL attrUL={{ className: "vector-image simple-list" }}>
        {profileImage.map((item, i) => (
          <LI key={i}>
            <Image attrImage={{ className: "img-fluid", src: dynamicImage(`dashboard/default/${item.img}`),}} alt="image"/>
          </LI>
        ))}
      </UL>
  )
}

export default ProfileImageCard