import { Link } from "react-router-dom";

// extensión de React Router que añade soporte para enlaces a anclas (#id).
import { HashLink } from "react-router-hash-link";


function ButtonCta({children, route="#", id=""}) {
  return (
    <Link 
    to={route} 
    role="button" 
    className="btn-cta" id={id}>
      {children}
    </Link>
  );
}
export default ButtonCta;