import React, { Component } from 'react';

class DataTable2 extends Component {
    render() {
        return (
            <tr>
                <td>  {this.props.obj.id}   </td>
                
             {/*    <td>{this.props.obj.name}    </td> */}
            
                <td> {this.props.obj.filePath} </td>
                <td> {this.props.obj.email} </td>
                {/* //lahna yjib l'image men uploads selon esem image betbi3a ; bach ya3ref enahi limage b thabte   */}
                <td>
                <img height="130" width="130" src ={"http://192.168.43.41:3001/uploads/"+this.props.obj.filePath}/>
                </td>
                
                <td>
                <img height="130" width="130" src ={"http://192.168.43.41:3001/uploads/"+this.props.obj.video}/>
                </td>
                 <td>  {this.props.obj.description} </td>
                 <td>  {this.props.obj.incident_type} </td>
                 <td>  {this.props.obj.position} </td>
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

export default DataTable2;