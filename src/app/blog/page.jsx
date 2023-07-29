import Link from "next/link";
import style from "./page.module.css";
import Image from "next/image";

const Blog = () => {
    return (
        <div className={style.mainContainer}>
            <Link href="/blog/testId" className={style.container}>
                <div className={style.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/417826/pexels-photo-417826.jpeg"
                        alt=""
                        width={400}
                        height={250}
                        className={style.image}
                    />
                </div>
                <div className={style.content}>
                    <h1 className={style.title}>Test</h1>
                    <p className={style.desc}>Description</p>
                </div>
            </Link>

            <Link href="/blog/testId" className={style.container}>
                <div className={style.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/977333/pexels-photo-977333.jpeg"
                        alt=""
                        width={400}
                        height={250}
                        className={style.image}
                    />
                </div>
                <div className={style.content}>
                    <h1 className={style.title}>Test</h1>
                    <p className={style.desc}>Description</p>
                </div>
            </Link>

            <Link href="/blog/testId" className={style.container}>
                <div className={style.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg"
                        alt=""
                        width={400}
                        height={250}
                        className={style.image}
                    />
                </div>
                <div className={style.content}>
                    <h1 className={style.title}>Test</h1>
                    <p className={style.desc}>Description</p>
                </div>
            </Link>
        </div>
    );
};

export default Blog;
