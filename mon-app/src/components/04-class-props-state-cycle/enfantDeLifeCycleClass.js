import React from "react";


class EnfanDeLifeCycleClass extends React.Component {

    handleSubmit = e =>{
        e.preventDefault();
        
        const value = e.target.title.value
        //console.log(this.props)
        this.props.handleChange(value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="new title" name="title" />
                    <button>Change Title</button>
                </form>

            </div>
        )
    }
}

export default EnfanDeLifeCycleClass