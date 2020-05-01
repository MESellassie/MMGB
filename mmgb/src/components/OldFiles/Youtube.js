import React, {Component} from "react";
import YTSearch from "youtube-api-search";

const API_KEY = 'AIzaSyBnOrw7_mzdFCWJbAu4kaP8oGuguOOjTSA';

class App extends Component {

    state = {
        videos: [],
        selectedVideo: null,
        term: ""
    };
    
    videoSearch();

    componentDidMount() {
        this.videoSearch
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
              videos: videos,
              selectedVideo: videos[0]
             });
          });
    }

    render(){
        return (

        )
    }


}



