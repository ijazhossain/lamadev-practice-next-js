import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import { notFound } from 'next/navigation';
async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: 'no-store',
    })
    if (!res.ok) {
        return notFound()
    }
    return res.json()
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora consequatur error possimus officia provident rem consectetur saepe quidem inventore deleniti neque sequi architecto nihil laboriosam vitae, repellat nam eaque. Iste.
                    </p>

                </div>
                <div className={styles.imgContainer}>
                    <Image
                        fill="true" src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className={styles.image} alt="" />
                </div>
            </div>
            <div className={styles.lowerContainer}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia facere doloremque minus omnis dolorem porro unde autem fuga vel impedit a dolorum pariatur provident, natus dignissimos amet consectetur fugit dolor sequi id eius temporibus. Natus amet ut optio! Magnam reprehenderit facere maxime optio sunt, cum earum atque repellat reiciendis sequi?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo accusantium hic nam ullam cum, dolor repellendus officia iste perspiciatis voluptatem?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum dolores placeat sequi repellat, eum aperiam facere autem harum ipsam voluptate iure enim suscipit est accusantium aliquam! Vel delectus saepe amet nihil, consectetur eius blanditiis doloremque ut. Doloremque, tempore hic eligendi veniam molestias quam voluptatem culpa totam odit suscipit officiis mollitia esse non quidem facere itaque ratione praesentium accusamus? Sit doloribus dolor, aut saepe harum quae veniam excepturi minus alias. Tempore recusandae alias, illo temporibus eos quia voluptatem numquam officia eum itaque provident veritatis dolorum ex laudantium! Hic, esse quo, tempora ipsum autem labore sint numquam consequuntur atque incidunt eligendi. Tempore!</p>
            </div>
        </div>
    );
};

export default BlogPost;