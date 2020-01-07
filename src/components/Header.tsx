import React from 'react';
import logo from '~assets/briefguo.png';
import { Flex } from '~components/Flex';
import styled from 'styled-components';

const Navbar = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 -10px;
`;

const NavbarItem = styled.li`
  margin: 0 10px;
`;
const Logo = styled.img`
  width: 45px;
  border-radius: 5px;
`;

const HeaderContainer = styled(Flex)`
  height: 64px;
`;

const Header = () => {
  return (
    <HeaderContainer align="center" justify="space-between">
      <div>
        <Logo src={logo} alt="" />
      </div>
      <Navbar>
        <NavbarItem>主页</NavbarItem>
        <NavbarItem>项目</NavbarItem>
        <NavbarItem>应用</NavbarItem>
        <NavbarItem>关于</NavbarItem>
        <NavbarItem>联系</NavbarItem>
        <NavbarItem>博客</NavbarItem>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
