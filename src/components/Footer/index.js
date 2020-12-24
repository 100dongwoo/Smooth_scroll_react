import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
} from './FooterElements';
import {
    FaLinkedin,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaFacebook,
} from 'react-icons/fa';

function Footer(props) {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>

                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Inverstors</FooterLink>

                            <FooterLink to="/signin">
                                Terms of Service
                            </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>

                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Inverstors</FooterLink>
                            <FooterLink to="/signin">
                                Terms of Service
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    {/*    */}
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>

                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Inverstors</FooterLink>

                            <FooterLink to="/signin">
                                Terms of Service
                            </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Socia Media</FooterLinkTitle>

                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Inverstors</FooterLink>

                            <FooterLink to="/signin">
                                Terms of Service
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            dolla
                        </SocialLogo>
                        <WebsiteRights>
                            dolla ★ {new Date().getFullYear()}
                            All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Youtube"
                            >
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </SocialIconLink>{' '}
                            <SocialIconLink
                                href="//www.naver.com"
                                target="_blank"
                                aria-label="Linkedin"
                            >
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer;
