import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import Link from 'next/link';
const BLog = () => {
    return (
        <div className={styles.mainContainer}>
            <Link href="/blog/testId">
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <Image width={400}
                            height={250} src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className={styles.image} />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
                        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ea cumque dolor veritatis repellat ab, inventore repellendus cupiditate ipsa sint, molestias fugiat repudiandae neque quam quo eaque illo praesentium porro tenetur similique. Similique quos corporis inventore, atque neque sequi deleniti consectetur ut voluptas et non suscipit aliquid quod odio illo.</p>
                    </div>
                </div>
            </Link>
            <Link href="/blog/testId">
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <Image width={400}
                            height={250} src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className={styles.image} />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
                        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ea cumque dolor veritatis repellat ab, inventore repellendus cupiditate ipsa sint, molestias fugiat repudiandae neque quam quo eaque illo praesentium porro tenetur similique. Similique quos corporis inventore, atque neque sequi deleniti consectetur ut voluptas et non suscipit aliquid quod odio illo.</p>
                    </div>
                </div>
            </Link>
            <Link href="/blog/testId">
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <Image width={400}
                            height={250} src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className={styles.image} />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
                        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ea cumque dolor veritatis repellat ab, inventore repellendus cupiditate ipsa sint, molestias fugiat repudiandae neque quam quo eaque illo praesentium porro tenetur similique. Similique quos corporis inventore, atque neque sequi deleniti consectetur ut voluptas et non suscipit aliquid quod odio illo.</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BLog;