import React from "react";
import ResumeImage from "../../assets/Resume2.png";
import Cert1 from "../../assets/Cert1.jpg";
import Cert2 from "../../assets/Cert2.jpg";

function Contact() {
  return (
    <>
      <div className="resume">
        <img src={ResumeImage} alt="" />
      </div>

      <div className="cert-div">
        <h1>Certificate</h1>
        <div className="cert">
          <div>
            <img src={Cert1} alt=" Certificate" width={"400px"} height={"300px"} />
          </div>
          <div>
            <img src={Cert2} alt=" Certificate" width={"400px"} height={"300px"}  />
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;