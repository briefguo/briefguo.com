import React from 'react'
import { Flex } from '~/components/Flex'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import cx from 'classnames'

const NavListItem = styled.a`
  &:hover {
    cursor: pointer;
    color: #333;
    text-decoration: underline;
  }
  &:active {
    opacity: 0.8;
  }
  &.navbar__item {
    color: #777;
    margin: 0 10px;
    transition-delay: 0.05s;
    transition-duration: 0.25s;
    transition-property: color;
  }
  &:active,
  &.navbar__item--active {
    color: #333;
    font-weight: bold;
    text-decoration: underline;
  }
`

interface NavbarItemProps {
  url: string
}

const NavbarItem: React.FC<NavbarItemProps> = props => {
  const history = useHistory()
  const isActive = history.location.pathname === props.url
  const classnames = cx('navbar__item', {
    [`navbar__item--active`]: isActive,
  })

  const handleClick = () =>
    props.url.includes('://')
      ? (window.location.href = props.url)
      : history.push(props.url)
  return <NavListItem className={classnames} {...props} onClick={handleClick} />
}

const Navbar = styled.nav`
  list-style: none;
  display: flex;
  margin: 0 -10px;
  width: 996px;
  margin: 0 auto;
`

const HeaderContainer = styled.header`
  .navbar {
    height: 64px;
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    .navbar {
      justify-content: center;
      padding-left: 0;
    }
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar className="navbar">
        <NavbarItem url="/">主页</NavbarItem>
        <NavbarItem url="/projects">项目</NavbarItem>
        <NavbarItem url="/about">关于</NavbarItem>
        <NavbarItem url="/contact">联系</NavbarItem>
        <NavbarItem url="https://www.zhihu.com/people/guo-yong-jie-48/posts">
          知乎
        </NavbarItem>
      </Navbar>
    </HeaderContainer>
  )
}

export default Header
