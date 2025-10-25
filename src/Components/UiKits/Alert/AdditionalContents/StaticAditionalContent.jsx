import { Alerts, H4, P } from "../../../../AbstractElements";

const StaticAditionalContent = () => {
  return (
    <Alerts
      attrAlert={{
        color: "primary",
      }}
    >
      <H4 attrH4={{ className: "alert-heading" }}>Well done!</H4>
      <P>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </P>
      <hr />
      <P attrPara={{ className: "mb-0" }}>
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </P>
    </Alerts>
  );
};

export default StaticAditionalContent;
