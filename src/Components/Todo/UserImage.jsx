import { H6, Image, P } from "../../AbstractElements";
import { MARKJENCOEMAIL, MarkJecno } from "../../Constant";
import { dynamicImage } from "../../Services/index";

const UserImage = () => {
  return (
    <div className="d-flex">
      <div className="media-size-email">
        <Image
          attrImage={{
            className: "me-3 rounded-circle",
            src: dynamicImage("user/user.png"),
            alt: "image",
          }}
        />
      </div>
      <div className="flex-grow-1">
        <H6 attrH6={{ className: "f-w-600" }}>{MarkJecno}</H6>
        <P>{MARKJENCOEMAIL}</P>
      </div>
    </div>
  );
};

export default UserImage;
