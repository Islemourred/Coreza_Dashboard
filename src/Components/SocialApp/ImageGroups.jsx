import {BuckyBarnes,JasonBorne,AndewJon,JohnyWaston,ComerenDiaz,} from "../../Constant";
import { Image, LI, UL } from "../../AbstractElements";
import { UncontrolledTooltip } from "reactstrap";
import { dynamicImage } from "../../Services";

const ImageGroups = () => {
  let ImageGroupsData = [
    { imageSrc: "3.jpg", tittle: BuckyBarnes },
    { imageSrc: "5.jpg", tittle: JasonBorne },
    { imageSrc: "1.jpg", tittle: AndewJon },
    { imageSrc: "2.png", tittle: ComerenDiaz },
    { imageSrc: "8.jpg", tittle: JasonBorne },
    { imageSrc: "11.png", tittle: JohnyWaston },
  ];
  return (
    <UL attrUL={{ as: "ul", className: "simple-list d-flex flex-row justify-content-center",}}>
      {ImageGroupsData.map((data, index) => (
        <LI key={index} attrLI={{ className: "d-inline-block" }}>
          <Image attrImage={{ className: "img-30 rounded-circle", src: dynamicImage(`user/${data.imageSrc}`), alt: "ThirdImg", id: `UncontrolledTooltipExample${index + 1}`,}}/>
          <UncontrolledTooltip placement="top" target={`UncontrolledTooltipExample${index + 1}`}>
            {data.tittle}
          </UncontrolledTooltip>
        </LI>
      ))}
    </UL>
  );
};

export default ImageGroups;