import React, { Fragment } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Breadcrumbs} from '../../../AbstractElements';
import { TourProvider, useTour } from "@reactour/tour";
import TourMain from "./TourMain";

const steps = [
  {
    selector: ".step1",
    content: "This is Profile image",
  },
  {
    selector: ".step2",
    content: "Change Profile image here",
  },
  {
    selector: ".step3",
    content: "This is your Social details",
  },
  {
    selector: ".step4",
    content: "This is your Your detail",
  },
  {
    selector: ".step5",
    content: "This is the your first Post",
  },
  {
    selector: ".step6",
    content: "This is the your Last Post",
  },
];

const ToursContain = () => {
  const { setIsOpen } = useTour;
  const disableBody = target => disableBodyScroll(target);
  const enableBody = target => enableBodyScroll(target);

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Tour" parent="Bonus UI" title="Tour" />
      <TourProvider
        steps={steps}
        isOpen={() => setIsOpen(true)}
        disableInteraction={true}
        disableKeyboardNavigation={false}
        onAfterOpen={disableBody}
        onBeforeClose={enableBody}
      >
        <TourMain />
      </TourProvider>
    </Fragment>
  );
};

export default ToursContain;
