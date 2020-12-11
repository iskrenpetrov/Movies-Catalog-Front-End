import React from 'react';
import axios from 'axios';
import Menu from "./Menu";
import Footer from "./Footer";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Styles from './styles.css';
import {Link} from "react-router-dom";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";


class EditMovie extends React.Component {
    state = {name:"", description:"",
        movie: {},
        categoryId:"",
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value

        });
    }
    componentDidMount(){
        const url = `http://localhost:8080/categories/${this.props.location.state.categoryId}/movies/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}`;
        console.log(url);
        axios.get(url)
            .then(response=>{
                this.setState({movie:response.data})
            })
            .catch(error=>{console.log(error)})
    }
    componentDidUpdate(){
        const url = `http://localhost:8080/categories/${this.props.location.state.categoryId}/movies/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}`;
        console.log(url);
        axios.get(url)
            .then(response=>{
                this.setState({movie:response.data})
            })
            .catch(error=>{console.log(error)})
    }

    handleSubmit=()=>{
        const url = `http://localhost:8080/categories/${this.props.location.state.categoryId}/movies/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}`;
        axios.put(url,{id:this.state.movie.id, name: this.state.name, description: this.state.description, category: this.state.movie.category})
            .then(response=>{

            })
            .catch(error=>{console.log(error)})

    }
    render(){
        let id = this.props.match.id;
        return (
            <div>
                <div alt="menu">
                    <Menu />
                </div>
                <Grid item xs={6} class="grid">
                    <h2>Edit movies' characteristics</h2>
                    <p><input name="name" value={this.state.name} class="pillChange" onChange={this.handleChange} placeholder={this.state.movie.name}></input></p>
                    <p><TextareaAutosize class="textarea" name="description" value={this.state.description} onChange={this.handleChange} placeholder={this.state.movie.description} /></p>
                    <div className="submitButton">
                        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                            Submit
                        </Button></div>
                    <div className="submitButton">
                        <Button variant="contained" color="secondary">
                            <Link to={"/"+this.props.location.state.categoryId+"/movies"}>Back</Link>
                        </Button></div>
                </Grid>
                <div alt="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default EditMovie;
