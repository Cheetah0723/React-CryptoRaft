import React from "react"
import { Button, Container, Row, Col } from "react-bootstrap"

import raft1 from "../../img/boat.png"

export default function () {
  return (
    <div>
      <div className="btn-container"></div>
      <div className="pdt-20">
        <Container>
          <Row>
            <Col>
              <div className="pvf-header">PEGASUS VS FISHIE COOKIE (PvF)</div>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <div className="home-card pvf-component">
                <Row>
                  <Col>
                    <img src={raft1} width="140px" />
                  </Col>
                  <Col>
                    <img src={raft1} width="140px" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="bet-ccar">
                      <p>Bet CCAR on Pegasus</p>
                      <Button className="btn-game btn-yellow">20</Button>
                      <Button className="btn-game btn-yellow">50</Button>
                      <Button className="btn-game btn-yellow">100</Button>
                      <Button className="btn-game btn-yellow">200</Button>
                      <Button className="btn-game btn-yellow">300</Button>
                      <Button className="btn-game btn-yellow">500</Button>
                    </div>
                  </Col>
                  <Col>
                    <div className="bet-ccar">
                      <p>Bet CCAR on Pegasus</p>
                      <Button className="btn-game btn-yellow">20</Button>
                      <Button className="btn-game btn-yellow">50</Button>
                      <Button className="btn-game btn-yellow">100</Button>
                      <Button className="btn-game btn-yellow">200</Button>
                      <Button className="btn-game btn-yellow">300</Button>
                      <Button className="btn-game btn-yellow">500</Button>
                    </div>
                  </Col>
                </Row>
                <p>
                  The raft with less CCAR bet will win.
                  <br />
                  With each bet of CCAR, you will get <strong>195%</strong> CCAR
                  if you win.
                  <br />
                  In case the bet value on Pegasus & Fishie Cookie are the same,
                  you will get <strong>95%</strong> CCAR back.
                  <br />
                  The post will be locked from UTC 12:59 to UTC 13:01.
                  <br />
                  Results will be announced at UTC 13:00 every day. You can go
                  to Account Information to see the bet results.
                  <br />
                  All revenue will be put into the rewards pool.
                </p>
              </div>
            </Col>
            <Col>
              <div className="home-card home-detail">
                <h2>WELCOME TO CRYPTOCARS</h2>
                <p>
                  First you need deposit CCAR from your Metamask wallet into the
                  game, please go to <a href="#">Account Information</a> and use
                  Deposit CCAR button.
                </p>
                <p>
                  Please follow our <a href="#">Roadmap</a> for the latest game
                  features, already available features:
                </p>
                <p>
                  Read more about <a href="#">Level - Exp Required</a>
                </p>
              </div>
              <div className="home-card home-detail">
                <h2>CRYPTORAFTS STATISTICS</h2>
                <Row>
                  <Col>
                    <div className="count-board">
                      <p id="players" className="count">
                        458,015
                      </p>
                      <p className="title">PLAYERS</p>
                      <div className="bar"></div>
                    </div>
                  </Col>
                  <Col>
                    <div className="count-board">
                      <p id="rafts" className="count">
                        412,514
                      </p>
                      <p className="title">RAFTS</p>
                      <div className="bar"></div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="count-board">
                      <p id="players" className="count">
                        458,015
                      </p>
                      <p className="title">PLAYERS</p>
                      <div className="bar"></div>
                    </div>
                  </Col>
                  <Col>
                    <div className="count-board">
                      <p id="rafts" className="count">
                        412,514
                      </p>
                      <p className="title">RAFTS</p>
                      <div className="bar"></div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
