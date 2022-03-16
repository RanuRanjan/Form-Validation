import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Style/Show.module.css"

export function Show() {
  const [getdata, setGetData] = useState([]);


  const showdata =()=>{
    axios.get('http://localhost:3500/data')
    .then((res)=>{
      // console.log(res);
      const users=res.data
      setGetData(users)
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  useEffect( ()=> {
    showdata();
  
  }, []);

  function deleteUsers(id){
    fetch(`http://localhost:3500/data/${id}`,{
        method:'DELETE'
    })
    .then((res)=>{
         res.json().then((ress)=>{
          //  console.log(ress)
          
           showdata();
         })
    })
    .catch((error)=>{
      console.log(error);
    })

  }

  



  return (
    <div >
      <h1>Users Data</h1>
      <div className={styles.main_show} >
        
      <Link  to="/"><button className={styles.btn1} >Fill Another Form</button></Link>
        
        </div>
      <div className={styles.scroll}>
      <table>
        <tr>
          <th>Id</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone</th>
       
         <th></th>
          <th></th>
          <th></th>
         </tr>

        {getdata.map((e, id) => {
          return (
            <tr key={id}>
              <td>{e.id}</td>
              <td>
                {e.firstName}
                {e.lastName}
              </td>
             
              <td>{e.email}</td>
              <td>{e.phone}</td>
              

             <td>
             <Link to={`/view/${e.id}`}> <button className={styles.btn1}>View</button> </Link>
             </td>
              <td>
              <Link to={`/edit/${e.id}`}> <button className={styles.btn1}>Edit</button> </Link>
              </td>
                         
              <td>
                <button onClick={()=>deleteUsers(e.id)} className={styles.btn1}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>    
      </div>
    </div>
  );
}
