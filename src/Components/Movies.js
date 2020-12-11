import React from 'react';
import axios from 'axios';
import {
Link
} from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";
import styles from './styles.css';


class Movies extends React.Component{
    state = {
        movies: [],

    }
    componentDidMount(){
        const url = `http://localhost:8080/categories/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}/movies`;
        axios.get(url)
            .then(response=>{
                this.setState({movies:response.data})
            })
    }
    componentDidUpdate(){
        const url = `http://localhost:8080/categories/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}/movies`;
        axios.get(url)
            .then(response=>{
                this.setState({movies:response.data})
            })
    }
    handleDeleteAll = () => {
        const url = `http://localhost:8080/categories/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}/movies`;
        axios.delete(url)
            .then(response=>{
                console.log("All items were deleted succesfully !");
            })
    }
    handleDeleteById = id2 => {
        const url = `http://localhost:8080/categories/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}/movies/`+id2;
        axios.delete(url)
            .then(response=>{
                console.log("Item no: " + id2 + " was deleted succesfully !");
            })
    }



    Table() {
        let id = this.props.match.id;
        const passCategoryId = `/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}/movies/`;

        let table =
            <div alt="Table">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>View</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {this.state.movies.map(movie=>
                        <tr key={movie.id}>
                            <td>{movie.id}</td>
                            <td> {movie.name} </td>
                            <td>
                                <button><Link to={{pathname:passCategoryId+movie.id, state:{categoryId: this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}}}>View movie</Link></button>
                            </td>
                            <td>
                                <button><Link to={{pathname:passCategoryId+movie.id+"/update", state:{categoryId: this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}}}>Edit movie</Link></button>
                            </td>
                            <td>
                                <button onClick={()=>this.handleDeleteById(movie.id)} >Delete</button>
                            </td>
                        </tr>
                    )}
                </table>
            </div>;
        return table;
    }

    render(){
        let id = this.props.match.id;
        const passCategoryId = `/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}/add-movie`;
        return (
            <div>
                <div alt="menu">
                    <Menu />
                </div>
                <p><button><Link to={{pathname:passCategoryId, state:{categoryId: this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}}}>Add movie</Link></button></p>
                <p><button onClick={this.handleDeleteAll}>Delete all </button></p>
                {this.Table()}
                <div alt="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Movies;
