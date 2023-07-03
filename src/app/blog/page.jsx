import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation'

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: "no-store", })
    if (!res.ok) {
        return notFound()
    }
    return res.json()
}
const BLog = async () => {
    const data = await getData()
    console.log(data);
    return (
        <div className={styles.mainContainer}>
            {
                data.map(item => <Link href="/blog/testId" key={data.id}>
                    <div className={styles.container}>
                        <div className={styles.imageContainer}>
                            <Image width={400}
                                height={250} src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className={styles.image} />
                        </div>
                        <div className={styles.content}>
                            <h1 className={styles.title}>{item.title}</h1>
                            <p className={styles.desc}>{item.body}</p>
                        </div>
                    </div>
                </Link>)
            }

        </div>
    );
};

export default BLog;