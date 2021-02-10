import React from "react";
import { Route, Link } from "react-router-dom";
import Money from './work/Money'
import Getup from './work/Getup'


function Work() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/work/money">Money</Link></li>
          <li><Link to="/work/getup">Getup</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div><h3>职场软技能</h3></div>
        <Route path="/work/money/" component={Money} />
        <Route path="/work/getup/" component={Getup} />
      </div>
    </div>
  )
}
export default Work;