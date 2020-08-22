    import React, { Component } from 'react';
    import axios from "axios";
    import { Player } from 'video-react';
    import "E:/PFE_ING/Reactjsapp/teestttt/node_modules/video-react/dist/video-react.css";
    class DataTable extends Component {
        //insert les incidents +datatable
        handleDelete = () => {
            if (window.confirm("Are you sure you want to delete this incident?")) {
            axios.delete("http://192.168.43.41:5000/deleteincident/" + this.props.obj.id)
                .then(res => {
                
                    console.log(res.data);
                })
        }}
        render() {
            //style css
            const button = {
                color: "black",
                backgroundColor: "#ff0000",

                fontFamily: "Arial",


            };
            return (
                <tr>
                <div>   <td  height="200" width="230">  {this.props.obj.id}   </td> </div> 

                  <div></div>  <td> {this.props.obj.email} </td>

                    {/* //lahna yjib l'image men uploads selon esem image betbi3a ; bach ya3ref enahi limage b thabte   */}
                    <td>
                        <img height="140" width="230" src={"http://192.168.43.41:3001/uploads/"+ this.props.obj.image} />
                    </td>
                    <div >

                    
                        <td >
                    <div >
                            <Player playsInline 
                                     
                             
                                src={"http://192.168.43.41:3001/uploads/" + this.props.obj.video} />
                                <video  height="1" width="100" ></video>
</div>

                        </td>
                  </div>
                     <td>  {this.props.obj.description} </td>
                    <td>  {this.props.obj.incident_type} </td>
                    <td >  {this.props.obj.position} </td>

                    <td >
                    <form >

                            <button style={{color:'Red',paddingRight:"10"}}  onClick={() =>  this.handleDelete()  }
                        >Delete
                        
                        
                            </button>
                            
                        
                        </form>
                    </td>
                    
                </tr>
            );
        }
    }

    export default DataTable;