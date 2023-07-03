import React from 'react';
import styles from './page.module.css'
import Button from '@/app/components/Button/Button';
import Image from 'next/image';
import { items } from './data'
import { notFound } from 'next/navigation';
const getData = (cat) => {
    const data = items[cat];
    if (data) {
        return data;
    }
    return notFound();
}
const Category = ({ params }) => {
    const data = getData(params.category)
    return (
        <div className={styles.container}>
            <h1>{params.category}</h1>
            {
                data.map(item => <div key={item.id} className={styles.item}>
                    <div className={styles.content}>
                        <h1 className={styles.catTitle}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                        <Button url="#" text="See More" />
                    </div>
                    <div className={styles.imgContainer}>
                        <Image src={item.image} alt="category image" fill="true" className='image' />

                    </div>
                </div>)
            }


        </div>
    );
};

export default Category;