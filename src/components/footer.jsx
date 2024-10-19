import { Link } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from "../app/component-styles/iconStyles.module.css";

export default function Footer() {
  return (
    <footer className="p-8 border-t border-t-purple-500 flex justify-center gap-4">
      <Link isExternal={true} href="https://github.com/BigFella01">
        <FaGithub className={styles.icon} />
      </Link>
      <Link
        isExternal={true}
        href="https://www.linkedin.com/in/hayden-jenkins-50aa95204/"
      >
        <FaLinkedin className={styles.icon} />
      </Link>
    </footer>
  );
}
