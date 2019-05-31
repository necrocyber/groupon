import React, { Component } from 'react'
import { FaStar } from 'react-icons/fa';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            film : [],
            favorites : []
        }
    }

    favoritesClick(film) {
        const Favorites = this.state.favorites;
        Favorites.push(film)
        this.setState({ favorites: Favorites })
        // Save in LocalStorage
        localStorage.setItem('Film', this.state.favorites)
    }

    getFavorites() {
        console.log("Favorites!!!")
        this.setState({ film: this.state.favorites })
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
                        <img src={ item.Poster } className="card-img-top image-resize" alt="cine"/>
                        <div className="card-footer">
                            <FaStar onClick={this.favoritesClick.bind(this, item)} className="icon-start" />
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="col-9 table-container">
                <div className="head-films">
                    <h3>Last Films</h3><span onClick={this.getFavorites.bind(this)}>Favorites</span>
                </div>
                <div id="films" className="films row">
                    { films }
                </div>
            </div>
        )
    }
}

export default Table