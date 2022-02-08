import React from "react";
import styled from "styled-components";
import moment from "moment";
import { COLORS } from "../constants";
import {FiMapPin,FiCalendar} from "react-icons/fi";

const ProfileHeader = ({avatarSrc, bannerSrc, bio, displayName, handle, isBeingFollowedByYou, joined, location, numFollowing, numFollowers, url, isFollowingYou})=>{
const formattedDate = moment(joined).format('MMMM YYYY');
const styleIcon = {color: "#657786"}

return(
<Wrapper>
<Banner src={bannerSrc}/>
    <Header>
        <HeaderSubSection1>
            <Avatar src={avatarSrc} />
            {isBeingFollowedByYou
            ? <FollowButton>Following</FollowButton>
            : <FollowButton>Follow</FollowButton>
            }
        </HeaderSubSection1>
        
        <DisplayName>{displayName}</DisplayName>
        
        <HeaderSubSection2>
            <Username>@{handle}</Username>
            
            { isFollowingYou &&
            (<BoxFollowing>
            <Following>Follows you</Following>
            </BoxFollowing>)
            }
        </HeaderSubSection2>
        <Bio>{bio}</Bio>

        <HeaderSubSection2>
        { location && (
        <InfoDiv>
        <FiMapPin style={styleIcon}/>
        <Info>{location}</Info>
        </InfoDiv>)}

        <InfoDiv>
        <FiCalendar style={styleIcon}/>
        <Info>Joined {formattedDate}</Info>
        </InfoDiv>
        </HeaderSubSection2>

        <HeaderSubSection2>
        <InfoDiv>
            {numFollowing}<Info>Following</Info>
            {numFollowers}<Info>Followers</Info>
        </InfoDiv>
        </HeaderSubSection2>

        { url &&
        <Url href={url}>{url}</Url>}

    </Header>
</Wrapper>
)
};

const Wrapper = styled.div`
display:flex;
flex-direction: column;
`

const Header = styled.div`
display:flex;
flex-direction: column;
margin-left: 20px;
`;

const Banner = styled.img`
width: 100%;
`;

const HeaderSubSection1 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
;`

const HeaderSubSection2 = styled.div`
display:flex;
margin-top:8px;
;`

const Following = styled.p`
font-size: 15px;
color: rgb(101, 119, 134);
`;

const BoxFollowing = styled.div`
margin-left: 10px;
display:flex;
justify-content: center;
align-items: center;
width: 100px;
height: 20px;
background-color: #EBEBEB;
`;

const FollowButton = styled.button`
border: none;
color: white;
font-weight: bold;
width: 110px;
height: 30px;
margin-top: 25px;
margin-right: 20px;
background-color: ${COLORS.primary};
border-radius: 100px;
`;

const Avatar = styled.img`
margin-top: -5%;
border: 2px solid white;
width: 120px;
height: 120px;
border-radius: 50%;
`;

const DisplayName = styled.p`
padding-right: 20px;
font-size: 18px;
font-weight: bold;
margin:15px 0 5px 0;
`;

const Username = styled.div`
font-size: 15px;
color: rgb(101, 119, 134);
`;

const Bio = styled.p`
font-size: 15px;
margin: 5px 0 5px 0;
`;

const Info = styled.div`
color: rgb(101, 119, 134);
font-size: 15px;
padding-left: 8px;
margin-right: 20px;
`;

const InfoDiv = styled.div`
display: flex;s
`;

const Url = styled.a`
padding-top: 5px;
text-decoration: none;
color: #4B76C6;
`;

export default ProfileHeader;