import React from 'react';
import axios from "axios";

class UserCard extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            // isLodad est faux tant que l'appel n'est pas terminé
            isLoaded: false,
            utilisateurs : [],
        }
        this.callUserApi = this.callUserApi.bind(this);

    }
    componentDidMount() {
        this.callUserApi();
    }

    callUserApi() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function(response) {
                const utilisateurs = response.data;
                this.setState({
                    utilisateurs : utilisateurs,
                    isLoaded: true
                })
            })
    }



    render() {
        if(!this.state.isLoaded){
            return (
                <div>
                    En Cours
                    <button onClick={this.callUserApi}>Rechercher</button>
                </div>
            )
        }

        return (
            <div>
                {this.state.user}
            </div>
        )

    }

}

export default (UserCard);
