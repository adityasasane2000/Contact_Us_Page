import styles from "./ConatctForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ConatctForm = () => {
    
    const [name , setName] = useState("Aditya");
    const [email, setEmail] = useState("adityasasane51@gmail.com");
    const [text, setText] = useState("Hello evryone");

    const onSubmit = (event) =>{
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);

        console.log(
            name,
            email,
            text
        );
    };

    return (
        <section className={`${styles.container}`}>
            <div className={`${styles.contact_form}`}>
                <div className={`${styles.top_btn}`}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />}></Button>
                    <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />}></Button>
                </div>
                <Button isOutline={true} text="VIA EMAIL FROM" icon={<HiMail fontSize="24px" />}></Button>

                <form onSubmit={onSubmit}>
                    <div className={`${styles.form_control}`}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>

                    <div className={`${styles.form_control}`}>
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" name="email" />
                    </div>

                    <div className={`${styles.form_control}`}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows={8}/>
                    </div>

                    <div className={`${styles.submit_btn}`}>
                        <Button text="SUBMIT" ></Button>
                    </div>

                    <div>{name + " " + email + " " + text}</div>
                </form>
            </div>
            <div className={`${styles.conatct_image}`}>
                <img src="images/contact.png" alt="contact.png" />
            </div>
        </section>
    )
}

export default ConatctForm;