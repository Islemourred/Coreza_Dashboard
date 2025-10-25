import { H5, LI, P, UL } from "../../../../AbstractElements";
import { CustomContentsBodydatas } from "../../../../Data/Ui-kits/List";

const CustomContentsBody = () => {
  return (
    <UL>
      {CustomContentsBodydatas.map((data, index) => (
        <LI key={index} attrLI={{ className: data.LiClass }}>
          <div className="d-flex w-100 justify-content-between">
            <H5 className="mb-1">{data.Heading}</H5>
            <small className={data.SmallCLass ?data.SmallCLass :""}>{"3 days ago"}</small>
          </div>
          <P attrPara={{className: 'mb-0 mt-1'}}>{data.paragraphText}</P>
          <small className={data.SmallCLass ?data.SmallCLass :""}>
            {"Donec id elit non mi porta."}
          </small>
        </LI>
      ))}
    </UL>
  );
};

export default CustomContentsBody;
