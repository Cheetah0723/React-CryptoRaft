import img1 from "../../img/gameplay_header.png"
import img2 from "../../img/boat.png"
import { Row, Col } from "react-bootstrap"

export default function () {
  return (
    <div className="gameplay">
      <div>
        <img src={img1} width="250px" />
      </div>
      <div className="flex">
        <Row>
          <Col xs={12} md={5} className="landing-boat">
            <img src={img2} className="landing-boat-img" />
          </Col>
          <Col xs={12} md={7}>
            <div className="gameplay-detail">
              <Row>
                <Col>
                  <h2>P VP P RACING</h2>
                  <p>
                    Players can participate in the PvP or PvC racing.
                    <br />
                    The rewards for winners:
                    <br />
                    Experience points, materials, tokens.
                  </p>
                </Col>
                <Col>
                  <h2>BUY/SELL RAFTS</h2>
                  <p>
                    In the marketplace, players can buy/sell rafts, materials.
                    <br />
                    Players will spend/earn
                    <br />
                    CryptoRafts token when trading.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2>UPGRADE RAFTS</h2>
                  <p>
                    When your rafts gain enough experience points, you can use
                    materials to upgrade them.
                    <br />
                    Raft upgrade will increase: Speed, power, drift, fuel.
                    <br />
                    The rewards for winners:
                    <br />
                    Experience points, materials, tokens.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
