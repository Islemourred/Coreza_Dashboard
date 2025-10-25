import { LI, UL } from "../../../AbstractElements";
import { Follower, Following, Likes } from "../../../Constant";

const FollowIcons = () => {
  let datas = [
    { number: 325, tittle: Follower },
    { number: 450, tittle: Following },
    { number: 500, tittle: Likes },
  ];
  return (
    <div className="follow">
      <UL attrUL={{className:"simple-list follow-list d-flex flex-row justify-content-center",}}>
        {datas.map((data, i) => (
          <LI key={i}>
            <div className="follow-num counter">{data.number}</div>
            <span>{data.tittle}</span>
          </LI>
        ))}
      </UL>
    </div>
  );
};

export default FollowIcons;