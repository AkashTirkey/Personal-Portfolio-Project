import "./Navbar.css"
import { HiOutlineBars3 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
            <h2>Akash <span>Tirkey</span></h2>
        </div>

            <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Stack</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>

        <div className="menu-icon">
  <HiOutlineBars3 />
</div>
        
    </nav>
  )
}

export default Navbar