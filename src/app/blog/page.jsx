import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation'

async function getData() {
    const res = await fetch('http://localhost:3000/api/posts', { cache: "no-store", })
    if (!res.ok) {
        return notFound()
    }
    return res.json()
}
export const metadata = {
    title: 'Blogs | Lama dev ',
    description: 'This is description',
}
const BLog = async () => {
    const data = await getData()
    console.log(data);
    return (
        <div className={styles.mainContainer}>
            {
                data.map(item => <Link href={`/blog/${item._id}`} key={item._id}>
                    <div className={styles.container}>
                        <div className={styles.imageContainer}>
                            <Image width={400}
                                height={250} src={item.img} alt="" className={styles.image} />
                        </div>
                        <div className={styles.content}>
                            <h1 className={styles.title}>{item.title}</h1>
                            <p className={styles.desc}>{item.desc}</p>
                        </div>
                    </div>
                </Link>)
            }

        </div>
    );
};

export default BLog;