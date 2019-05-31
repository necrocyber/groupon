import React, { Component } from 'react';

class Search extends Component {


    searchFilm(e) {
        e.preventDefault()
        console.log(e)
    }
    render() {
        return (
            <div className="col-3 search-container">
                <div className="side-head">
                    <h3 className="title-flax">NetFlax</h3>
                </div>
                <form onSubmit={this.searchFilm}>
                    <div className="form-group">
                        <label>Enter a title</label>
                        <input type="text" className="form-control" placeholder="Title"/>
                        <small className="form-text text-muted">Search your film favorites.</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
        )
    }
}

export default Search;