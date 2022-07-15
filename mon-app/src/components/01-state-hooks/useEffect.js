import { useState, useEffect } from "react";


const LifeCycle = () => {

/* 
    Créer un state prix et total avec une valeur définit

    GÉNÉRER un button pour prix et total qui nous permettrons de les incrémenter de cinq à chaque clique.

    rajouter ensuite le hook useEffect qui s'active 
    uniquement quand la valeur de total change et non du prix, 
    cette function doit contenir une alert pour prévenir du changement de valeur Exemple alert('J'aurai {total}Є à payer ')

    Exemple alert('J'aurai {total}€ à payer' )
 */

    const [prix, setPrix] = useState(10);
    const [total , setTotal] = useState(20);

    /*
        UseEffect
        Il nous permette d'effectuer une action à un moment donné de cycle de vie de nos composants.

        UseEffect nous permet d'effectuer notre effet une fois le rendiu du composant terminé.

         Et comme useEffect est directement dans notre composant, nous avons directement accès à notre state, à nos variables, nos props.

        Pour décider précisément quand on veut déclencher un effet, on peut utiliser le tableau de dépendances. Il correspond au deuxième pramètre passé à useEffect.
    */

    /*
        Dans notre cas, si je veut que l'alert ne s'affiche que lorsque le total change, il me soufit d'ajouter un tableau de dépandance;
    */

    // (1)
    useEffect(()=>{
        if(total > 20)
        alert(`Total : ${total} à payer `)
    }, [total])

    // (2)
    //useEffect(()=>{
    //     alert(`Total : ${total} à payer `)
    // }, [total])

    // (3)
    //Si vous voulez executer uniqement apres le premier rendr de mon composant, il faut tout simplement renseigner un tableau de dépendance vide.
    // useEffect(()=>{
    //     alert(`Welcom !`)
    // }, [])

    return(
        <div>
            <h1> LifeCycle </h1>
        <p>Prix : {prix}</p>
        <p>Total : {total}</p>

        <button onClick={()=> setPrix(prix + 5)}>Incrémente Prix</button>
        <button onClick={()=> setTotal(total + 5)}>Incrémente total</button>

        </div>
    )
}

export default LifeCycle;