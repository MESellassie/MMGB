import React from "react";
import API from "../utils/API";

class Sidebar extends Component {
    state = {
        result: {}
    };

    componentDidMount(){
        const query = "Joker";
        API.random(query)
            .then(poop => console.log(poop))
            .catch(err => console.log(err));
    }

    // randomMovies = query => {
    //     API.random(query)
    //     .then(res => this.setState({result: res.data}))
    //     .catch(error => console.log(error));
    // };

    // randomArtists = query => {
    //     API.random(query)
    //     .then(res => this.setState({result: res.data}))
    //     .catch(error => console.log(error));
    // }

    // randomGame = query => {
    //     API.random(query)
    //     .then(res => this.setState({result: res.data}))
    //     .catch(error => console.log(error));
    // }

    // randomBook = query => {
    //     API.random(query)
    //     .then(res => this.setState({result: res.data}))
    //     .catch(error => console.log(error));
    // }


    // handleInputChange = event => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     this.setState({
    //       [name]: value
    //     });
    //   };

//Sidebar(props){
    render() {
        return (
            <div>hello</div>
        );
    };
    
};

export default Sidebar;