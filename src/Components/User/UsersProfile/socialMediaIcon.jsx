import { LI, UL } from "../../../AbstractElements";

const SocialMediaIcon = () => {
  let datas = [
    { className: "fa-facebook", href: "https://www.facebook.com/" },
    { className: "fa-google-plus", href: "https://myaccount.google.com/" },
    { className: "fa-twitter", href: "https://twitter.com/" },
    { className: "fa-instagram", href: "https://www.instagram.com/" },
    { className: "fa-rss", href: "https://dashboard.rss.com/auth/sign-in/" },
  ];
  return (
    <div className="social-media">
      <UL attrUL={{ className: "simple-list user-list-social d-flex flex-row" }}>
        {datas.map((data, i) => (
          <LI key={i}>
            <a href={data.href}>
              <i className={`fa ${data.className} `}></i>
            </a>
          </LI>
        ))}
      </UL>
    </div>
  );
};

export default SocialMediaIcon;
