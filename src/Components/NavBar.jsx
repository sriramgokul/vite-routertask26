import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <div className="d-flex justify-content-center mt-4">
        <ul className="nav nav-underline">
            <li className="nav-item">
               <Link to={"/all"} className="nav-link" href="#">All</Link> 
            </li>
            <li className="nav-item">
              <Link to={"/details/fsd"} className="nav-link">FULL STACK DEVELOPMENT</Link>
            </li>
            <li className="nav-item">
              <Link to={"/details/datascience"} className="nav-link">DATA SCIENCE</Link>
            </li>
            <li className="nav-item">
              <Link to={"/details/cybersecurity"} className="nav-link">CYBER SECURITY</Link>
            </li>
            <li className="nav-item">
              <Link to={"/details/Career"} className="nav-link">CAREER</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar