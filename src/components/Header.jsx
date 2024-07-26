import React from 'react';
import logo from '../assets/logo.jpg'
import * as S from './HeaderCss';

const Header = () => {
  return (
    <S.HeaderContainer>

      <S.LogoImage src={logo} alt="Logo Keila Bolos" />
      <S.Titulo>Keila Bolos</S.Titulo>
      
    </S.HeaderContainer>
  );
};

export default Header;
