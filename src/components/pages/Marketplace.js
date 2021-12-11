import { React, useState } from "react"
import { Button, Dropdown } from "react-bootstrap"
import { BsArrowRepeat } from "react-icons/bs"

export default function () {
  const [carValue, setCarValue] = useState("All Cars")
  const [priceValue, setPriceValue] = useState("Lowest Price")

  const insertCarValue = (e) => setCarValue(e)
  const insertPriceValue = (e) => setPriceValue(e)

  return (
    <div>
      <div className="btn-container">
        <div className="flex">
          <input
            id="tokenID"
            type="text"
            placeholder="Search by raft number"
            className="form-control bg-white"
          />
          <Button className="btn-game btn-green">SEARCH</Button>
          <Button className="btn-game btn-orange btn-circle">
            <BsArrowRepeat className="refresh" />
          </Button>
          <div>
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                {carValue}
              </Dropdown.Toggle>

              <Dropdown.Menu className="car-style-var">
                <Dropdown.Item
                  href="#"
                  onClick={() => {
                    insertCarValue("All Car")
                  }}
                >
                  All Car
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => {
                    insertCarValue("Classic")
                  }}
                >
                  Classic
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => {
                    insertCarValue("Common")
                  }}
                >
                  Common
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => {
                    insertCarValue("Super Car")
                  }}
                >
                  Super Car
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => {
                    insertCarValue("Rare")
                  }}
                >
                  Rare
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => {
                    insertCarValue("Legendary")
                  }}
                >
                  Legendary
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                {priceValue}
              </Dropdown.Toggle>

              <Dropdown.Menu className="car-style-var">
                <Dropdown.Item
                  href="#"
                  onClick={() => {
                    insertPriceValue("Lowest Price")
                  }}
                >
                  Lowest Price
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => {
                    insertPriceValue("Highest Price")
                  }}
                >
                  Highest Price
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => {
                    insertPriceValue("Lowest Level")
                  }}
                >
                  Lowest Level
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => {
                    insertPriceValue("Highest Level")
                  }}
                >
                  Highest Level
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  )
}
