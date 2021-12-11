import image1 from "../../img/white_papers.png"
import image2 from "../../img/vnsmartchain.png"

export default function () {
  return (
    <div className="footer">
      <a target="_blank" href="https://vnsmartchain.com">
        <img width="300px" src={image1} />
      </a>
      <div>
        <img src={image2} width="300px" />
      </div>
      <p>Copyright @ 2021 CryptoRafts</p>
    </div>
  )
}
