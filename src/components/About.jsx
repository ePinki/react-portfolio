import React from "react";

function About() {
  return (
    <div className="about">
      <div className="about__one">
        <img src="../img/1.svg" alt="" />
        <img src="../img/2.svg" alt="" />
        <img src="../img/3.svg" alt="" />
      </div>

      <div className="about__two">
        <div className="about__two-title">
          <img src="../img/t.svg" alt="" />
          <p>personal-info</p>
        </div>

        <div className="about__two-descr">
          <div className="about__two-descr-one">
            <img src="../img/arrow-right.svg" alt="" />
            <img src="../img/red-pac.svg" alt="" />
            <p className="active-text">bio</p>
          </div>

          <div className="about__two-descr-one">
            <img src="../img/arrow-right.svg" alt="" />
            <img src="../img/green-pac.svg" alt="" />
            <p className="">interests</p>
          </div>

          <div className="about__two-descr-one">
            <img src="../img/arrow-right.svg" alt="" />
            <img src="../img/purple-pac.svg" alt="" />
            <p className="">education</p>
          </div>

          <div className="about__two-desrc-two">
            <img src="" alt="" />
            <p></p>
          </div>

          <div className="about__two-desrc-two">
            <img src="" alt="" />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default About;