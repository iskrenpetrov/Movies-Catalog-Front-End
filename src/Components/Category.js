import React from 'react';
import axios from 'axios';
import Movies from './Movies';


class Category extends React.Component{
    state = {
        category: {},
    }
    componentDidMount(){
        const url = `http://localhost:8080/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}`;
        console.log(url);
        axios.get(url)
            .then(response=>{
                this.setState({category:response.data})
            })
            .catch(error=>{console.log(error)})
    }
    componentDidUpdate(){
        const url = `http://localhost:8080/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}`;
        console.log(url);
        axios.get(url)
            .then(response=>{
                this.setState({category:response.data})
            })
            .catch(error=>{console.log(error)})
    }
    render(){
        let id = this.props.match.id;
        return (
            <div>
                <h1>ID: {this.state.category.id}</h1>
                <h1>Name: {this.state.category.name}</h1>
            </div>
        );
    }
}

export default Category;
