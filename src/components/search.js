import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title : ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { value, name } = event.target
        this.setState({ 
            [name] : value
         })
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch('http://www.omdbapi.com/?apikey=4f41e4c2&s=' + this.state.title)
        .then(response => response.json())
        .then(result => {
            this.props.changeResult(result.Search)
        })
    }
    render() {
        return (
            <div className="col-3 search-container">
                <div className="side-head">
                    <h3 className="title-flax">NetFlax</h3>
                </div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Enter a title</label>
                        <input type="text" name="title" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Title"/>
                        <small className="form-text text-muted">Search your film favorites.</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
        )
    }
}

export default Search;