import { useContext, createContext, useState, useEffect, useReducer, useMemo } from "react";


export const initialState = { theme: "", data: [] };
export const ContextGlobal = createContext(undefined);
export const themes = {light: "light", dark: "dark"}



const reducer = (state, action) => {
  switch (action.type) {
		case "ADD_FAV":
			return [...state, action.payload]
		default:
			throw new Error();
  }
};

export const ContextProvider = ({ children }) => {

	const [dentists, setDentists] = useState([]);
	const [theme, setTheme] = useState(themes.light);
	const [favsState, favsDispatch] = useReducer(reducer, [], favsInit);

	function favsInit(initialState) {
		return JSON.parse(localStorage.getItem("favs")) || initialState;
	}

	useEffect(() => {
		localStorage.setItem("favs", JSON.stringify(favsState));
	}, [favsState])

	const themeValues = useMemo(() => ({
		theme,
		changeTheme: () => {
			if(theme === themes.light) setTheme(themes.dark);
			if(theme === themes.dark) setTheme(themes.light);
		}
	}), [theme])

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(data => setDentists(data))
			.catch(error => console.log(error));
	}, [])
	
  return (
		<ContextGlobal.Provider value={{dentists, ...themeValues, favsState, favsDispatch}}>
			{children}
		</ContextGlobal.Provider>
	);
};



export function useGlobalStates() {
  return useContext(ContextGlobal);
}