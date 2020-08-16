import React, { Component } from 'react';



class DataTableFavorite3 extends Component {

    
    render() {

        return (
            <tr Liste of confident users>
                <td>  {this.props.obj.id}   </td>
                
                <td> {this.props.obj.email} </td>
                
                 <td>  {this.props.obj.firstname} </td>
                 <td>  {this.props.obj.lastname} </td>
                 <td>  {this.props.obj.address} </td>
                 <td>  {this.props.obj.tel} </td>
                 <td>  {this.props.obj.isConfident} </td>
                 
                
            </tr>
        );
    }
}

export default DataTableFavorite3;