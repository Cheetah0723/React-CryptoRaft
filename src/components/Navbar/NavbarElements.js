import DropdownMenu from "@restart/ui/esm/DropdownMenu"
import { FaBars } from "react-icons/fa"
import { NavLink as Link } from "react-router-dom"
import styled from "styled-components"

export const Nav = styled.nav`
  background: grey;
  height: 85px;
  display: flex;
  position: fixed !important;
  width: 100%;
  top: 0;
  // justify-content: space-between;
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`
export const Img = styled.img`
  margin-left: 65px;
  width: 200px;
  height: 67px;
  justify-content: center;
  align-items: center;
`

export const NavLink = styled(Link)`
  color: white;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: black;
  @media screen and (max-width: 830px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  // margin-right: 100px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 830px) {
    display: none;
  }
`
