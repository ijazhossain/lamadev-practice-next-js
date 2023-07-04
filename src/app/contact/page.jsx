import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import Button from '../components/Button/Button';
export const metadata = {
    title: 'Contact | Lama dev ',
    description: 'This is description',
}

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Let&lsquo;s Keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image src="/contact.png" fill={true} alt="contact image" className={styles.image} />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder='Enter your name' className={styles.input} />
                    <input type="email" placeholder='Enter your email' className={styles.input} />
                    <textarea name="description" id="" cols="30" rows="10" className={styles.textarea} placeholder='Enter your message'></textarea>
                    <Button url="#" text="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;