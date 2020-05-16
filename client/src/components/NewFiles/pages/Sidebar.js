import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import Row from "./Row";
import Card from "./Card";
import Body from "./Body";
import { render } from "react-dom";
import OmdbAPI from "../../../utils/OmdbAPI";
import HappyResults from "../Results/HappyResults";
import rawgAPI from "../../../utils/rawgAPI";
import BooksAPI from "../../../utils/BooksAPI";
import happySeeds from "../pages/happyTitles";
import { Link } from "react-router-dom";

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieResult: {},
            bookResult: {},
            gameResult: {},
            musicResult: {},
            page: "home",
            book: {}

        };
    }

    componentDidMount() {
        this.getMovie();
        // this.getGame();
        this.getBook();
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

    // getGame() {
    //     rawgAPI()

    // }

    // getGame() {


    //     //do some stuff then setState once we get a response we like
    //     igdbAPI.getGame()
    //         .then(res => {
    //             console.log(res);
    //             //this.getGame()
    //         })
    //         .catch(err => console.log(err));
    // }

    
    getBook() {
        BooksAPI.random()
                .then(res => {
                    let book = res.data;
                    console.log(book);
                    if (res.data.Response == "False") {
                        this.getBook();
                    }
                    else {
                        this.setState({ book: book.items[0].volumeInfo.imageLinks.smallThumbnail})
                    } 

                    // this.setState({
                    //     book: book.image = book.items[0].volumeInfo.imageLinks.smallThumbnail,
                    // })
                    console.log(book.items[0].volumeInfo.title);
                    // I know this is giving me the thumbnail
                    console.log(book.items[0].volumeInfo.imageLinks.smallThumbnail)}
                    ) 
                }

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
                                <Card
                                    imageSrc={this.state.book}
                                ></Card>
                                <br></br>

                                <Link to={{
                                    pathname: `/results`,
                                    state: {
                                        movieTitle: this.state.movieResult.Title,
                                        movieImage: this.state.movieResult.Poster,
                                    }
                                    }}
                                    >
                                <Card
                                    title={this.state.movieResult.Title}
                                    imageSrc={this.state.movieResult.Poster}
                                ></Card>
                                </Link>
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