import { useState } from "react";

const Todo = () => {

    const [todo,setTodo] = useState({
        array: [],
        tache: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setTodo(todo => ({...todo, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        // on va ajouter un statut a nos taches
        const objet = {
            tache: todo.tache,
            isActive: true,
        }
        todo.array.push(objet)
        setTodo(todo => ({...todo, tache: '' }))
    }

    const deleteTache = (indexTache) => {
        const copyArr = [...todo.array]
        const newArr = copyArr.filter((tache, index) => {
            if(indexTache !== index) return tache
        })
        setTodo({array: newArr})
    }

    const isComplete = indexTache => {
        const taches = todo.array.filter((tache, index) => {
            if(indexTache === index){
                tache.isActive = !tache.isActive
            } return tache
        })

        
        setTodo({array: taches})

    }

    return(
        <>
            <h1>Todo List 🚀</h1>
            {todo.array.map((item, index) => {
                console.log(item.isActive)
                return(
                    <div key={index}>
                        <p className={item.isActive? '' : 'complete'} onClick={() => isComplete(index)} >{item.tache}</p>
                        <button onClick={() => deleteTache(index)}>Delete</button>
                    </div>
                )
            })}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="tache"
                    name="tache"
                    value={todo.tache}
                    onChange={handleChange}
                />
                <button>Valider</button>
            </form>
        </>
    )

}

export default Todo;