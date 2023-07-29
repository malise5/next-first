import Image from "next/image";
import style from "./page.module.css";
import Button from "@/components/button/Button";
const About = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg"
          fill={true}
          alt="about"
          className={style.img}
        />
        <div className={style.imgText}>
          <h1 className={style.imgTitle}>Digital Storytellers</h1>
          <h2 className={style.imgDEsc}>
            Handcrafting award winning digital experience
          </h2>
        </div>
      </div>
      <div className={style.textContainer}>
        <div className={style.item}>
          <h1 className={style.title}>Who Are We?</h1>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, blanditiis earum! Nisi deleniti explicabo nesciunt,
            quaerat aut minus, iste optio at dicta iusto obcaecati maxime.
            Commodi id esse repellendus! Sit.
            <br />
            <br />
            Culpa quia, ab voluptatem aut voluptas inventore, asperiores iusto
            facere mollitia nobis dolor rerum quidem odit commodi ipsum
            perspiciatis similique sequi animi harum, ea vel voluptate. Dolores
            veniam cupiditate officiis.
          </p>
        </div>
        <div className={style.item}>
          <h1 className={style.title}>What We Do?</h1>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, blanditiis earum! Nisi deleniti explicabo nesciunt,
            quaerat aut minus, iste optio at dicta iusto obcaecati maxime.
            Commodi id esse repellendus! Sit.
            <br />
            <br />
            Culpa quia, ab voluptatem aut voluptas inventore, asperiores iusto
            facere mollitia nobis dolor rerum quidem odit commodi ipsum
            perspiciatis similique sequi animi harum, ea vel voluptate. Dolores
            veniam cupiditate officiis.
            <br />
            <br /> -Dynamic Websites
            <br />
            <br /> -Fast and Handy
            <br />
            <br /> -Mobile Apps
          </p>
          <Button text="Contact" url="contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
