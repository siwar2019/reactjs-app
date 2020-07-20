import React, { Component } from 'react';
class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
               
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.password}
                </td>
               
               
{/*                <td> <img src = {require("C:/Users/ACER/reportApp-backend/public/uploads/{this.props.obj.image}")}></img></td>
 */}{/*               
 */}                     
        <td>
          <img  src ={"http://192.168.43.41:3001/uploads/"+this.props.obj.image}/>
          </td>       
                <td > 
                <form onSubmit={this.handleEditSubmit}>
                  <button type="submit" value= {this.props.obj.id} onClick={e => this.onEdit(e)}>Edit</button>
              </form>
              </td>
              <td>
               <form onSubmit={this.handleSubmit}>
                  <button type="submit" value= {this.props.obj.id} onClick={e => this.onClick(e)}>Delete</button>
              </form>
                </td>
            </tr>
        );
    }
}

export default DataTable;