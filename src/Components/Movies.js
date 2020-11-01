import React from 'react';
import axios from 'axios';


class Movies extends React.Component{
    state = {
        movies: [],

    }
    componentDidMount(){
        const url = `http://localhost:8080/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}/movies`;
        axios.get(url)
            .then(response=>{
                this.setState({movies:response.data})
            })
    }
    componentDidUpdate(){
        const url = `http://localhost:8080/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}/movies`;
        axios.get(url)
            .then(response=>{
                this.setState({movies:response.data})
            })
    }
    handleDeleteAll = () => {
        const url = `http://localhost:8080/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}/delete`;
        axios.delete(url)
            .then(response=>{
                console.log("All items were deleted succesfully !");
            })
    }
    handleDeleteById = id2 => {
        const url = `http://localhost:8080/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}/delete/`+id2;
        axios.delete(url)
            .then(response=>{
                console.log("Item no: " + id2 + " was deleted succesfully !");
            })
    }

    render(){
        let id = this.props.match.id;
        return (
            <div>
                <p><button onClick={this.handleDeleteAll}>Delete all </button></p>
                {this.state.movies.map(movie => <div key={movie.id}><h1>ID: {movie.id}
                    | Name: {movie.name} | Description: {movie.description}</h1><button onClick={()=>this.handleDeleteById(movie.id)} >Delete</button></div>)}
            </div>
        );
    }
}

export default Movies;
