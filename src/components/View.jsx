import React, { useState, useEffect } from 'react'
import styles from "./Style/View.module.css"
import axios from 'axios';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

export function View() {

  const { id } = useParams();
  const [userData, setUserData] = useState([]);

  // Getting the data from json server on the basis of id:
  useEffect(() => {
    async function getuserData() {
      try {
        const user = await axios.get(`http://localhost:3500/data/${id}`)

        setUserData(user.data)
        // console.log(user);
      } catch (error) {
        console.log("Error");
      }
    }
    getuserData();
  }, [id])


  return (
    <div>
      <h2>Applicant Data</h2>
      <Link to="/data"><button className={styles.btn1} >Show All Data</button></Link>
      <div className={styles.usermain}>

        <div>
          <div className={styles.fields}>
            <div>Title :</div>
            <div>First Name :</div>
            <div>Last Name :</div>
            <div>Date Of Birth :</div>
            <div>Marital Status :</div>
            <div>Email id :</div>
            <div>Phone-No</div>
            <div>Sdiveet Address :</div>
            <div>State :</div>
            <div>City :</div>
            <div>Pin Code :</div>
            <div>How Long you Live in your Address :</div>
            <div>Present Employer :</div>
            <div>Occupation :</div>
            <div>Years of Experience :</div>
            <div>Gross Montly Income :</div>
            <div>Rent :</div>
            <div>Down Payment :</div>
            <div>Comments :</div>
          </div>
        </div>
        <div>
          <div className={styles.Data}>
            <div>{userData.title}</div>
            <div>{userData.firstName}</div>
            <div>{userData.lastName}</div>
            <div>{userData.month}-{userData.day}-{userData.year}</div>
            <div>{userData.status}</div>
            <div>{userData.email}</div>
            <div>{userData.phone}</div>
            <div>{userData.street1}</div>
            <div>{userData.state}</div>
            <div>{userData.city}</div>
            <div>{userData.pincode}</div>
            <div>{userData.address_time}</div>
            <div>{userData.preEmployer}</div>
            <div>{userData.occupation}</div>
            <div>{userData.experience}</div>
            <div>{userData.income}</div>
            <div>{userData.rent}</div>
            <div>{userData.downPayment}</div>
            <div>{userData.comment}</div>
          </div>

        </div>
      </div>


    </div>

  )
}
