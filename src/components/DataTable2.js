import React, { Component } from 'react';
import axios from "axios"


class DataTable2 extends Component {
  
    
    handleDelete = ()=>{
                 axios.delete("/delete/"+this.props.obj.id)
                 .then(res => {
                   console.log(res.data);
                 
                 })
    }

    
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
             
                  <button style={button} value= {this.props.obj.id} onClick={this.handleDelete} >Block</button>              </td>
              <td>
              {/*  <form >
                  <button type="submit" value= {this.props.obj.id} onClick={e => this.onClick(e)}>Confident</button>
              </form> */}
          
                </td>
            </tr>
        );
    }
}

export default DataTable2;