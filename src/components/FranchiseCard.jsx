import React from "react";
import disneyLogo from "../images/disneyLogo.png";
import marvelLogo from "../images/marvelLogo.png";
import starwarsLogo from "../images/starwarsLogo.png";
import pixarLogo from "../images/pixarLogo.png";
import ngLogo from "../images/ngLogo.png";

function FranchiseCard() {
  return (
    <div className="px-4 py-4 flex justify-between items-center">
      <div className="disney_card border flex items-center justify-center border-white w-1/5 mx-2 h-40 rounded-md bg-white">
        <img src={disneyLogo} className="w-4/5 m-auto" alt="" />
      </div>
      <div className="disney_card border flex items-center justify-center border-white w-1/5 mx-2 h-40 rounded-md bg-white">
        <img src={marvelLogo} className="w-4/5 m-auto" alt="" />
      </div>
      <div className="disney_card border flex items-center justify-center border-white w-1/5 mx-2 h-40 rounded-md bg-white">
        <img src={starwarsLogo} className="w-4/5 m-auto" alt="" />
      </div>
      <div className="disney_card border flex items-center justify-center border-white w-1/5 mx-2 h-40 rounded-md bg-white">
        <img src={pixarLogo} className="w-4/5 m-auto" alt="" />
      </div>
      <div className="disney_card border flex items-center justify-center border-white w-1/5 mx-2 h-40 rounded-md bg-white">
        <img src={ngLogo} className="w-4/5 m-auto" alt="" />
      </div>
    </div>
  );
}

export default FranchiseCard;
