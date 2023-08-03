import React from "react";
import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Me.jpg"
          alt="Image of Abdullah the master developer!"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Abdullah!</h1>
      <p>
        I am a frontend developer, who also aspires to learn cloud computing and
        AI
      </p>
    </section>
  );
}

export default Hero;
