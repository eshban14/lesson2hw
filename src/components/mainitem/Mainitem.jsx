
import { Component } from "react";
import Items from "../items/Items";

import "./Mainitem.css"

class Mainitem extends Component {
    render(){
        return(
            <div className="container">

                <div className="main">
                <div className="row">

                    <Items date = "10/05/2018" title = "Night Laser show" tags = "hip-hop" description = "We are happy to annonce this night show" imageUrl = "https://m.media-amazon.com/images/I/61ZHRhgN5UL.jpg"/>
                    <Items date = "10/05/2018" title = "Night Laser show" tags = "hip-hop" description = "We are happy to annonce this night show" imageUrl = "https://m.media-amazon.com/images/I/61ZHRhgN5UL.jpg"/>
                    <Items date = "10/05/2018" title = "Night Laser show" tags = "hip-hop" description = "We are happy to annonce this night show" imageUrl = "https://m.media-amazon.com/images/I/61ZHRhgN5UL.jpg"/>
                    <Items date = "10/05/2018" title = "Night Laser show" tags = "hip-hop" description = "We are happy to annonce this night show" imageUrl = "https://m.media-amazon.com/images/I/61ZHRhgN5UL.jpg"/>

                </div>
                
            </div>
            </div>
        )
    }
}

export default Mainitem;