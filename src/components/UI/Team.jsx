import "../../Style/team.css";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import team1 from "../../assets/images/team-01.png";
import team2 from "../../assets/images/team-02.png";
import team3 from "../../assets/images/team-03.png";
import team4 from "../../assets/images/team-04.png";

const Team = () => {
  return (
    <section className="team">
      <div className="container">
        <div className="team__title">
          <h6 className="subtitle">Our Team</h6>
          <h2>
            Meet with <span className="highlight">our team</span>
          </h2>
        </div>
        <div className="team__members">
          <div className="team__member">
            <div className="team__image">
              <img src={team1} alt="" />
            </div>
            <div className="member__details">
              <h2>Jhone Helly</h2>
              <p>Product developer</p>
            </div>
            <div className="member__social">
              <FaLinkedin color="white" size={20} />
              <AiOutlineTwitter color="white" size={20} />
            </div>
          </div>
          <div className="team__member">
            <div className="team__image">
              <img src={team2} alt="" />
            </div>
            <div className="member__details">
              <h2>Jhone Helly</h2>
              <p>Product developer</p>
            </div>
            <div className="member__social">
              <FaLinkedin color="white" size={20} />
              <AiOutlineTwitter color="white" size={20} />
            </div>
          </div>
          <div className="team__member">
            <div className="team__image">
              <img src={team3} alt="" />
            </div>
            <div className="member__details">
              <h2>Jhone Helly</h2>
              <p>Product developer</p>
            </div>
            <div className="member__social">
              <FaLinkedin color="white" size={20} />
              <AiOutlineTwitter color="white" size={20} />
            </div>
          </div>
          <div className="team__member">
            <div className="team__image">
              <img src={team4} alt="" />
            </div>
            <div className="member__details">
              <h2>Jhone Helly</h2>
              <p>Product developer</p>
            </div>
            <div className="member__social">
              <FaLinkedin color="white" size={20} />
              <AiOutlineTwitter color="white" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
