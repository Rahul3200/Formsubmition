import React from 'react';

import { Link, useNavigate } from "react-router-dom";
import styles from './Entrypage.module.css'
const EntryPage = () => {
  const navigate = useNavigate();

  return (
    
       <div className= {styles.buttonscontainer}>
        
          <button className={styles.registerbutton} onClick={()=> navigate("/Formformat")}>Register</button>
        
        
          <button className={styles.loginbutton} onClick={()=> navigate("/Loginpage")}>Login</button>
        
    </div>
   
    
  )
  } ;

export default EntryPage
