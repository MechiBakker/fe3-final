import Card from "../Components/Card";
import React from "react";
import { useGlobalStates } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentists, theme} = useGlobalStates();
 
  return (
    <main className={theme}>
      <h1>Home</h1>
      <div className='card-grid'>
      {dentists.map(dentist => (
					        <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} showFavButton={true}/>
				        )
              )}
      </div>
    </main>
  )
}

export default Home;