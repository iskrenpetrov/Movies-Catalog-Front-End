import React from 'react';
import axios from 'axios';
import Menu from "./Menu";
import Footer from "./Footer";
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Styles from './styles.css';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

class Create extends React.Component{
    state = {name:""}
    handleChange=(event)=>{
        this.setState({name:event.target.value});
    }
    handleSubmit=()=>{
        const url = "http://localhost:8080/categories";
        axios.post(url,{id:0, name: this.state.name})
            .then(response=>{
            console.log("Item added");
            })
            .catch(error=>{console.log(error)})

    }
    render(){
        return (
            <div>
                <div alt="menu">
                    <Menu />
                </div>
                <Grid item xs={6} class="grid">
                    <h2>Create a new category</h2>
                    <TextField id="outlined-basic" label="Type here" variant="outlined" value={this.state.name} onChange={this.handleChange} required />
                        <div class="submitButton">
                            <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                                Submit
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
