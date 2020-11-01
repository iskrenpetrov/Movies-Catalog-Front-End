import React from 'react';
import axios from 'axios';


class Create extends React.Component{
    state = {name:""}
    handleChange=(event)=>{
        this.setState({name:event.target.value});
    }
    handleSubmit=()=>{
        const url = "http://localhost:8080/create-category";
        axios.post(url,{id:0, name: this.state.name})
            .then(response=>{
            console.log("Item added");
            })
            .catch(error=>{console.log(error)})

    }
    render(){
        return (
            <div>
                <input value={this.state.name} onChange={this.handleChange}></input>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default Create;
