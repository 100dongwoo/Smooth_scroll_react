import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarLink,
    SidebarRoute,
    SidebarWrapper,
    SideBtnWrap,
    SidebarMenu,
} from './SidebarElement';

function Sidebar(props) {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="discover">Discover</SidebarLink>
                    <SidebarLink to="services">Services</SidebarLink>
                    <SidebarLink to="signup">Sign UP</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;
