import React from "react";
import Row from "./Row";
import Container from "./Container";

function MoodCards() {
    return (
        // <div className="moodContainer">

        //     <div className="movieCardWrapper">MOVIES
        //         <div className="movieBox1">MOVIE 1</div>
        //         <div className="movieBox2">MOVIE 2</div>
        //         <div className="movieBox3">MOVIE 3</div>
        //         <div className="movieBox4">MOVIE 4</div>
        //     </div>

        //     <div className="musicCardWrapper">MUSIC
        //         <div className="musicBox1">MUSIC 1</div>
        //         <div className="musicBox2">MUSIC 2</div>
        //         <div className="musicBox3">MUSIC 3</div>
        //         <div className="musicBox4">MUSIC 4</div>
        //     </div>

        //     <div className="gamesCardWrapper">GAMES
        //         <div className="gamesBox1">GAMES 1</div>
        //         <div className="gamesBox2">GAMES 2</div>
        //         <div className="gamesBox3">GAMES 3</div>
        //         <div className="gamesBox4">GAMES 4</div>
        //     </div>

        //     <div className="booksCardWrapper">BOOKS
        //         <div className="booksBox1">BOOKS 1</div>
        //         <div className="booksBox2">BOOKS 2</div>
        //         <div className="booksBox3">BOOKS 3</div>
        //         <div className="booksBox4">BOOKS 4</div>
        //         <div className="booksBox4">BOOKS 4</div>

        //     </div>
        // </div>
        // ==================================================
        // <div>
        // <div className="movieContainer container col-sm-6">
        //     <div className="row row-cols-1 row-cols-md-2">
        //         <div className="col mb-4">
        //             <div className="card">
        //                 <img src="..." class="card-img-top" alt="..."></img>
        //                 <div className="card-body">
        //                     <h5 className="card-title">MOVIE</h5>
        //                     <p className="card-text">MOVIE</p>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="col mb-4">
        //             <div className="card">
        //                 <img src="..." class="card-img-top" alt="..."></img>
        //                 <div className="card-body">
        //                     <h5 className="card-title">MOVIE</h5>
        //                     <p className="card-text">MOVIE</p>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="col mb-4">
        //             <div className="card">
        //                 <img src="..." class="card-img-top" alt="..."></img>
        //                 <div className="card-body">
        //                     <h5 className="card-title">MOVIE</h5>
        //                     <p className="card-text">MOVIE</p>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="col mb-4">
        //             <div className="card">
        //                 <img src="..." class="card-img-top" alt="..."></img>
        //                 <div className="card-body">
        //                     <h5 className="card-title">MOVIE</h5>
        //                     <p className="card-text">MOVIE</p>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </div>

        //  <div className="musicContainer container col-sm-6">
        //      <div className="row row-cols-1 row-cols-md-2">
        //          <div className="col mb-4">
        //              <div className="card">
        //                  <img src="..." class="card-img-top" alt="..."></img>
        //                  <div className="card-body">
        //                      <h5 className="card-title">MUSIC</h5>
        //                      <p className="card-text">MUSIC</p>
        //                  </div>
        //              </div>
        //          </div>

        //          <div className="col mb-4">
        //              <div className="card">
        //                  <img src="..." class="card-img-top" alt="..."></img>
        //                  <div className="card-body">
        //                      <h5 className="card-title">MUSIC</h5>
        //                      <p className="card-text">MUSIC</p>
        //                  </div>
        //              </div>
        //          </div>

        //          <div className="col mb-4">
        //              <div className="card">
        //                  <img src="..." class="card-img-top" alt="..."></img>
        //                  <div className="card-body">
        //                      <h5 className="card-title">MUSIC</h5>
        //                      <p className="card-text">MUSIC</p>
        //                  </div>
        //              </div>
        //          </div>

        //          <div className="col mb-4">
        //              <div className="card">
        //                  <img src="..." class="card-img-top" alt="..."></img>
        //                  <div className="card-body">
        //                      <h5 className="card-title">MUSIC</h5>
        //                      <p className="card-text">MUSIC</p>
        //                  </div>
        //              </div>
        //          </div>

        //      </div>
        //  </div>

        //  </div>
        //  ================================================
        <div className="moodCardContainer container col-md-6 shadow">
            <div className="row row-cols-1 row-cols-md-2">
                <a href="#" className="moodCardLink">
                <div className="col mb-4" id="card1">
                    <div className="card">
                        <img src="" class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">MOVIE</h5>
                            <p className="card-text">info:</p>
                        </div>
                    </div>
                </div>
                </a>

                <a href="#" className="moodCardLink">
                <div className="col mb-4" id="card2">
                    <div className="card">
                        <img src="..." class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">MUSIC</h5>
                            <p className="card-text">info:</p>
                        </div>
                    </div>
                </div>
                </a>

                <a href="#" className="moodCardLink">
                <div className="col mb-4" id="card3">
                    <div className="card">
                        <img src="..." class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">GAMES</h5>
                            <p className="card-text">info:</p>
                        </div>
                    </div>
                </div>
                </a>

                <a href="#" className="moodCardLink">
                <div className="col mb-4" id="card4">
                    <div className="card">
                        <img src="..." class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">BOOKS</h5>
                            <p className="card-text">info:</p>
                        </div>
                    </div>
                </div>
                </a>

            </div>
        </div>

    )
}
export default MoodCards;
