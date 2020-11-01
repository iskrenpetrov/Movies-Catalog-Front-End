import React from 'react';
import axios from 'axios';


class Edit extends React.Component {
    state = {name:"",
        category: {},
    }
    handleChange=(event)=>{
        this.setState({name:event.target.value});
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
    handleSubmit=()=>{
        const url = `http://localhost:8080/${this.props.match ? this.props.match.params.id : this.props.computedMatch.params.id}/update`;
        axios.put(url,{id:this.state.category.id, name: this.state.name})
            .then(response=>{

            })
            .catch(error=>{console.log(error)})

    }
    render(){
        let id = this.props.match.id;
        return (
            <div>
                <input value={this.state.name} onChange={this.handleChange} placeholder={this.state.category.name}></input>
                <button onClick={this.handleSubmit}>Change</button>
            </div>
        );
    }
}

export default Edit;
