import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

const Contacts = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lets Keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/contact.png"
                        fill={true}
                        alt="contacts-image"
                        className={styles.image}
                    />
                </div>
                <form className={styles.form}>
                    <input
                        type="text"
                        placeholder="name"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="email"
                        className={styles.input}
                    />
                    <textarea
                        name=""
                        id=""
                        placeholder="Message"
                        cols="30"
                        rows="10"
                        className={styles.textArea}
                    ></textarea>
                    <Button url="#" text="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contacts;
