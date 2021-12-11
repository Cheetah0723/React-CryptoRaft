import image1 from "../../img/the_team.png"
import image2 from "../../img/angrybird.png"

export default function () {
  return (
    <div className="team">
      <img src={image1} width="300px" />
      <div className="team-members">
        <div className="team-member">
          <img src={image2} width="150px" />
          <div className="member-detail">
            <p>CEO - Founder</p>
            <p>Angry Bird</p>
          </div>
        </div>
        <div className="team-member">
          <img src={image2} width="150px" />
          <div className="member-detail">
            <p>CEO - Founder</p>
            <p>Angry Bird</p>
          </div>
        </div>
        <div className="team-member">
          <img src={image2} width="150px" />
          <div className="member-detail">
            <p>CEO - Founder</p>
            <p>Angry Bird</p>
          </div>
        </div>
        <div className="team-member">
          <img src={image2} width="150px" />
          <div className="member-detail">
            <p>CEO - Founder</p>
            <p>Angry Bird</p>
          </div>
        </div>
      </div>
    </div>
  )
}
