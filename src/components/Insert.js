import React, { Component } from 'react';
import axios from 'axios';
import DataTable from '../components/DataTable';

export default class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        axios.get('http://192.168.43.41:3000/utilisateur')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
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
                                <td>Name</td>
                                <td>Email</td>
                                <td>img</td>
                                <td rowSpan="2">Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}