import React from 'react';
import axios from 'axios';


class EditMovie extends React.Component {
    state = {name:"", description:"",
        movie: {},
    }
    handleChange=(event)=>{
        this.setState({name:event.target.value, description:event.target.value});
    }
    componentDidMount(){
        const url = `http://localhost:8080/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}/movies/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}`;
        console.log(url);
        axios.get(url)
            .then(response=>{
                this.setState({movie:response.data})
            })
            .catch(error=>{console.log(error)})
    }
    componentDidUpdate(){
        const url = `http://localhost:8080/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}/movies/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}`;
        console.log(url);
        axios.get(url)
            .then(response=>{
                this.setState({movie:response.data})
            })
            .catch(error=>{console.log(error)})
    }
    handleSubmit=()=>{
        const url = `http://localhost:8080/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}/movies/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}/update`;
        axios.put(url,{id:this.state.movie.id, name: this.state.name, description: this.state.description})
            .then(response=>{

            })
            .catch(error=>{console.log(error)})

    }
    render(){
        let id = this.props.match.id;
        return (
            <div>
                <input value={this.state.name} onChange={this.handleChange} placeholder={this.state.movie.name}></input>
                <input value={this.state.description} onChange={this.handleChange} placeholder={this.state.movie.description}></input>
                <button onClick={this.handleSubmit}>Change</button>
            </div>
        );
    }
}

export default EditMovie;
