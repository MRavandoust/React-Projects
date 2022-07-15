import React from "react";
import EnfanDeLifeCycleClass from "./enfantDeLifeCycleClass";

class LifeCycleClass extends React.Component {

    constructor(props) {
        /*
        super fait référence au constructeur de la class parent
        */
        super(props)

        this.state = {
            title: "Welcom"
        }
    }


    handleChange = (chaildData) => {
        this.setState({ title: chaildData })
    }

    render() {

        const { title } = this.state
        return (
            <div>
                <h1>{title}</h1>
                <EnfanDeLifeCycleClass
                    handleChange={this.handleChange}
                />
            </div>
        )
    }

}

export default LifeCycleClass