import React, { Component } from 'react';
import axios from 'axios';

import DataTableFavorite3 from './DataTableFavorite3';

//FAVAORITELIST+++DATATABLEFAVORITE3
export default class favoriteliste extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }
    

    componentDidMount() {
        axios.get('/favoriteliste')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    DataTableFavorite3() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTableFavorite3 obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Email</td>

                                <td>FirstName</td>
                                <td>LastName</td>
                                <td>Address</td>
                                <td>télephone Number</td>
                                <td>isConfident</td>
                            
                                
                            </tr>
                        </thead>
                        <tbody>
                            {this.DataTableFavorite3()}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}