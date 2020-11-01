import React from 'react';
import axios from 'axios';


class Home extends React.Component{
    state = {
        categories: [],

    }
    componentDidMount(){
        const url = "http://localhost:8080/";
        axios.get(url)
            .then(response=>{
                this.setState({categories:response.data})
            })
    }
    componentDidUpdate(){
        const url = "http://localhost:8080/";
        axios.get(url)
            .then(response=>{
                this.setState({categories:response.data})
            })
    }
    handleDeleteAll = () => {
        const url = "http://localhost:8080/delete";
        axios.delete(url)
            .then(response=>{
                console.log("All items were deleted succesfully !");
            })
    }
    handleDeleteById = id => {
        const url = "http://localhost:8080/delete/"+id;
        axios.delete(url)
            .then(response=>{
                console.log("Item no: " + id + " was deleted succesfully !");
            })
    }

    render(){
        return (
            <div>
                <p><button onClick={this.handleDeleteAll}>Delete all </button></p>
                {this.state.categories.map(category => <div key={category.id}><h1>ID: {category.id}
                    | Name: {category.name} </h1><button onClick={()=>this.handleDeleteById(category.id)} >Delete</button></div>)}
            </div>
        );
    }
}

export default Home;
