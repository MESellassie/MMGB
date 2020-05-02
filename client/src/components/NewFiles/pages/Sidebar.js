import React from "react";
import Jumbotron from "./Jumbotron";
import Row from "./Row";
import Card from "./Card";
import Body from "./Body";
import { render } from "react-dom";
import API from "../utils/API";

// function Sidebar(props) {
//     return (
//         <Jumbotron>
//             <Row>
//                 <div className="col-sm-2 shadow" id="sidebar">
//                     <p className="plug">Plug of the Day</p>
//                     <br></br>
//                     <Card></Card>
//                     <br></br>
//                     <Card></Card>
//                     <br></br>
//                     <Card></Card>
//                     <br></br>
//                     <Card></Card>
//                     {props.children}
//                 </div>
//                 <Body></Body>
                
//             </Row>
//         </Jumbotron>
//     );

// }



class Sidebar extends Component {
    state = {
        result: {}
    };

    componentDidMount(){
        const query = "Joker";
        API.random(query)
            .then(props => console.log(props))
            .catch(err => console.log(err));
    }
}
    render()
        return (
            <Jumbotron>
                <Row>
                    <div className="col-sm-2 shadow" id="sidebar">
                     <p className="plug">Plug of the Day</p>
                     <br></br>
                        <Card></Card>
                        <br></br>
                        <Card></Card>
                        <br></br>
                     <Card></Card>
                     <br></br>
                     <Card></Card>
                         {props.children}
                    </div>
                    <Body></Body>
                
                </Row>
            </Jumbotron>
    );





export default Sidebar;