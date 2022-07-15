//Il faut importer useState en react Hook
import { useState } from "react";

const Counter = () => {
    /*
    useState est un hook qui permet d'ajouter le state local React à des fonctions composants : Il nous renvoie une paire de valeurs dans un tableau de 2 valeurs, récupéréé dans les variables entre crochets.

    Le premier élement est la valeur actuelle,
    et le deuxieme est une fonction qui permet de la modifier.

    Pour les crochets [] il s'agit de déstrcucturation sauf qu'ici ça s'appelle la décomposition parce qu'il s'agit d'un tableau et non d'un opbjet.
  */

const [counter, setCounter] = useState(0);

const handleChange = () =>{
    setCounter(counter + 1)
}
    return ( 
        <div>
        <h1> Counter </h1>
        <p>Counter : {counter}</p>
        {/* <button onClick={handleChange}>Incrémente</button> */}
        <button onClick={()=> setCounter(counter + 1)}>Incrémente</button>
        </div>
    )
}

export default Counter;