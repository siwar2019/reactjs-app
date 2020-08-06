import React, { Component } from 'react';
import axios from "axios";
class DataTable extends Component {
    handleDelete = () => {
        axios.delete("/delete/" + this.props.obj.id)
            .then(res => {
                console.log(res.data);
            })
    }
    render() {
        //style css
        const button = {
            color: "black",
            backgroundColor: "#ff0000",

            fontFamily: "Arial",


        };
        return (
            <tr>
                <td>  {this.props.obj.id}   </td>

                <td> {this.props.obj.filePath} </td>


                <td> {this.props.obj.email} </td>

                {/* //lahna yjib l'image men uploads selon esem image betbi3a ; bach ya3ref enahi limage b thabte   */}
                <td>
                    <img height="130" width="130" src={"/uploads/" + this.props.obj.image} />
                </td>

                <td>

                    <video height="130" width="130" src={"/uploads/" + this.props.obj.video} /> lahna, deja lazem nraj3ou url
                </td>
                <td>  {this.props.obj.description} </td>
                <td>  {this.props.obj.incident_type} </td>
                <td>  {this.props.obj.position} </td>

                <td >
                    <form onSubmit={this.handleEditSubmit}>
                        <button style={button} type="submit" value={this.props.obj.id} onClick={this.handleDelete}>Delete</button>
                    </form>
                </td>
                {/* <td>
                    <form onSubmit={this.handleSubmit}>
                        <button type="submit" value={this.props.obj.id} onClick={e => this.onClick(e)}>Download </button>
                    </form>
                </td> */}
            </tr>
        );
    }
}

export default DataTable;