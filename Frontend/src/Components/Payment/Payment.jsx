import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Payment.module.css";
import axios from "axios";
import Message from "../Message/Message";

const Payment = () => {
  const [money, setMoney] = useState("500");
  const [time, setTime] = useState("6to7AM");

  const navigate = useNavigate();

  const onchange = (e) => {
    const { name, value } = e.target;
    if (name === "Time") {
      setTime(value);
    } else if (name === "Fees") {
      setMoney(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      money,
      time,
    };

    try {
      const response = await axios.post(
        `http://localhost:5000/api/payment/${time}`,
        formData, // No need to stringify
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("devroom")}`,
          },
        }
      );
      console.log(response);
      if (response.status == 200) {
        // Assuming 'Message' is a component to display messages
        navigate("/Message");
      }

      // You might want to handle navigation or other actions here based on the response

    } catch (error) {
      console.error("Error sending data to the backend:", error);
      // Handle errors (e.g., display an error message)
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="Time">Time Slot</label>
            <select name="Time" id="Times" value={time} onChange={onchange}>
              <option value="6to7AM">6 to 7 AM</option>
              <option value="7to8Am">7 to 8 AM</option>
              <option value="8to9AM">8 to 9 AM</option>
              <option value="5to6PM">5 to 6 PM</option>
            </select>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="Fees">Monthly Fees</label>
            <select name="Fees" id="Fees" value={money} onChange={onchange}>
              <option value="500">Rs 500 INR</option>
            </select>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <input id="inputs" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Payment;