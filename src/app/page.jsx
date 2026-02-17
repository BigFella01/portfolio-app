import Image from "next/image";
import HeroGraphic from "../../public/images/react-native-programmer.svg";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiTerraform } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import styles from "../app/component-styles/iconStyles.module.css";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <div className="md:flex sm:gap-16 border-b-1 border-purple-500 px-12 py-12 pb-16 my-8 max-w-[1024px] w-full mx-auto">
        <div className="md:w-1/2">
          <h1 className="text-6xl mb-8 text-center md:text-left">
            Hello, my name is Hayden Jenkins
          </h1>
          <p className="text-center md:text-left">
            I love to code. Programming has brought me a lot of fun, knowledge,
            and frustration. But that's natural when doing something you care
            about.
          </p>
        </div>
        <Image className="mx-auto max-h-[360px]" src={HeroGraphic} />
      </div>
      <div className="px-12 py-12 pb-16 my-8 max-w-[1024px] w-full mx-auto">
        <h1 className="text-6xl mb-8 text-center">Skills</h1>
        <div className="flex justify-center gap-4 flex-wrap">
          <FaAws className={styles.iconLarge} />
          <SiTerraform className={styles.iconLarge} />
          <FaPython className={styles.iconLarge} />
          <FaReact className={styles.iconLarge} />
          <BiLogoTypescript className={styles.iconLarge} />
          <RiTailwindCssFill className={styles.iconLarge} />
          <SiPostgresql className={styles.iconLarge} />
          <SiMysql className={styles.iconLarge} />
        </div>
      </div>
    </div>
  );
}
