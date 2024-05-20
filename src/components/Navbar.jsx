import { Link } from "react-router-dom"

import styled from "styled-components";

const Menu = styled.nav`
display: flex;
justify-content: space-between;
background-color: aliceblue;
padding: 10px;
text-decoration: none;
color: inherit;
`


const Navbar = () => {
    return(
        <Menu>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='sobre'>Sobre</Link>
            <Link to='contato'>Contato</Link>
        </nav>
        </Menu>
        
    )
}

export default Navbar;