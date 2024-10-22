import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import styles from "../../app/component-styles/iconStyles.module.css";

export default function ProjectsPage() {
  return (
    <div className="px-8 py-8 my-8 max-w-[1024px] w-full mx-auto">
      <h1 className="text-purple-300 text-4xl mb-12 text-center">Projects</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <Card className="bg-black text-white p-8 border rounded-xl border-purple-500">
          <CardBody>
            <Link
              href="https://cruise-control-psi.vercel.app"
              isExternal={true}
            >
              <Image
                alt="preview for project"
                src="/images/cruise-control.png"
              />
            </Link>
          </CardBody>
          <CardHeader className="grid text-center">
            <h4 className="text-purple-300">Cruise Control</h4>
            <div className="my-4 border-t border-gray-700"></div>
            <p>
              Full-stack web application that allows users to create bicycle
              rentals with a hypothetical business based out of Pensacola, FL.
            </p>
            <div className="my-4 border-t border-gray-700"></div>
            <div className="flex flex-wrap gap-2 justify-center">
              <FaHtml5 className={styles.iconSmall} />
              <FaCss3Alt className={styles.iconSmall} />
              <BiLogoTypescript className={styles.iconSmall} />
              <FaReact className={styles.iconSmall} />
              <SiPostgresql className={styles.iconSmall} />
            </div>
          </CardHeader>
        </Card>
        <Card className="bg-black text-white p-8 border rounded-xl border-purple-500">
          <CardBody>
            <Link href="https://purepalate2-0-psi.vercel.app" isExternal={true}>
              <Image
                alt="preview for project"
                src="/images/purepalate2.0.png"
              />
            </Link>
          </CardBody>
          <CardHeader className="grid text-center">
            <h4 className="text-purple-300">Pure Palate 2.0</h4>
            <div className="my-4 border-t border-gray-700"></div>
            <p>
              Full-stack web application with thousands of recipes with
              comprehensive nutrition information. App also features a 'Create
              Recipe' page and OAuth 2.0, allowing users to sign in using Google
              and persist saved recipes.
            </p>
            <div className="my-4 border-t border-gray-700"></div>
            <div className="flex flex-wrap gap-2 justify-center">
              <FaHtml5 className={styles.iconSmall} />
              <FaCss3Alt className={styles.iconSmall} />
              <BiLogoTypescript className={styles.iconSmall} />
              <RiNextjsFill className={styles.iconSmall} />
              <RiTailwindCssFill className={styles.iconSmall} />
              <SiPostgresql className={styles.iconSmall} />
            </div>
          </CardHeader>
        </Card>
        <Card className="bg-black text-white p-8 border rounded-xl border-purple-500">
          <CardBody>
            <Link
              href="https://chatter-one-brown.vercel.app
"
              isExternal={true}
            >
              <Image alt="preview for project" src="/images/chatter.png" />
            </Link>
          </CardBody>
          <CardHeader className="grid text-center">
            <h4 className="text-purple-300">Discuss</h4>
            <div className="my-4 border-t border-gray-700"></div>
            <p>
              Full-stack blog website. Gives users the ability to start
              conversations about anything and everything. App is build with
              Next.js and PostgreSQL.
            </p>
            <div className="my-4 border-t border-gray-700"></div>
            <div className="flex flex-wrap gap-1 justify-center">
              <FaHtml5 className={styles.iconSmall} />
              <FaCss3Alt className={styles.iconSmall} />
              <IoLogoJavascript className={styles.iconSmall} />
              <RiNextjsFill className={styles.iconSmall} />
              <RiTailwindCssFill className={styles.iconSmall} />
              <SiPostgresql className={styles.iconSmall} />
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

