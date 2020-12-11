import React from 'react';
import axios from 'axios';
import Menu from "./Menu";
import Footer from "./Footer";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './styles.css';
import Divider from '@material-ui/core/Divider';


class EditMovie extends React.Component {
    state = {name:"", description:"",
        movie: {},
        categoryId:"",
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
    render(){
        let id = this.props.match.id;
        return (
            <div>
                <div alt="menu">
                    <Menu />
                </div>
                <div class="paper">
                    <h1>{this.state.movie.name}</h1>
                    <Divider class="divider"/>
                    <h4>Description</h4>
                    {this.state.movie.description}
                </div>
                <div alt="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default EditMovie;
