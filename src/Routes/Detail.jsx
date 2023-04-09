import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobalStates } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const params = useParams();
  const [dentist, setDentist] = useState({});
  const navigate = useNavigate();
  const { theme } = useGlobalStates();
  
 
 
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) => console.log(error));
  }, [params.id]);

  
  return (
    <div className={`details ${theme}`}>
        <h1>Detail Dentist {dentist.id}</h1>
           <table>
              <thead><tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website</th>
              </tr></thead>
              <tbody><tr>
                  <td>{dentist.name}</td>
                  <td>{dentist.email}</td>
                  <td>{dentist.phone}</td>
                  <td>{dentist.website}</td>
              </tr></tbody>
           </table>

			<button onClick={() => 	navigate(-1)} className="backButton">Back</button>
      
    </div>
  );
};

export default Detail;
