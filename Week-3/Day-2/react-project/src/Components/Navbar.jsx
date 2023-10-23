import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar=()=>{
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Explore.in/Gokarna
                    </Link>
                    <div className="Collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <form className="d-flex ">
                                    <input className="form-control ms-5 me-3 " type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </li>
                            
                        </ul>
                        <Link className="btn btn-primary mx-1" to="/login">
                            Login
                        </Link>
                        <Link className="btn btn-primary mx-1" to="/signup">
                            Singup
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;