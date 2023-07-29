import style from "./page.module.css";
import Portfolio from "../page";
import Button from "@/components/button/Button";
import Image from "next/image";
const Category = ({ params }) => {
    return (
        <div className={style.container}>
            <h1 className={style.catTitle}>{params.category}</h1>
            <div className={style.item}>
                <div className={style.content}>
                    <h1 className={style.title}>Test</h1>
                    <p className={style.desc}>Desc</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={style.imgContainer}>
                    <Image
                        className={style.img}
                        fill={true}
                        src="https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg"
                        alt="sculpture"
                    />
                </div>
            </div>
        </div>
    );
};

export default Category;
