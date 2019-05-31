import React, { Component } from 'react'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            film : []
        }
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=4f41e4c2&s=terror&plot=full')
        .then(response => response.json())
        .then(result => this.setState({ film : result.Search }))
    }
    render() {
        const films = (this.state.film).map((item, i) => {
            return (
                <div key={i} className="col-sm-4 col-md-3 margin-top">
                    <div className="card">
                        <img src={ item.Poster } className="card-img-top image-resize click" alt="cine"/>
                    </div>
                </div>
            )
        })

        return (
            <div className="col-9 table-container">
                <div className="head-films">
                    <h3>Last Films</h3>
                </div>
                <div id="films" className="films row">
                    { films }
                </div>
            </div>
        )
    }
}

export default Table