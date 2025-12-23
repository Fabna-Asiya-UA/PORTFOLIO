import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav style={{ padding:"15px" , backgroundColor:"#0A2540", textAlign:"right"}}>
            <Link to="/" style={{color:"white", marginRight:"15px"}} >Home</Link>
            <Link to="/experience" style={{color:"white", marginRight:"15px"}}>Experience</Link>
            <Link to="/about" style={{color:"white", marginRight:"15px"}}>About</Link>
            <Link to="/projects" style={{color:"white", marginRight:"15px"}}>Projects</Link>
            <Link to="/resume" style={{color:"white", marginRight:"15px"}}>Resume</Link>
            <Link to="/contact" style={{color:"white", marginRight:"15px"}}>Contact</Link>
        </nav>
    );
}

export default Navbar;