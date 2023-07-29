import Image from "next/image";
import style from "./page.module.css";
import { notFound } from "next/navigation";

async function getData(id) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            cache: "no-store",
        }
    );
    if (!res.ok) {
        return notFound();
    }
    return res.json();
}
const BlogPost = async ({ params }) => {
    const data = await getData(params.id);
    return (
        <div className={style.container}>
            <div className={style.top}>
                <div className={style.info}>
                    <h1 className={style.title}>{data.title}</h1>
                    <p className={style.desc}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Optio aliquid excepturi vero, quis at magni nihil
                        sint commodi dolor rerum!Optio aliquid excepturi vero,
                        quis at magni nihil sint commodi dolor rerum!
                    </p>
                    <div className={style.author}>
                        <Image
                            src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg"
                            alt=""
                            width={40}
                            height={40}
                            className={style.avatar}
                        />
                        <span className={style.username}>Kudez</span>
                    </div>
                </div>
                <div className={style.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg"
                        alt=""
                        fill={true}
                        className={style.image}
                    />
                </div>
            </div>
            <div className={style.content}>
                <p className={style.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    esse hic natus fugiat ducimus impedit, atque incidunt porro
                    consectetur! Saepe totam, accusamus dolores doloribus ut
                    <br />
                    <br />
                    quod ad assumenda magni natus. Ipsam soluta aliquam
                    cupiditate commodi rem ratione accusantium iure quam at in
                    <br />
                    <br />
                    consequatur reprehenderit aperiam optio doloribus earum,
                    laborum necessitatibus, sit delectus nemo quibusdam illo quo
                    perspiciatis voluptas. Repudiandae, voluptas.
                </p>
            </div>
        </div>
    );
};

export default BlogPost;
