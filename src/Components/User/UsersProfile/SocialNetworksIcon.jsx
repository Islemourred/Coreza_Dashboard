import { Btn } from "../../../AbstractElements";
import {Dribbble,Facebooks,SocialNetworks,Twitters,} from "../../../Constant";

const SocialNetworksIcon = () => {
  let datas = [
    { tittle: Facebooks, iconClas: "fa-facebook", color: "fb" },
    { tittle: Twitters, iconClas: "fa-twitter", color: "twitter" },
    { tittle: Dribbble, iconClas: "fa-dribbble", color: "google" },
  ];

  return (
    <div className="social-network theme-form">
      <span className="f-w-600">{SocialNetworks}</span>
      {datas.map((data, i) => (
        <Btn
          key={i}
          attrBtn={{
            className: "btn social-btn mb-2 text-center",
            color: data.color,
          }}
        >
          <i className={`fa ${data.iconClas} m-r-5`}></i>
          {data.tittle}
        </Btn>
      ))}
    </div>
  );
};

export default SocialNetworksIcon;