import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import Row from "./Row";
import Card from "./Card";
import Body from "./Body";
import { render } from "react-dom";
import API from "../../../utils/OmdbAPI";

    // state = {
    //     result: {}
    // };

  
    // componentDidMount(){
    // //     const query = "Joker";
    // //     API.random(query)
    // //         .then(props => console.log(props))
    // //         .catch(err => console.log(err));
    //     console.log("this is working");
    //  }


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
    
    constructor(props) {
        super(props);
        this.state = {
        result: {}
    };
    }

    componentDidMount(){
        const query = "Joker";
        API.random(query)
            .then(res => console.log("This is poop:" + res))
            .catch(err => console.log(err));
    }

    render(){
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
                     <Card>{this.props.children}</Card>
                         
                    </div>
                    <Body></Body>
                    
                </Row>
                
            </Jumbotron>
        );
    }
}

export default Sidebar;