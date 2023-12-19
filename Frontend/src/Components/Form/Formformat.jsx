import React,{ useEffect, useState } from 'react';
import Button from "../Button/Button.jsx";
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import styles from "./Formformat.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Message from "../Message/Message.jsx"
import Payment from "../Payment/Payment.jsx";

const Formformat = () => {
  useEffect
  const [name, setName] = useState("Anshu");
  const [email, setEmail] = useState("support@dosomecoding.com");
  const [password, setPassword] = useState("123");
 
  const [age, setAge] = useState("Age");
  const [flag, setFlag] = useState(true);
  const [signal, setSignal] = useState(false);
  const [info, setInfo] = useState("");

  const navigate = useNavigate();

  const onSubmit = async(event) => {
    event.preventDefault();

   /*console.log({name},{email},{password});*/
    const formData = {
      name,
      email,
      password,
      age,
    };

    try {
      // Make a POST request to your backend endpoint
      const response = await axios.post('http://localhost:5000/api/user/register', JSON.stringify(formData),{headers:{'Content-Type':'application/json'}}
      );

      // Handle the response from the backend
      console.log(response);
      if(response.status==201)
     { setInfo("Invalid credentials","", "error")
     setSignal(true);
    }
    else if(response.status==200)
    {  
      localStorage.setItem("devroom", response.data.auth);
      navigate("/Payment");
    }

      // Navigate to the Payment page or do other actions based on the response
     
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error('Error  sending data to the backend:', error);
    }
  

  // ... Other code


   
    
  };

  const onchangename = (e) => {
    setName(e.target.value);
  
  };
  const onchangeemail = (e) => {
    
    setEmail(e.target.value);
   
 
  };
  const onchangepassword = (e) => {
   
    setPassword(e.target.value);
   
   
  };
  const onchangeage = (e) => {
   
    setAge(e.target.value);
    if(e.target.value!=="18to65")
    setFlag(false);
  };
 
 
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="24px" />} />
          <Button text="VIA CALL" icon={<IoCallOutline fontSize="24px" />} />
        </div>
        <Button text="VIA EMAIL FORM" icon={<MdMail fontSize="24px" />} />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={name} onChange={onchangename} />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} onChange={onchangeemail}/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" value={password} onChange={onchangepassword}/>
          </div>
         
          
          <div className={styles.form_control}>
            <label htmlFor="Age">Age Limit</label>
            <select name="Age" id="AgeLimit" onChange={onchangeage} value={age} >
            <option value="Age">Age Limit</option>
              <option value="0to18">Age 0-18 Year</option>
              <option value="18to65">Age 18-65 Year</option>
              <option value="65to100">Age 65-100</option>
             
             
            </select>
          </div>
          <div className="paymentcontainer">
         
           
            <input id="inputs" type="submit" value="Submit" style={{ visibility: flag ? 'visible' : 'hidden' }} />
    
          </div>
          <div className={styles.form_control} style={{ visibility: !flag? 'visible' : 'hidden' }}>
           <h2>Sorry....You not belongs to Age 18 to 65 </h2>
          </div>
          
        </form>
      </div>
    </section>
  );
}

export default Formformat;