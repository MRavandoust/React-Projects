import { useState } from "react";

const Formulaire = () => {

  /*
    On crée des valeurs par defaut pour initialiser notre user. 
    Qui contiendra les données saisies par l'internaute.
  */
  const [user, setUser] = useState({
    prenom: "",
    password: ""
  })

  const handleChange = (event) => {
    /**
     * @Destructuration
     * Permet directement de déclarer une variable et 
     * de lui assigner la valeur d'une propriété d'un
     * objet.
     * @event.target
     * Contient notre balise input de ce fait on peut
     * s'en servir pour récupérer un attribut 
     * spécifique. On déstructure event.target pour 
     * récupérer l'attribut name ainsi que sa value
     */

    const { name, value } = event.target

    /**
     * @Spread (...)
     * Permet de déballer ou d'étendre des objets
     * et des itérables, un itérable et un objet
     * dont on peut parcourir les valeurs (tableaux)
     * qui peuvent être utilisées pour faire des copies
     * superficielles de structure de données afin
     * d'accroitre la facilité de la manipulation de 
     * des données.
     * [...array]
     * {...state}
     */
    setUser(user => ({...user, [name]: value }))
  }

  const checkEspace = (string) =>{
    return string.indexOf(' ') === -1
  }


  const hanldeSubmit = (e) =>{
    e.preventDefault()

    const prenom = checkEspace(user.prenom)

    if(prenom && user.prenom !== ""){
        console.log("Success => Name is ok")
    }else{
        console.log("Error => Name is required")
    }
    if(user.password.length < 8){
        console.log("Error => password est inferieur à 8 ")
    }else{
        console.log("Success => password ok")
    }

    
}



  return(
    <>
      <h1>Formulaire</h1>
      <form onSubmit={hanldeSubmit}>
        <label htmlFor="prenom">Prenom : </label>
        <input 
          type="text" 
          id="prenom"
          name="prenom"
          placeholder="prenom"
          onChange={handleChange}
        />
        <label htmlFor="password">Password : </label>
        <input 
          type="password" 
          id="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button>Valider</button>
      </form>
    </>
  )
}
export default Formulaire;