import React, { Component } from 'react';
import axios from "axios" ;
import { IoMdHeartEmpty,IoMdHeart,IoIosRemoveCircleOutline } from "react-icons/io";


class DataTable2 extends Component {
  handleDelete = () => {
    if (window.confirm("Are you sure you want to bock this Witness?")) {
    axios.delete("http://192.168.43.41:5000/delete/" + this.props.obj.id)
        .then(res => {
         
            console.log(res.data);
        })
}}
//api tester si user est favoris ou nn avec la valeur isconfident

modifyIsConfident = isConfidentValue => {
  return axios
    .put("http://192.168.43.41:5000/updateIsConfident/"+ this.props.obj.id, {
      isConfident: isConfidentValue,
    })
    .then(response => {
      console.log('confident')
    })
}
confiant = () => {
  /* axios.post("http://192.168.43.41:5000/confiantuser2/" + this.props.obj.id)
      .then(res => {
          console.log(res.data); */
          console.log('on clik fnction') 
//       })
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
                
                    <form >

                        <button style={{color:'wite',raduis:'20',borderRadius:30}}
                        onClick={() =>  this.handleDelete()  }>
                        <IoIosRemoveCircleOutline style={{color:'red',width:'25',height:'25'}}

                         > 
                        </IoIosRemoveCircleOutline>
                        </button>
                        
                     
                    </form>
                </td>
                <td >
                   
                      {
                        this.props.obj.isConfident ?<IoMdHeart style={{color:'red',width:"25",height:"25"}} onClick={
                         async () => {
                           await this.modifyIsConfident(false)
                          }
                        }></IoMdHeart>
                         : //else
                         <IoMdHeartEmpty style={{width:"25",height:"25"}} onClick={
                          async () => {
                            await this.modifyIsConfident(true)
                           }
                          } >Favoris></IoMdHeartEmpty>

                      }
                   
                </td>
            </tr>
        );
    }
}

export default DataTable2;