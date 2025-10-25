import { LI, UL } from "../../../AbstractElements";

const SocialMediaIcons = () => {
  let SocialMediaIconsData = [
    { iconClassName: "fa-facebook", href: "https://www.facebook.com/" },
    { iconClassName: "fa-google-plus", href: "https://myaccount.google.com/" },
    { iconClassName: "fa-twitter", href: "https://twitter.com/" },
    { iconClassName: "fa-instagram", href: "https://www.instagram.com/" },
    {iconClassName: "fa-rss",href: "https://dashboard.rss.com/auth/sign-in/",},
  ];
  return (
    <div className="social-media">
      <UL
        attrUL={{ className: "simple-list user-list-social d-flex flex-row" }}
      >
        {SocialMediaIconsData.map((data, index) => (
          <LI key={index}>
            <a href={data.href}><i className={`fa ${data.iconClassName} `}></i></a>
          </LI>
        ))}
      </UL>
    </div>
  );
};

export default SocialMediaIcons;
