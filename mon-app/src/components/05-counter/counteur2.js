import { useState } from "react";

const Counteur2 = () => {

    const [counter, setCounter] = useState(0);
    const [interval, setIntervall] = useState(0);




    const start = () => {
        const id = setInterval(() => {
            setCounter(counter => counter + 1);
        }, 1000);
        setIntervall(id)

    }

    const stop = () => {
        clearInterval(interval)
    }

    const reset = () => {
        stop()
        setCounter(0)
    }


    return (
        <div>
            <h1>Counter</h1>
            <div className="App">
                {counter} {/* 2) -  On afficher notre state counter */}
                <button onClick={start}>Start</button> {/*  3) -  On crée le button pour start pour lancer notrer counter avec l'event onClick  */}
                <button onClick={stop}>Stop</button> {/*  6) -  On crée le button pour stop pour stopper counter avec l'event onClick  */}
                <button onClick={reset}>Reset</button> {/*  9) -  On crée le button pour stop pour stopper counter avec l'event onClick  */}
            </div>
        </div>
    )
}

export default Counteur2