import { Button, Container, Row, Col, Table } from "react-bootstrap"

import raft1 from "../../img/boat.png"

export default function () {
  return (
    <div className="staking">
      <div className="btn-container"></div>
      <h2 className="pools center">POOLS</h2>
      <Container>
        <Row>
          <Col>
            <div className="card-item">
              <div className="car-img-box">
                <img src={raft1} className="staking-pool-img" width="180px;" />
              </div>
              <div className="car-info">
                <Table striped bordered hover size="sm">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td className="bold color-bblue">CCAR HOLDERS</td>
                    </tr>
                    <tr>
                      <td>APR</td> <td className="bold">200%</td>
                    </tr>
                    <tr>
                      <td>Min Staking</td> <td className="bold">500</td>
                    </tr>
                    <tr>
                      <td>Lock days</td> <td className="bold">5 days</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td className="bold">
                        999,753.88 <span>/ 1,000,000.00</span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div className="center">
                  <Button className="btn-game btn-green bold">
                    <span>Stake Now</span>
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card-item">
              <div className="car-img-box">
                <img src={raft1} className="staking-pool-img" width="180px;" />
              </div>
              <div className="car-info">
                <Table striped bordered hover size="sm">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td className="bold color-bblue">CCAR HOLDERS</td>
                    </tr>
                    <tr>
                      <td>APR</td> <td className="bold">200%</td>
                    </tr>
                    <tr>
                      <td>Min Staking</td> <td className="bold">500</td>
                    </tr>
                    <tr>
                      <td>Lock days</td> <td className="bold">5 days</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td className="bold">
                        999,753.88 <span>/ 1,000,000.00</span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div className="center">
                  <Button className="btn-game btn-green bold">
                    <span>Stake Now</span>
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card-item">
              <div className="car-img-box">
                <img src={raft1} className="staking-pool-img" width="180px;" />
              </div>
              <div className="car-info">
                <Table striped bordered hover size="sm">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td className="bold color-bblue">CCAR HOLDERS</td>
                    </tr>
                    <tr>
                      <td>APR</td> <td className="bold">200%</td>
                    </tr>
                    <tr>
                      <td>Min Staking</td> <td className="bold">500</td>
                    </tr>
                    <tr>
                      <td>Lock days</td> <td className="bold">5 days</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td className="bold">
                        999,753.88 <span>/ 1,000,000.00</span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div className="center">
                  <Button className="btn-game btn-green bold">
                    <span>Stake Now</span>
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card-item">
              <div className="car-img-box">
                <img src={raft1} className="staking-pool-img" width="180px;" />
              </div>
              <div className="car-info">
                <Table striped bordered hover size="sm">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td className="bold color-bblue">CCAR HOLDERS</td>
                    </tr>
                    <tr>
                      <td>APR</td> <td className="bold">200%</td>
                    </tr>
                    <tr>
                      <td>Min Staking</td> <td className="bold">500</td>
                    </tr>
                    <tr>
                      <td>Lock days</td> <td className="bold">5 days</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td className="bold">
                        999,753.88 <span>/ 1,000,000.00</span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div className="center">
                  <Button className="btn-game btn-green bold">
                    <span>Stake Now</span>
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card-item">
              <div className="car-img-box">
                <img src={raft1} className="staking-pool-img" width="180px;" />
              </div>
              <div className="car-info">
                <Table striped bordered hover size="sm">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td className="bold color-bblue">CCAR HOLDERS</td>
                    </tr>
                    <tr>
                      <td>APR</td> <td className="bold">200%</td>
                    </tr>
                    <tr>
                      <td>Min Staking</td> <td className="bold">500</td>
                    </tr>
                    <tr>
                      <td>Lock days</td> <td className="bold">5 days</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td className="bold">
                        999,753.88 <span>/ 1,000,000.00</span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div className="center">
                  <Button className="btn-game btn-green bold">
                    <span>Stake Now</span>
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <h2 className="pools center">YOUR STAKE</h2>
    </div>
  )
}
