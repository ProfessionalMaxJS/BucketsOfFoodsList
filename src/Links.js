import { NavLink, BrowserRouter, Route } from "react-router-dom"

// import Max from "./Max"
// import Okera from "./Okera"
// import Pema from "./Pema"

function Links(){
    return(
        <div>
        <h1>This is where links to our individual pages will go</h1>
        <ul>
        <li><NavLink exact to="/Max">Max's Page  </NavLink></li>
        <li><NavLink exact to="/Okera">Okera's Page  </NavLink></li>
        <li><NavLink exact to="/Pema">Pema's Page  </NavLink></li>
</ul>


        {/* <ul>
            <Max />
            <Okera />
            <Pema />
        </ul> */}
        </div>
    )
}

export default Links;