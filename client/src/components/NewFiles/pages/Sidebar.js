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
        movieResult: {},
        bookResult: {},
        gameResult: {},
        musicResult: {}
    };
    }

    componentDidMount(){
        this.getMovie();
    }

    getMovie() {
        API.random()
            .then(res => {
                console.log(res.data.Response);
                console.log(res.data);
                if ( res.data.Response == "False" ||
                    (res.data.Language && !res.data.Language.toUpperCase().includes("ENGLISH") ) ) 
                    this.getMovie();
                else {
                    this.setState({movieResult: res.data});
                }
            })
            .catch(err => console.log(err));
    }

    getGame(){
        //do some stuff then setState once we get a response we like
        API.random()
            .then(res => {
                console.log(res.data);
                this.getGame();
            })
            .catch(err => console.log(err));
    }

    getBook() {
        //do some stuff then setState once we get a response we like
        API.random()
        .then(res => {
            console.log(res.data);

        })
        .catch(err => console.log(err));
    }

    getMusic(){
        //do some stuff then setState once we get a response we like
        API.random()
        .then(res => {
            console.log(res.data);

        })
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

                     <Card 
                        title={this.state.movieResult.Title}
                        imageSrc={this.state.movieResult.Poster}
                     ></Card>
                         
                    </div>
                    <Body></Body>
                    
                </Row>
                
            </Jumbotron>
        );
    }
}

export default Sidebar;