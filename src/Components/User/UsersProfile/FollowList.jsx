import { LI, UL } from "../../../AbstractElements";
import { Follower, Following, Likes } from "../../../Constant";

const FollowList = () => {
  let datas = [
    { followNum: 325, spanTittle: Follower },
    { followNum: 450, spanTittle: Following },
    { followNum: 500, spanTittle: Likes },
  ];
  return (
    <div className="follow">
      <UL attrUL={{className:"simple-list follow-list d-flex flex-row justify-content-center",}}>
        {datas.map((data, i) => (
          <LI key={i}>
            <div className="follow-num counter">{data.followNum}</div>
            <span>{data.spanTittle}</span>
          </LI>
        ))}
      </UL>
    </div>
  );
};

export default FollowList;
