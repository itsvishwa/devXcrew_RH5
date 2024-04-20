import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="" /></svg>
                    </div>
                </div>
                <a className="text-xl btn btn-ghost">HealthWatch360</a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    <li><Link to="/PatientHistory">Patient History</Link></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="mr-10 navbar-end">
                <button className="mr-6 btn"><Link to="/signup">Sign Up</Link></button>
                <button className="btn"><Link to="/login">Login</Link></button>
            </div>
        </div>
    );
};