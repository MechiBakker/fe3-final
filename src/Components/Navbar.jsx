import React from "react";
import { Link } from "react-router-dom";
import { useGlobalStates } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme, changeTheme} = useGlobalStates();

  return (
    <div className='navig'>  
    <nav className={theme}>
    <h3>DH Dentist</h3> 
      <ul>
        <Link to="/">Home</Link> 
        <Link to="/contact">Contact</Link> 
        <Link to="/favs">Favs</Link> 
      {/* Aqui deberan agregar los links correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={changeTheme} className="themeButton">{theme === "light" ? "🌜" : "🌞"}</button>
      </ul>
      </nav>
    </div >
  )
}

export default Navbar