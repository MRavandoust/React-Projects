// Exemple 1
const Enfant = (props) => {

    console.log(props);

    return (
        <>
            <h1>{props.title}</h1>
        </>
    )
}

// Exemple 2
const Enfant2 = (props) => {
    /**
     * Ici on peut donc fait ça
     * const title = props.title
     * const prenom = props.prenom
     * Pour éviter de multiplier les déclarations
     * On Destructuration notre props
    */

    const { title, prenom } = props;

    return (
        <>
            <h1>{title} {prenom}</h1>
        </>
    )
}

// Exemple 3
const Enfant3 = ({ title, prenom }) => {
    return (
        <>
            <h1>{title} {prenom}</h1>
        </>
    )
}
export default Enfant3;