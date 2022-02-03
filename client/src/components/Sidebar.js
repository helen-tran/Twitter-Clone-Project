import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiBell, FiBookmark, FiHome, FiUser} from "react-icons/fi";
import HoverPages from "./HoverPages";
import { COLORS } from "./constants";
import logo from "../assets/logo.svg"

const Sidebar = ()=>{
const styleIcon = {marginRight: "15px"}
return (
    <Navigation>
        <UlLink>
            <LiLink><Logo src={logo} alt="cat"/></LiLink>
            
            <LiLink>
                <HoverPages >
                <PageLink to="/">
                    <FiHome style={styleIcon}/>
                    Home
                </PageLink>
                </HoverPages>
            </LiLink>
            
            <LiLink>
                <HoverPages>
                <PageLink to="/:profileId">
                    <FiUser style={styleIcon}/>    
                    Profile
                </PageLink>
                </HoverPages>
            </LiLink>
            
            <LiLink>
                <HoverPages>
                <PageLink to="/notifications">
                    <FiBell style={styleIcon}/>
                    Notifications
                </PageLink>
                </HoverPages>
            </LiLink>
            
            <LiLink>
                <HoverPages>
                <PageLink to="/bookmarks">
                    <FiBookmark style={styleIcon}/>
                    Bookmarks
                </PageLink>
                </HoverPages>
            </LiLink>
        
        </UlLink>
    </Navigation>
)
}
const Navigation = styled.nav`
display: block;
float: left;
`
const UlLink = styled.ul`
text-decoration: none;
`;

const LiLink = styled.li`
list-style-type: none;
`;

const PageLink = styled(NavLink)`
text-decoration: none;
display: flex;
align-content: center;
color: black;
&.active {
    color: ${COLORS.primary};
}
`;

const PageName = styled.p`
padding-left:15px;
`;

const Logo = styled.img`
width:50px;

`;

export default Sidebar;