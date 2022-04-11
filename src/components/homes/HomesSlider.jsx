import React, {Component} from "react";
import PropTypes from "prop-types";
import HomesItem from "./HomesItem";

export default class HomesSlider extends Component{
    constructor(props) {
        super(props);
        this.state= {
            error: null,
            isLoaded: false,
            homes: []
        }
    }

    componentDidMount() {
        fetch("https://fe-student-api.herokuapp.com/api/hotels/popular")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        homes: result
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error
                    })
                }
            )
    }
    render() {
        const { error, isLoaded, homes } = this.state
        if (error) {
            return <h1>Error{error.message}</h1>
        } else if (!isLoaded) {
            return <h1>Loading</h1>
        } else {
            return(
                <div className="homes-row">
                    {homes.map((home) =>(
                        <HomesItem key={home.id} home={home}/>
                    ))}
                </div>
            )
        }
    }
}