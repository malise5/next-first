import Link from "next/link";
import style from "./page.module.css";
import Image from "next/image";

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to get data");
    }
    return res.json();
}

const Blog = async () => {
    const data = await getData();
    return (
        <div className={style.mainContainer}>
            {data.map((item) => (
                <Link
                    href="/blog/testId"
                    className={style.container}
                    key={item.id}
                >
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
                        <h1 className={style.title}>{item.title}</h1>
                        <p className={style.desc}>{item.body}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Blog;
