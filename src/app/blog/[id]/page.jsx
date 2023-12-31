import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import { notFound } from 'next/navigation';
async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: 'no-store',
    })
    if (!res.ok) {
        return notFound()
    }
    return res.json()
}
export async function generateMetadata({ params }) {

    const post = await getData(params.id)
    return {
        title: post.title,
        description: post.desc,
    };
}

const BlogPost = async ({ params }) => {
    const data = await getData(params.id)
    console.log(data);
    return (
        <div className={styles.container}>
            <div className={styles.upperContainer}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <p className={styles.desc}>
                        {data.desc}
                    </p>
                    <div className={styles.author}>
                        <Image
                            src={data.img}
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>{data.username}</span>
                    </div>

                </div>
                <div className={styles.imgContainer}>
                    <Image
                        fill="true" src={data.img} className={styles.image} alt="" />
                </div>
            </div>
            <div className={styles.lowerContainer}>
                <p>{data.content}</p>
            </div>
        </div>
    );
};

export default BlogPost;