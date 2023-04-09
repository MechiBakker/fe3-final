import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const favs = JSON.parse(localStorage.getItem("favs")) || [];
	const { theme } = useGlobalStates();

  return (
    <div className={`favs ${theme}`}>
      <h1 className={theme}>Dentists Favs</h1>
      <div className="card-grid">
      {favs.map(dentist => (
					<Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}/>
				)
        )}
      </div>
    </div>
  );
};

export default Favs;
