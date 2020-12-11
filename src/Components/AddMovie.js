import React from 'react';
import axios from 'axios';
import Menu from "./Menu";
import Footer from "./Footer";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Styles from './styles.css';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {Link} from "react-router-dom";


class Create extends React.Component{
    state = {name:"",description:"",category:""}
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            category:'',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (evt, field) {
        // check it out: we get the evt.target.name (which will be either "email" or "password")
        // and use it to target the key on our `state` object with the same name, using bracket syntax
        this.setState({ [field]: evt.target.value });
    }

    handleSubmit=()=>{
        const url = `http://localhost:8080/categories/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}/movies`;
        axios.post(url,{id:0, name: this.state.name, description: this.state.description, category: this.state.category})
            .then(response=>{
                console.log("Item added");
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
                    <h2>Add movie</h2>
                    <p><input class="pillChange" value={this.state.name} onChange={(event)=>this.handleChange(event, "name")}></input></p>
                    <p><TextareaAutosize class="textarea" value={this.state.description} onChange={(event)=>this.handleChange(event, "description")}/></p>
                    <div className="submitButton">
                        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                            Submit
                        </Button></div>
                    <div className="submitButton">
                        <Button variant="contained" color="secondary">
                            <Link to={"/"+this.props.match.params.id+"/movies"}>Back</Link>
                        </Button></div>
                </Grid>
                <div alt="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Create;
