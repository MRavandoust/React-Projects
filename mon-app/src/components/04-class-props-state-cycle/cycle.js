import React from "react";

class Cycle extends React.Component{

    state = {
        title: "Life Cycle React"
    }

    /**
     * 
     */
    componentDidMount(){
        console.log("DidMount => ")
    }

    /**
     * 
     * @returns 
     */
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true
    }


    componentWillUnmount(){
        console.log("WillUnmount => " , 3)
    }



    handleChange = () => {
        this.setState({title: "Cycle de vie"})
    }


    render(){

        const {title} = this.state

        return(
            <div>
                <h1>{title}</h1>
                <button onClick={this.handleChange}>change title</button>
            </div>
        )
    }
}

export default Cycle