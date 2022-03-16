import { useState } from "react"
import React from 'react'
import axios from "axios";
import styles from "./Style/LoanForm.module.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export const LoanForm = () => {

  // checking checkbox:
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);


  let history = useHistory();
  // setdata:
  const [data, setData] = useState({

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
    experience: "",
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
  });

  // storing all fields in an obj
  const { title, firstName, lastName, month, day, year, status, email, address_time, phone, experience, preEmployer, occupation, street1, street2, state, city, pincode, downPayment, comment, rent, income } = data


  // gettarget value:
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  };


  // checking checkbox:
  const handleCheckbox1 = (e) => {
    const { checked } = e.target;
    setCheckbox1(checked);
  };
  const handleCheckbox2 = (e) => {
    const { checked } = e.target;
    setCheckbox2(checked);
  };


  // prevent form from reload
  const handleSubmit = (e) => {
    e.preventDefault();
  };


  // postdata:
  const submit = () => {
    if (data.title.trim().length === 0 ||
      data.firstName.trim().length === 0 ||
      data.month === "" ||
      data.lastName.trim().length === 0 ||
      data.status.trim().length === 0 ||
      data.email.trim().length === 0 ||
      data.phone.trim().length === 0 ||
      data.pincode.trim().length === 0 ||
      data.street1.trim().length === 0 ||
      data.experience.trim().length === 0 ||
      data.preEmployer.trim().length === 0 ||
      data.occupation.trim().length === 0 ||
      data.income.trim().length === 0 ||
      data.rent.trim().length === 0 ||
      data.downPayment.trim().length === 0 ||
      data.address_time.trim().length === 0 ||
      checkbox1 === false ||
      checkbox2 === false) {
      alert(`Please Fill the Required Fields`)
    }
    else {
      axios
        .post("http://localhost:3500/data", data)

        .then((res) => {
          console.log("success");
          alert("form submited sucessfully")
          history.push("/data")
        })

        .catch((error) => {
          console.log(error);
        });

    };
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Title : */}
        <label htmlFor="title" className={styles.mainLabel}>Title:</label>
        <select
          className={styles.title}
          name="title"
          value={title}
          placeholder="Please Select"
          onChange={handleChange}
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
          value={firstName}
          onChange={handleChange}
          id="firstName"
          required

        />

        {/* LastName */}
        <input
          type="text"
          className={styles.ifname}
          name="lastName"
          value={lastName}
          required
          onChange={handleChange}

        />

        <lable className={`${styles.customizeLabel} ${styles.fname}`}>Firstname</lable>
        <lable className={`${styles.customizeLabel} ${styles.fname}`}>LastName</lable>
        <br />

        {/* Birth date */}
        <label className={styles.mainLabel}>Birth Date</label>

        <select
          className={styles.birth}
          onChange={handleChange}
          name="month"
          value={month}
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
          onChange={handleChange}
          name="day"
          value={day}
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
          onChange={handleChange}
          name="year"
          value={year}
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
        <div onChange={handleChange} value={status}

        >
          <input type="radio" name="status" value="Single" id="single" />
          <label htmlFor="single" className={styles.radio}>Single</label>
          <br />
          <input type="radio" name="status" id="married" value="married" />
          <label htmlFor="married" className={styles.radio}>Married</label>
          <br />
          <input type="radio" id="other" name="status" value="other" />
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
          value={email}
          size="30"
          onChange={handleChange}

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
          value={phone}
          id="phone"
          placeholder="(000)000-0000"
          maxLength={10}
          onChange={handleChange}

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
          value={street1}
          onChange={handleChange}
          required
        />
        <br />
        <label className={styles.customizeLabel}>Street Address</label>
        <br />

        <input
          className={styles.address}
          type="text"
          name="street2"
          value={street2}
          onChange={handleChange}
        />
        <br />
        <label className={styles.customizeLabel}>Street Address Line 2</label>
        <br />

        <input
          type="text"
          className={styles.city}
          name="city"
          value={city}
          onChange={handleChange}
        />
        <input
          type="text"
          className={styles.city}
          name="state"
          value={state}
          onChange={handleChange}
        />
        <br />

        <label className={`${styles.customizeLabel} ${styles.citylabel}`}>City</label>
        <label className={`${styles.customizeLabel} ${styles.citylabel}`}>State/Province</label>
        <br />

        <input
          className={styles.address}
          type="number"
          name="pincode"
          value={pincode}
          onChange={handleChange}
        />
        <br />
        <label className={styles.customizeLabel}>Postal/zip Code</label>
        <br />

        {/* Given address  */}
        <label className={styles.mainLabel}>
          How Long have you Lived in your given address <sup>*</sup>{" "}
        </label>

        <div onChange={handleChange}
          value={address_time}

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
          onChange={handleChange}
          name="preEmployer"
          value={preEmployer}
          required
        />
        <br />

        <label className={styles.mainLabel}>
          Occupation <sup>*</sup>
        </label>
        <input
          type="text"
          className={styles.dislabel}
          onChange={handleChange}
          name="occupation"
          value={occupation}
          required
        />
        <br />

        <label className={styles.mainLabel}>
          Years of experience <sup>*</sup>
        </label>

        <div onChange={handleChange} value={experience}

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
          onChange={handleChange}
          name='income'
          value={income}
          required
        />

        <label className={styles.mainLabel}>
          Monthly rent/mortgage <sup>*</sup>
        </label>
        <input
          type="number"
          className={styles.dislabel}
          onChange={handleChange}
          name="rent"
          value={rent}
          required
        />

        <label className={styles.mainLabel}>

          Down Payment Amount <sup>*</sup>
        </label>
        <input
          type="number"
          className={styles.dislabel}
          value={downPayment}
          name="downPayment"
          onChange={handleChange}
          required
        />

        <label className={styles.mainLabel}>Comments:</label>
        <textarea
          name="comment"
          onChange={handleChange}
          id=""
          cols="110"
          rows="10"
          value={comment}


        ></textarea>
        <br />

        <label className={styles.mainLabel}>

          I authorize Credit Granters/Learning/Leasing Companies to obtain
          personal and credit information about me from my Employer and credit
          bureau , or credit reporting agency , any person who has or may have
          any financial dealing with me,or from any reference I have provided
          .Thsi information ,as well as that provided by me in the application
          ,will be refferred to in connection with this lease and any other
          relationships we may establish from timeto time .Any personal and
          crdit information obtained be discolsed from time to time other .Any
          personal and credit information obtained may be disclosed from time
          time to other lenders , credit bureaus or other credit reporting
          agencies. <sup>*</sup>
        </label>

        <input
          type="checkbox"
          onChange={(e) => handleCheckbox1(e)}
          value="something"
          name="something"
          required
          id="yes1"
        />
        <label htmlFor="yes1" className={styles.radio}  >
          Yes
        </label>
        <br />

        <label className={styles.mainLabel}>
          I hereby agree that the information given is true , accurate and
          complete as of the date of this appliction submission <sup>*</sup>{" "}
        </label>

        <input
          type="checkbox"
          onChange={(e) => handleCheckbox2(e)}
          name="nothing"
          value="nothing"
          id="yes2"
          required

        />
        <label htmlFor="yes2" className={styles.radio}>
          Yes
        </label>
        <br />

        <button
          className={`${styles.btn} ${styles.center}`}
          onClick={submit}>
          Send Application Now
        </button>
      </form>
    </>
  )
}




