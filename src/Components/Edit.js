import React from 'react';
import axios from 'axios';
import Menu from "./Menu";
import Footer from "./Footer";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Styles from './styles.css';
import {Link}
 from "react-router-dom";


class Edit extends React.Component {
    state = {name:"",
        category: {},
    }
    handleChange=(event)=>{
        this.setState({name:event.target.value});
    }
    componentDidMount(){
        const url = `http://localhost:8080/categories/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}`;
        console.log(url);
        axios.get(url)
            .then(response=>{
                this.setState({category:response.data})
            })
            .catch(error=>{console.log(error)})
    }
    componentDidUpdate(){
        const url = `http://localhost:8080/categories/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}`;
        console.log(url);
        axios.get(url)
            .then(response=>{
                this.setState({category:response.data})
            })
            .catch(error=>{console.log(error)})
    }
    handleSubmit=()=>{
        const url = `http://localhost:8080/categories/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}`;
        axios.put(url,{id:this.state.category.id, name: this.state.name})
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
                <Grid  class="grid">
                    <h2>Edit category's name</h2>
                    <input value={this.state.name} class="pillChange" onChange={this.handleChange} placeholder={this.state.category.name}></input>
                    <div class="submitButton">
                        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                            Submit
                        </Button></div>
                    <div className="submitButton">
                        <Button variant="contained" color="secondary" >
                            <Link to="/">Back</Link>
                        </Button></div>
                </Grid>
                <div alt="footer">
                    <Footer />
                </div>
                </div>
        );
    }
}

export default Edit;
