import React from 'react';
import axios from "axios";

class UserCard extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            // isLodad est faux tant que l'appel n'est pas terminé
            isLoaded: false,
            utilisateurs : null,
        }
    }
    componentDidMount() {
        axios.get('https://randomuser.me/api/')
        .then((response) => {
            const utilisateur = response.data;

            console.log(utilisateur.results[0]);
            this.setState({
                utilisateurs : utilisateur.results[0],
                isLoaded: true
            })


        })   
     }




    render() {
        if(!this.state.isLoaded){
            return (
                <div>
                    En Cours
                </div>
            )
        }

        return (
            <div>
                <img src={this.state.utilisateurs.picture.medium} alt="" />
                {this.state.utilisateurs.name.first} {this.state.utilisateurs.name.last}            
            </div>
        )

    }

}

export default (UserCard);
