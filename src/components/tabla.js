import React, { Component } from 'react'
import { FaStar } from 'react-icons/fa';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            film : []
        }

    }

    favoritesClick(film) {
        const getFilm = JSON.parse(localStorage.getItem('Film'));
        const local = (getFilm) ? JSON.parse(localStorage.getItem('Film')) : []
        local.push(film)
        localStorage.setItem('Film', JSON.stringify(local))
    }

    getFavorites() {
        const local = JSON.parse(localStorage.getItem('Film'))
        if(local) { this.setState({ film: local }) }
        else { this.setState({ film: [] }) }
        
    }

    componentWillReceiveProps(newProps) {
        this.setState({ film: newProps.NewResult })
    }


    render() {
        
        const films = (this.state.film).map((item, i) => {
            return (
                <div key={i} className="col-sm-4 col-md-3 margin-top">
                    <div className="card">
                        <img src={ item.Poster } className="card-img-top image-resize" alt="cine"/>
                        <div className="card-footer">
                            <span>{ item.Year }</span><FaStar onClick={this.favoritesClick.bind(this, item)} className="icon-start" />
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