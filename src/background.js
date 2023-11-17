import React from "react";
import back from './background.jpeg';
import ceo from './ceo.webp';
function Background()
{
    return(
        <div className="three">
        <img src={back} className="two"/>
        <img src={ceo} className="bottomleft"/>
         <div className="bottomright">
          <b>Anuj Gosalia</b>
         <br></br>
         <br></br>
          <span className="five">6963</span>
          <span className="five">100</span>

          <br></br>
          <span className="six">followers</span>
          <span className="six">following</span>
         </div>
          <div className="seven">
            <p style={{margin:0}}>Co founder & CEO at Terribly Tiny Tales</p>
            <a className="eight" style={{margin:0}} href="#">https://www.instagram.com/anujgosalia</a>
          </div>
      </div>
      
    );
}
export default Background;