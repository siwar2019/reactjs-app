import React, { Component } from 'react';
import axios from 'axios';
import DataTable2 from './DataTable2';

//incident+++ datatable2 .....interface users
export default class Incident extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }
    

    componentDidMount() {
        axios.get('/utilisateur')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable2() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable2 obj={data} key={i} />;
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
                            
                                <td rowSpan="2">Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable2()}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}