import { useEffect, useState } from "react"
import React  from 'react'
import axios from "axios";
import { useParams,useHistory } from "react-router-dom";
import styles from "./Style/Update.module.css"


export const Update=()=> {

  const {id} =useParams()

  const history=useHistory()
 
  const [userData,setUserData]=useState({
    title: "",
    firstName: "",
    lastName: "",
    month: "",
    day: "",
    year: "",
    status: "",
    email: "",
    address_time: "",
    phone: "",
    experience:"" ,
    preEmployer: "",
    occupation: "",
    street1: "",
    street2: "",
    state: "",
    city: "",
    pincode: "",
    downPayment: "",
    comment: "",
    rent: "",
    income: "",
  })

// getting data of user on the basis of id
  useEffect (()=>{
  async function getuserData(){
    try{
      const user=await axios.get(`http://localhost:3500/data/${id}`)
     
      setUserData(user.data)
      // console.log(user);
    }catch(error){
      console.log("Error");
    }
  }
    getuserData();
  },[id])





  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };


// sending updated data
  async function UpdateForm (e){
    e.preventDefault()
    try{
      await axios.put(`http://localhost:3500/data/${id}`,userData)
      alert("Update Successfull")
      history.push("/data")
    }
     
        catch(error){
          console.log("error");
        }
      }
    
 
 
  
  return (
    <>
    <h1>Update Users Details</h1>
    <div className={styles.main}>
    <form >
          {/* Title : */}
          <label htmlFor="title"  className={styles.mainLabel}>Title:</label>
          <select
            className={styles.title}
            name="title"
            value={userData.title}
            placeholder="Please Select"
            onChange={handleChange}
            disabled
          
          >
            <option value="">Please Select </option>
            <option value="Mr. ">Mr. </option>
            <option value="Mrs. ">Mrs. </option>
          </select>
          <br />

          {/* Name */}
          <label className={styles.mainLabel} htmlFor="firstName">
            Name <sup>*</sup>
          </label>

          {/* FirstName */}
          <input
            type="text"
            className={styles.ifname}
            name="firstName"
            value={userData.firstName}
            id="firstName"
            onChange={handleChange}
            required
          />

          {/* LastName */}
          <input
            type="text"
            className={styles.ifname}
            name="lastName"
            required
            value={userData.lastName}
            onChange={handleChange}
            

          />

          <lable className={`${styles.customizeLabel} ${styles.fname}`}>Firstname</lable>
          <lable className={`${styles.customizeLabel} ${styles.fname}`}>LastName</lable>
          <br />

          {/* Birth date */}
          <label className={styles.mainLabel}>Birth Date</label>

          <select
            className={styles.birth}
            value={userData.month}
            name="month"
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Jan">Jan</option>
            <option value="Feb"> Feb</option>
            <option value="Mar"> Mar</option>
            <option value="Apr"> Apr</option>
            <option value="May"> May</option>
            <option value="June"> June</option>
            <option value="July"> July</option>
            <option value="Aug"> Aug</option>
            <option value="Sep"> Sep</option>
            <option value="Oct"> Oct</option>
            <option value="Nov"> Nov</option>
            <option value="Dec`"> Dec</option>
          </select>

          <select
            className={styles.birth}
            value={userData.day}
            name="day"
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="1">1</option>
            <option value="2"> 2</option>
            <option value="3"> 3</option>
            <option value="4"> 4</option>
            <option value="5"> 5</option>
            <option value="6"> 6</option>
            <option value="7"> 7</option>
            <option value="8"> 8</option>
            <option value="9"> 9</option>
            <option value="10"> 10</option>
            <option value="11"> 11</option>
            <option value="12"> 12</option>
            <option value="13"> 13</option>
            <option value="14"> 14</option>
            <option value="15"> 15</option>
            <option value="16"> 16</option>
            <option value="17"> 17</option>
            <option value="18"> 18</option>
            <option value="19"> 19</option>
            <option value="20"> 20</option>
          </select>

          <select
            className={styles.birth}
            value={userData.year}
            name="year"
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="1991">1991 </option>
            <option value="1992"> 1992</option>
            <option value="1993"> 1993</option>
            <option value="1994"> 1994</option>
            <option value="1995"> 1995</option>
          </select>
          <br />

          <label className={`${styles.date}   ${styles.customizeLabel} `}>Month</label>
          <label className={`${styles.date}   ${styles.customizeLabel} `}>Date</label>
          <label className={`${styles.date}   ${styles.customizeLabel} `}>Year</label>

          {/* Marital Status */}
          <label
            className={styles.mainLabel} 

          >
            Marital Status <sup>*</sup>
          </label>
          <div  
          value={userData.status}
          onChange={handleChange}
          >
            <input type="radio" name="status" value="Single"  id="single" />
            <label htmlFor="single"  className={styles.radio}>Single</label>
            <br />
            <input type="radio" name="status" id="married" value="married" />
            <label htmlFor="married" className={styles.radio}>Married</label>
            <br />
            <input type="radio" id="other" name="status"  value="other" />
            <label htmlFor="other" className={styles.radio}>Other</label>
            <br />
          </div>

          {/* Email */}
          <label className={styles.mainLabel} htmlFor="email">
            E-mail <sup>*</sup>
          </label>
          <input
            type="email"
            className={styles.dislabel}
            required
            name="email"
            size="30"
            value={userData.email}
            onChange={handleChange}
            disabled

          />
          <br />
          <label className={styles.customizeLabel}>example@example.com</label>
          <br />

          {/* Phone No */}
          <label className={styles.mainLabel} htmlFor="phone">
            Phone <sup>*</sup>
          </label>
          <input
            className={styles.dislabel}
            type="tel"
            name="phone"
            id="phone"
            placeholder="(000)000-0000"
            maxLength={10}
            onChange={handleChange}
            value={userData.phone}

            required
          />
          <br />

          {/* Address */}
          <label className={styles.mainLabel}>
            Address <sup>*</sup>
          </label>

          <input
            className={styles.address}
            type="text"
            name="street1"
            onChange={handleChange}
            value={userData.street1}
            required
          />
          <br />
          <label className={styles.customizeLabel}>Street Address</label>
          <br />

          <input
            className={styles.address}
            type="text"
            name="street2"
            onChange={handleChange}
            value={userData.street2}
          />
          <br />
          <label className={styles.customizeLabel}>Street Address Line 2</label>
          <br />

          <input
            type="text"
            className={styles.city}
            name="city"
            onChange={handleChange}
            value={userData.city}
          />
          <input
            type="text"
            className={styles.city}
            name="state"
            value={userData.state}
          />
          <br />

          <label className={`${styles.customizeLabel} ${styles.citylabel}`}>City</label>
          <label className={`${styles.customizeLabel} ${styles.citylabel}`}>State/Province</label>
          <br />

          <input
            className={styles.address}
            type="number"
            name="pincode"
            onChange={handleChange}
            value={userData.pincode}
          />
          <br />
          <label className={styles.customizeLabel}>Postal/zip Code</label>
          <br />

          {/* Given address  */}
          <label className={styles.mainLabel}>
            How Long have you Lived in your given address <sup>*</sup>{" "}
          </label>

          <div 
            value={userData.address_time}
            onChange={handleChange}
          >
            <input type="radio" name="address_time" value="0-1 Year" id="01" />
            <label htmlFor="01" className={styles.radio}>0-1 Year</label>
            <br />
            <input type="radio" name="address_time" value="1-2 Years" id="1" />
            <label htmlFor="1" className={styles.radio}>1-2 Years</label>
            <br />
            <input type="radio" name="address_time" value="3-4 Years" id="3" />
            <label htmlFor="3" className={styles.radio}>3-4 Years</label>
            <br />
            <input type="radio" name="address_time" value="5 Years" id="5" />
            <label htmlFor="5" className={styles.radio}>5+ Years</label>
            <br />
          </div>

          <p>Employment Information</p>

          {/* Present Employer */}
          <label className={styles.mainLabel}>
            Present Employer <sup>*</sup>
          </label>
          <input
            type="text"
            className={styles.dislabel}
            value={userData.preEmployer}
            name="preEmployer"
            onChange={handleChange}
            required
          />
          <br />

          <label className={styles.mainLabel}>
            Occupation <sup>*</sup>
          </label>
          <input
            type="text"
            className={styles.dislabel}
            value={userData.occupation}
            name="occupation"
            onChange={handleChange}
            required
          />
          <br />

          <label className={styles.mainLabel}>
            Years of experience <sup>*</sup>
          </label>

          <div 
            value={userData.experience}
            onChange={handleChange}
          >
            <input type="radio" name="experience" value="0-1 Year" id="ex1" />
            <label htmlFor="ex1" className={styles.radio}>0-1 Year</label>
            <br />
            <input type="radio" name="experience" value="1-2 Years" id="ex2" />
            <label htmlFor="ex2" className={styles.radio}>1-2 Years</label>
            <br />
            <input type="radio" name="experience" value="3-4 Years" id="3" />
            <label htmlFor="3" className={styles.radio}>3-4 Years</label>
            <br />
          </div>

          <label className={styles.mainLabel}>
            
            Gross monthly income <sup>*</sup>
          </label>
          <input
            type="number"
            className={styles.dislabel}
            value={userData.income}
            name='income'
            onChange={handleChange}
            required
          />

          <label className={styles.mainLabel}>
            Monthly rent/mortgage <sup>*</sup>
          </label>
          <input
            type="number"
            className={styles.dislabel}
            value={userData.rent}
            name="rent"
            onChange={handleChange}
            required
          />

          <label className={styles.mainLabel}>
        
            Down Payment Amount <sup>*</sup>
          </label>
          <input
            type="number"
            className={styles.dislabel}
            name="downPayment"
            onChange={handleChange}
            value={userData.downPayment}
            required
          />

          <label className={styles.mainLabel}>Comments:</label>
          <textarea
            name="comment"
            value={userData.comment}
            id=""
            cols="110"
            rows="10"
            onChange={handleChange}


          ></textarea>
          <br />

          
         

          <button
            className={`${styles.btn} ${styles.center}`}
            onClick={UpdateForm} >
            Update
          </button>
        </form>
    </div>
    </>
  )
}

