import { Bootstrap, Home, Href, Library } from "../../../Constant";

const Breadcrumb3 = () => {
  return (
    <nav className="breadcrumb breadcrumb-no-divider">
      <a className="breadcrumb-item" href={Href}>
        {Home}
      </a>
      <a className="breadcrumb-item" href={Href}>
        {Library}
      </a>
      <span className="breadcrumb-item active">{Bootstrap}</span>
    </nav>
  );
};

export default Breadcrumb3;
