import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import Row from "./Row";
import Card from "./Card";
import Body from "./Body";
import { render } from "react-dom";
import OmdbAPI from "../../../utils/OmdbAPI";
import HappyResults from "../Results/HappyResults";
import rawgAPI from "../../../utils/rawgAPI";

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieResult: {},
            bookResult: {},
            gameResult: {},
            musicResult: {},
            page: "home",

        };
    }

    componentDidMount() {
        this.getMovie();
        this.getGame();
    }

    getMovie() {
        OmdbAPI.random()
            .then(res => {

                console.log(res.cover);
                console.log(res.data.Response);
                console.log(res.data);
                if (res.data.Response == "False" ||
                    (res.data.Language && !res.data.Language.toUpperCase().includes("ENGLISH"))) {
                    this.getMovie();
                }
                else {
                    this.setState({ movieResult: res.data });
                }
            })
            .catch(err => console.log(err));
    }

    getGame() {
        rawgAPI()

    }

    // getGame() {


    //     //do some stuff then setState once we get a response we like
    //     igdbAPI.getGame()
    //         .then(res => {
    //             console.log(res);
    //             //this.getGame()
    //         })
    //         .catch(err => console.log(err));
    // }

    //getBook() {
    //do some stuff then setState once we get a response we like
    // API.random()
    // .then(res => {
    //   console.log(res.data);

    // })
    // .catch(err => console.log(err));
    //}

    //  getMusic(){
    //do some stuff then setState once we get a response we like
    // API.random()
    //  .then(res => {
    //      console.log(res.data);

    //  })
    //  .catch(err => console.log(err));
    // }
    // handlePageChange = (page) => {
    //     this.setState({ page: page })
    // }

    render() {
        return (
            <Jumbotron>
                <Row>
                    {/* {this.state.page === 'home' && */}
                        <>
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
                            <Body
                                handlePageChange={this.handlePageChange}
                                page={this.state.page}></Body></>

                    {/* } */}
                </Row>
            </Jumbotron>
        );
    }
}

export default Sidebar;