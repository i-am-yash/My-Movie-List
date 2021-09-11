import React from 'react';
import './index.css';
const Card=()=>{
    return (
     <>
     <div className="cards">
        <div className="card">
            <div className="card_imgdiv">
             <img src="https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg" alt="error"/>

              </div>
             <div className="card_info">
                 <h1>Breaking Bad</h1>

             </div>
        </div>

        <div className="card">
         <div className="card_imgdiv">
          <img src="https://upload.wikimedia.org/wikipedia/en/e/e8/Game_of_Thrones_Season_1.jpg" alt="error"/>
             
        </div>
        <div className="card_info">
        <h1>Game of Thrones</h1>

        </div>
        </div>

        <div className="card">
             <div className="card_imgdiv">
             <img src="https://cdn.europosters.eu/image/1300/posters/naruto-shippuden-i84239.jpg" alt="error"/>
        </div>
        <div className="card_info">
        <h1>Naruto Shippuden</h1>

        </div>
        </div>

        <div className="card">
          <div className="card_imgdiv">
             <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png" alt="error"/>
             
          </div>
         <div className="card_info">
            <h1>Stranger Things</h1>

            </div>
        </div>

        <div className="card">
          <div className="card_imgdiv">
         
             <img src="https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg" alt="error"/> 
            </div>
         <div className="card_info">
             <h1>Shawshank Redemption</h1>

        </div>
        </div>
     </div>
   
         
         
    </>
    );
}
export default Card;