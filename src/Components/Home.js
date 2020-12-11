import React from 'react';
import axios from 'axios';
import Menu from './Menu';
import Footer from './Footer';
import styles from './styles.css';
import {
Link
} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "./Drawer";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';


class Home extends React.Component{
    state = {
        categories: [],

    }
    componentDidMount(){
        const url = "http://localhost:8080/categories";
        axios.get(url)
            .then(response=>{
                this.setState({categories:response.data})
            })
    }
    componentDidUpdate(){
        const url = "http://localhost:8080/categories";
        axios.get(url)
            .then(response=>{
                this.setState({categories:response.data})
            })
    }
    handleDeleteAll = () => {
        const url = "http://localhost:8080/categories";
        axios.delete(url)
            .then(response=>{
                console.log("All items were deleted succesfully !");
            })
    }
    handleDeleteById = id => {
        const url = "http://localhost:8080/categories/"+id;
        axios.delete(url)
            .then(response=>{
                console.log("Item no: " + id + " was deleted succesfully !");
            })
    }

    Table() {
        let table =
            <div alt="Table">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Category name</th>
                        <th>List</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                        {this.state.categories.map(category =>
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td> {category.name} </td>
                                <td>
                                    <button variant="outlined"><Link to={"/" + category.id + "/movies"}>Movies</Link></button>
                                </td>
                                <td>
                                    <button variant="outlined"><Link to={"/" + category.id + "/edit-category"}>Edit</Link></button>
                                </td>
                                <td>
                                    <button onClick={() => this.handleDeleteById(category.id)}>Delete</button>
                                </td>
                            </tr>
                        )}
                </table>
            </div>;
        return table;
    }


    render(){
        return (
            <div>
                <div alt="menu">
                    <Menu />
                </div>
                <p><Button variant="outlined" onClick={this.handleDeleteAll}>Delete all</Button></p>
                {this.Table()}
                <div alt="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;