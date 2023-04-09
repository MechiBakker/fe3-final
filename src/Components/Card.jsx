import React from "react";
import { Link } from "react-router-dom";
import { useGlobalStates } from "./utils/global.context";

const Card = ({ name, username, id, favButton }) => {
	const { favsState, favsDispatch, theme} = useGlobalStates();

	const addFav = (fav) => {
		if(favsState.find(fav => fav.id === id)) {
			alert("The dentist has been already added");
		} else {
			console.log(fav);
			favsDispatch({type: "ADD_FAV", payload: fav});
			alert("The dentist has been correctly added");
		}
	};


  const preventLinkDefault = (e) => {
		if(e.target.tagName === "BUTTON") e.preventDefault();
	};

  return (
    <Link to={`/dentist/${id}`} onClick={preventLinkDefault}>
      <div className="card">
		<div className={theme}>
        <img src="./images/doctor.jpg" alt="dentist" width="100%"/>
        </div>
			<h2>{name}</h2>
        	<p>{username}</p>
			<p>ID : {id}</p>
		<button onClick={() => addFav({name, username, id})} className="favButton"> ⭐️ </button>
      </div>
    </Link>
  );
};

export default Card;