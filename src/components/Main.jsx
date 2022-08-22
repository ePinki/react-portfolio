import React from "react";

function Main() {
  return (
    <div className="main__wrapper">
      <div className="main__left">
        <div className="main__left-top">
          <p className="main__left-small">Hi all. I am</p>
          <h1 className="main__left-name">Yarmolchik Nazar</h1>
          <p className="main__left-dev"> > Front-end developer</p>
        </div>

        <div className="main__left-bot">
          <p className="grey">// last update 22.08.2022</p>
          <p className="grey">// you can also see it on my Github page</p>
          <p><span className="bl">const </span> <span className="gr">githubLink = </span><a className="gt" href="">“https://github.com/ePinki”</a></p> 
        </div>
      </div>

      <div className="main__right">
        <div className="bg-green"></div>
        <div className="bg-blue"></div>
      </div>
    </div>
  )
}


export default Main;