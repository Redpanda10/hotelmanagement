import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img5 from "../images/mohit.jpg";
import pankaj from "../images/pankaj.jpeg";

const teamMembers = [
  {
    id: 1,
    name: "Mohit Singh Budal",
    role: "Fronted Designer",
    img: img5,
  },
  {
    id: 2,
    name: "Pankaj Bhatt",
    role: "Backed Developer",
    img: pankaj,
  },
];
export default function About() {
  return (
    <>
      <div className="image12"></div>
      <div className="one-line">{'"Be the one who inspiers other"'}</div>
      <div className="final-footer">
        <div className="left">
          <h1 id="heading">Our mission</h1>
          <p id="p1">
            We are not your average company. Our sincere values and passion for
            the community add up to top-quality website always with our
            customers’ needs first. Our team lives and works in the Lamachaur
            area, so building relationships within the community is important to
            us. Your peace of mind is our number one goal!
          </p>
        </div>
        <div className="right">
          <h1 id="heading">What makes us different from other Sites?</h1>
          <p id="p2">
            We focus on a respectful, honest, and communicative relationship
            with each client.We make the booking easier and reliable for
            everyone. We are dedicated to providing a comprehensive and
            user-friendly platform.
          </p>
        </div>
      </div>
      <div className="team-container">
        <div id="heading">Our team</div>
        <div className="heading-top">
          We’re a dynamic group of individuals who are passionate about what we
          do and dedicated to delivering the best results for our clients.
        </div>
        <div className="divide">
          {teamMembers.map((member) => (
            <div
              className="lister"
              key={member.id}
              style={{
                color: "rgb(137, 154, 199)",
                fontSize: "larger",
                display: "inline",
                borderRadius: "50px",
              }}
            >
              <img src={member.img} className="team-img" />
              {member.name}
              <br />
              {member.role}
            </div>
          ))}
        </div>
      </div>

      <div className="new-final">
        localhost:5173/Home
        <br />
        Nepali site | Book your hotel now
        <br />
        Designed and Developed By: Pankaj and Mohit | Email :
        wrcstudents@gmail.com
        <br />© Copyright 2024 Nepali Booking site 2081 - The bookers 2081, All
        Rights Reserved
      </div>
    </>
  );
}
