import { Bootstrap, Home, Href, Library } from "../../../Constant";

const Breadcrumb2 = () => {
  return (
    <nav className="breadcrumb breadcrumb-icon">
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

export default Breadcrumb2;
