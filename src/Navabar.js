import React from "react";
import './nav.css';
import Img from './icon.png';
import { Link } from "react-router-dom";
function Navabar()
{
    return(

  <nav class="navbar navbar-dark bg-dark justify-content-between">

    <div>
  <img src={Img} alt="" width="30" height="30" id = "three" className="d-inline-block"/>
  <span className="one"> |STORIES</span>
  </div>
  <form className="form-inline">
    <button className="btn btn-warning my-2 my-sm-0" type="submit"><b>Courses</b></button>
     </form>
    </nav>
  
    );
}
export default Navabar;