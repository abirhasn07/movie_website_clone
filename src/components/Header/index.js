import React from 'react';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import { Content, LogoImg, TMDBLogoImg, Wrapper } from './Header.styles.js';







const Header = () => (

    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} alt="movie website logo" />
            <TMDBLogoImg src={TMDBLogo} alt="TMBD Website Logo" />
        </Content>
    </Wrapper>


)

export default Header