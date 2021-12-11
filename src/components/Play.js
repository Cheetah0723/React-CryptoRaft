import React from "react"

import image1 from "../img/carousel1.png"
import image2 from "../img/carousel2.png"
import image3 from "../img/carousel3.png"
import image4 from "../img/carousel4.png"

import Slider from "react-animated-slider"
import "react-animated-slider/build/horizontal.css"

import { Routes, Route, Link } from "react-router-dom"
import { Nav, NavLink, Bars, NavMenu, Img } from "./Navbar/NavbarElements"
import { Carousel } from "react-bootstrap"

import Home from "./pages/Home"
import Rafts from "./pages/Rafts.js"
import Staking from "./pages/Staking"
import Marketplace from "./pages/Marketplace"
import RaftWorkshops from "./pages/RaftWorkshops"

import logo from "../img/logo.png"

export default function () {
  const [isShow, setIsShow] = React.useState(false)
  const toggleMiniMenu = () => {
    setIsShow(!isShow)
  }

  const slides = [
    {
      title: "First item",
      description: "Lorem ipsum",
      img: image1,
      time: "1500",
    },
    {
      title: "Second item",

      img: image2,
      time: "1000",
    },
    {
      title: "third item",

      img: image3,
      time: "1500",
    },
    {
      title: "fourth item",

      img: image4,
      time: "1000",
    },
  ]

  return (
    <div className="play-body">
      <Nav>
        <Bars onClick={toggleMiniMenu}></Bars>
        <div id="mini_menu" className={isShow ? "d-block menu-bar" : "d-none"}>
          <ul>
            <li>
              <Link to="/play/" onClick={toggleMiniMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/play/rafts" onClick={toggleMiniMenu}>
                Rafts
              </Link>
            </li>
            <li>
              <Link to="/play/staking" onClick={toggleMiniMenu}>
                Staking
              </Link>
            </li>
            <li>
              <Link to="/play/marketplace" onClick={toggleMiniMenu}>
                Marketplace
              </Link>
            </li>
            <li>
              <Link to="/play/raftworkshops" onClick={toggleMiniMenu}>
                Raft Workshops
              </Link>
            </li>
          </ul>
        </div>

        <NavLink to="/">
          <Img src={logo} />
        </NavLink>
        <NavMenu>
          <NavLink to="/play/">Home</NavLink>
          <NavLink to="/play/rafts">Rafts</NavLink>
          <NavLink to="/play/staking">Staking</NavLink>
          <NavLink to="/play/marketplace">Marketplace</NavLink>
          <NavLink to="/play/raftworkshops">Raft Workshops</NavLink>
        </NavMenu>
        {/* <Jewellery></Jewellery> */}
      </Nav>

      <div className="carousel">
        <Carousel>
          {slides.map((slide, index) => (
            <Carousel.Item interval={slide.time}>
              <img
                className="d-block w-100"
                src={slide.img}
                alt={slide.title}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rafts/*" element={<Rafts />} />
        <Route path="staking" element={<Staking />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="raftworkshops" element={<RaftWorkshops />} />
      </Routes>
      <div className="play-footer">
        <p>Copyright @ 2021 CryptoRafts</p>
      </div>
    </div>
  )
}
