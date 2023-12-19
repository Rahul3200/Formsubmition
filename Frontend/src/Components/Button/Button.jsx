import styles from "./Button.module.css";
const Button = ({text,icon}) => {
  return (
    <button
     
      className={styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  )
};

export default Button;
