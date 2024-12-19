import React from "react";
import Button from "../Button/Button";
import styles from "./Form.module.css";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";


const Form = () => {
 

  const isBtn = false;
  return (
    <div className={styles.box}>
      <div className={styles.main}>
        <div className={styles.button}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          ></Button>
          <Button text="VIA CALL" icon={<IoMdCall fontSize="24px" />}></Button>
        </div>
        <Button
          text="VIA EMAIL FORM"
          isBtn2={true}
          icon={<MdMessage fontSize="24px" />}
        ></Button>
        <form action="" >
          <div className={styles.form}>
            <div className={styles.input_container}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.input_container}>
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" />
            </div>
            <div className={styles.input_container}>
              <label htmlFor="name">TEXT</label>
              <textarea name="text" />
            </div>
          </div>
        </form>
        <div>
          <Button text="SUBMIT"></Button>
        </div>
      </div>

      <div>
        <img src="Service.svg" alt="" className={styles.photo} />
      </div>
    </div>
  );
};

export default Form;
