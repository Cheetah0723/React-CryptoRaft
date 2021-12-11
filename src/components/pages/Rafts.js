import { React, useState } from "react"
import { Button, Modal } from "react-bootstrap"

import raft from "../../img/boat.png"
import title from "../../img/boat.png"
import fusion from "../../img/boat.png"
import newRaft from "../../img/donwater.png"

export default function () {
  const [isCarActive, setCarActive] = useState(true)
  const [modal1Show, setModal1Show] = useState(false)
  const [modal2Show, setModal2Show] = useState(false)

  const handleClose = () => setModal1Show(false)
  const handleShow = () => setModal1Show(true)

  const handleClose2 = () => setModal2Show(false)
  const handleShow2 = () => setModal2Show(true)

  return (
    <div>
      <div className="btn-container">
        <div className={isCarActive ? "" : "hidden"}>
          <Button disabled="disabled" className="btn-game">
            REFUEL
          </Button>
          <Button onClick={handleShow} className="btn-game btn-red">
            UNBOX NEW RAFT
          </Button>
          <Button onClick={handleShow2} className="btn-game btn-green">
            REWARDS OF SOLD RAFTS
          </Button>
        </div>

        <div className={!isCarActive ? "" : "hidden"}>
          <a className="btn-game btn-blue">BUY ITEM BOX</a>
        </div>
      </div>

      <div className="cars-container">
        <img src={fusion} width="600px;" />
        <div className="nav-rafts-tab">
          <Button
            className={isCarActive ? "nav-home-tav active" : "nav-home-tav"}
            onClick={() => {
              setCarActive(true)
            }}
          >
            <img src={raft} width="30px;" />
            <span className="your-cars">YOUR CARS</span>
          </Button>
          <Button
            className={!isCarActive ? "nav-home-tav active" : "nav-home-tav"}
            onClick={() => {
              setCarActive(false)
            }}
          >
            <img src={title} width="30px;" />
            <span className="your-items">YOUR ITEMS</span>
          </Button>
        </div>
      </div>
      <Modal show={modal1Show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>BUY NEW BLIND BOX</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-new-raft">
            <div>
              <img src={newRaft} width="250px;" />
            </div>
            <p id="price" className="price">
              Price: 600 CCAR
            </p>
            <p className="post">
              You have a <span>10%</span>chance of getting a rare car Newly
              opened cars will not be listed for sale in the next{" "}
              <span>15</span>days
              <br />
              Only users with less than <span>2</span>cars can buy the box
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>BUY THIS BOX</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modal2Show} onHide={handleClose2} centered>
        <Modal.Header closeButton>
          <Modal.Title>REWARDS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p id="total-rewards" className="price">
            Price: 600 CCAR
          </p>
          <div className="rewards">No Rewards</div>
        </Modal.Body>
      </Modal>
    </div>
  )
}
