import React from "react";
import styled from "styled-components";


const MenuBar = ()=>{
    return (
    <Wrapper>
        <UlList>
            <Li>Tweets</Li>
            <Li>Media</Li>
            <Li>Likes</Li>
        </UlList>
    </Wrapper>
    )
}

const Wrapper = styled.div`
margin-top: 40px;
margin-right: 20px;
;`

const UlList = styled.ul`
list-style-type: none;
display: flex;
flex-direction: row;
justify-content: space-between;

`;

const Li = styled.li`
display: flex;
flex-direction: row;
justify-content: space-between;

`;

export default MenuBar;