import { Link } from "react-router-dom"

import { Button } from "react-bootstrap"
import image from "../../img/landing1.png"
import twitter from "../../img/twitter.png"
import telegram from "../../img/telegram.png"
import discord from "../../img/discord.png"

export default function () {
  return (
    <div className="header">
      <div className="landing-img">
        <img src={image} width="100%" />
        <Button className="btn-start" variant="none">
          <Link to="play">PLAY GAME</Link>
        </Button>
        <div className="contract">
          Contract Address:
          <a
            href="https://testnet.bscscan.com/address/0x71a73c3A5537A0E5c3Eb4a352FeB78Cd3F4Ed4fb"
            className="text-decoration-none white-color"
          >
            0x71a73c3A5537A0E5c3Eb4a352FeB78Cd3F4Ed4fb
          </a>
        </div>
      </div>
      <div className="social-items">
        <a
          target="_blank"
          className="social-item"
          href="https://twitter.com/cryptocarsgame"
        >
          <img src={twitter} />
        </a>
        <a
          target="_blank"
          className="social-item"
          href="https://t.me/cryptocarschannel"
        >
          <img src={telegram} />
        </a>
        <a
          target="_blank"
          className="social-item"
          href="https://discord.io/cryptocars"
        >
          <img src={discord} />
        </a>
      </div>
    </div>
  )
}
