import React, { Component } from 'react';
import axios from "axios"


class DataTable2 extends Component {
  handleDelete = () => {
    axios.delete("http://192.168.43.41:5000/delete/" + this.props.obj.id)
        .then(res => {
            console.log(res.data);
        })
}
confiant = () => {
  axios.post("http://192.168.43.41:5000/confiantuser2/" + this.props.obj.id)
      .then(res => {
          console.log(res.data);
      })
}
   /*  handleDelete = ()=>{
     //5ater 3andi proxy 
                 axios.delete("/delete/"+this.props.obj.id)
                 .then(res => {
                   console.log(res.data);
                 
                 })
    }
 */
    
    render() {
      const button = {
        
      color: "black",
      backgroundColor: "#ff0000",
     
      fontFamily: "Arial",
        
   
      };
        return (
            <tr>
                <td>  {this.props.obj.id}   </td>
                
                <td> {this.props.obj.email} </td>
                
                 <td>  {this.props.obj.firstname} </td>
                 <td>  {this.props.obj.lastname} </td>
                 <td>  {this.props.obj.address} </td>
                 <td>  {this.props.obj.tel} </td>
                 <td >
                    <form onSubmit={this.handleEditSubmit}>
                        <button style={button} type="submit" value={this.props.obj.id} onClick={this.handleDelete}>Block</button>
                    </form>
                </td>
                <td >
                    <form onSubmit={this.handleEditSubmit}>
                        <button style={button} type="submit" value={this.props.obj.id} onClick={this.confiant}>Favoris</button>
                    </form>
                </td>
            </tr>
        );
    }
}

export default DataTable2;