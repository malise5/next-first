import Link from "next/link";
import style from "./page.module.css";
import Image from "next/image";

const Blog = () => {
    return (
        <div className={style.container}>
            <Link href="/testId" className={style.container}>
                <div className={style.container}>
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
        </div>
    );
};

export default Blog;
