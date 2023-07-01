import React from 'react';
import styles from './page.module.css'
import Button from '@/app/components/Button/Button';
import Image from 'next/image';
const Category = ({ params }) => {
    return (
        <div className={styles.container}>
            <h1>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.catTitle}>Minimal Single Product</h1>
                    <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?</p>
                    <Button url="#" text="See More" />
                </div>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" alt="category image" fill="true" className='image' />

                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.catTitle}>Minimal Single Product</h1>
                    <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?</p>
                    <Button url="#" text="See More" />
                </div>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" alt="category image" fill="true" className='image' />

                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.catTitle}>Minimal Single Product</h1>
                    <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?</p>
                    <Button url="#" text="See More" />
                </div>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" alt="category image" fill="true" className='image' />

                </div>
            </div>
        </div>
    );
};

export default Category;