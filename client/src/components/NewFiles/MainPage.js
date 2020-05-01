// import React, { Component } from "react";
// import Container from "../NewFiles/pages/Container";
// import Row from "../NewFiles/pages/Row";
// import Col from "../NewFiles/pages/Col";
// // import Card from "../NewFiles/pages/Card";
// import Navbar from "../NewFiles/pages/Navbar";
// import Home from "../NewFiles/pages/Home";
// import Movies from "../NewFiles/pages/Movies";
// import Music from "../NewFiles/pages/Music";
// import Games from "../NewFiles/pages/Games";
// import Books from "../NewFiles/pages/Boooks";

// class MainPage extends Component {
//     state = {
//         currentPage: "Home"
//     };


//     handlePageChange = page => {
//         this.setState({ currentPage: page });
//     };


//     renderPage = () => {
//         if (this.state.currentPage === "Home") {
//             return <Home />;
//         } else if (this.state.currentPage === "Movies") {
//             return <Movies />;
//         } else if (this.state.currentPage === "Music") {
//             return <Music />;
//         } else if (this.state.currentPage === "Games") {
//             return <Games />;
//         } else {
//             return <Books />;
//         }
//     };

//     render() {
//         return (
//             <Container>
//                 <div>
//                     <Navbar
//                         currentPage={this.state.currentPage}
//                         handlePageChange={this.handlePageChange}
//                     />
//                     {this.renderPage()}
//                 </div>
//                 <Row>
//                     <Col>

//                     </Col>
//                 </Row>
//             </Container>
//         );
//     }
// }

// export default MainPage;
