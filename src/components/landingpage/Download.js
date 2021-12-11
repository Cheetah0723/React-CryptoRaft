import react from "react"
import image1 from "../../img/googleplay.png"
import image2 from "../../img/apple_testflight.png"
import image3 from "../../img/cpan.png"
import image4 from "../../img/vnsmartchain.jpg"
import image5 from "../../img/gateio.jpg"
import image6 from "../../img/cointelegraph.png"
import image7 from "../../img/coinmarketcap.svg"
import image8 from "../../img/coingecko.png"
import image9 from "../../img/yahoo_finance.png"
import image10 from "../../img/coin68.png"

export default function () {
  return (
    <div>
      <div className="download">
        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=crypto.cars.nft"
        >
          <img src={image1} />
        </a>
        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=crypto.cars.nft"
        >
          <img src={image2} />
        </a>
      </div>
      <div className="coindesk">
        <a href="https://cryptopldivnes.me">
          <div className="partner-item">
            <img src={image3} />
          </div>
        </a>
        <a href="https://vnsmartchain.com">
          <div className="partner-item">
            <img src={image4} />
          </div>
        </a>
        <a href="https://www.gate.io/trade/CCAR_USDT">
          <div className="partner-item">
            <img src={image5} />
          </div>
        </a>
        <a href="https://es.cointelegraph.com/news/cryptocars-the-nft-racing-game-youve-been-waiting-for">
          <div className="partner-item">
            <img src={image6} />
          </div>
        </a>
        <br />
        <a href="https://coinmarketcap.com/currencies/cryptocars">
          <div className="partner-item">
            <img src={image7} />
          </div>
        </a>
        <a href="https://www.coingecko.com/en/coins/cryptocars">
          <div className="partner-item">
            <img src={image8} />
          </div>
        </a>
        <a href="https://finance.yahoo.com/news/vietnamese-team-creates-cryptocars-first-171600559.html">
          <div className="partner-item">
            <img src={image9} />
          </div>
        </a>
        <a href="https://coin68.com/cryptocars">
          <div className="partner-item">
            <img src={image10} />
          </div>
        </a>
      </div>
    </div>
  )
}
