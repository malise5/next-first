import Image from "next/image";
import React from "react";
import Hero from "public/hero.png";
import style from "./page.module.css";
import Button from "@/components/button/Button";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <h1 className={style.title}>Better design for your digital products</h1>
        <p className={style.description}>
          Turning your idea into Reality. We bring together the teams from the
          global tech industry
        </p>
        <Button text="See Our Work" url="/portfolio" />
      </div>
      <div className={style.item}>
        <Image src={Hero} alt="hero" className={style.img} />
      </div>
    </div>
  );
};

export default Home;
