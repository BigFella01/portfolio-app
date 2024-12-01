import { Divider, Link } from "@nextui-org/react";

export default function ResumePage() {
  return (
    <div className="px-8 py-8 my-8 max-w-[1024px] w-full mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Hayden Jenkins</h1>
        <h2 classname="text-xl text-gray-500">Full-Stack Web Developer</h2>
        <p className="mt-2 text-gray-500">
          (731) 879 9189 | Haydenj637@gmail.com |
          <Link
            href="https://www.linkedin.com/in/hayden-jenkins-50aa95204/"
            className="text-purple-300 hover:underline"
          >
            LinkedIn
          </Link>
          |
          <Link
            href="https://github.com/BigFella01"
            className="text-purple-300 hover:underline"
          >
            GitHub
          </Link>
        </p>
      </div>

      <h3 className="mt-6 text-lg font-semibold text-purple-300">EDUCATION</h3>
      <div className="mt-2">
        <p className="font-medium">
          University of Massachusetts Lowell, Lowell, MA
        </p>
        <p>Bachelor’s Degree, Information Technology</p>
        <p className="text-gray-500">September 2024 - Present</p>

        <p className="font-medium mt-2">Pensacola State College, Pensacola, FL</p>
        <p>Associate’s Degree, Business Administration</p>
        <p className="text-gray-500">August 2019 - May 2022</p>

        <p className="font-medium mt-2">General Assembly</p>
        <p>Front-End Web Development Certification</p>
        <p className="text-gray-500">September 2022 - December 2022</p>
      </div>

      <h3 className="mt-6 text-lg font-semibold text-purple-300">
        PROFESSIONAL EXPERIENCE
      </h3>
      <div className="mt-2">
        <p className="font-medium">Bank of New England, Salem, NH</p>
        <p>Teller</p>
        <p className="text-gray-500">August 2024 - Present</p>
        <ul className="list-disc list-inside mt-1 text-gray-500">
          <li>
            Handling deposits, withdrawals, and transfers accurately and
            efficiently.
          </li>
          <li>
            Assisting customers with their banking needs, answering questions,
            and resolving issues.
          </li>
          <li>
            Managing cash drawers, counting money, and balancing cash at the end
            of shifts.
          </li>
          <li>
            Opening and closing accounts, processing loan applications, and
            maintaining customer records.
          </li>
          <li>
            Ensuring adherence to banking regulations and internal policies,
            including identification verification.
          </li>
        </ul>

        <p className="font-medium mt-4">Regions Bank, Pensacola, FL</p>
        <p>Relationship Banker I</p>
        <p className="text-gray-500">October 2021 - January 2023</p>
        <ul className="list-disc list-inside mt-1 text-gray-500">
          <li>
            Handling deposits, withdrawals, and transfers accurately and
            efficiently.
          </li>
          <li>
            Assisting customers with their banking needs, answering questions,
            and resolving issues.
          </li>
          <li>
            Managing cash drawers, counting money, and balancing cash at the end
            of shifts.
          </li>
          <li>
            Opening and closing accounts, processing loan applications, and
            maintaining customer records.
          </li>
          <li>
            Ensuring adherence to banking regulations and internal policies,
            including identification verification.
          </li>
        </ul>

        <p className="font-medium mt-4">Ron Jon Surf Shop, Pensacola, FL</p>
        <p>Stock Associate</p>
        <p className="text-gray-500">April 2019 - September 2021</p>
        <ul className="list-disc list-inside mt-1 text-gray-500">
          <li>
            Unloading and inspecting incoming merchandise for quality and
            accuracy.
          </li>
          <li>
            Organizing and replenishing products on shelves, ensuring proper
            placement and visibility.
          </li>
          <li>
            Monitoring stock levels, conducting regular inventory counts, and
            reporting discrepancies.
          </li>
          <li>Keeping the stockroom and sales floor organized and tidy.</li>
          <li>
            Helping customers locate products and answering questions when
            needed.
          </li>
        </ul>
      </div>

      <h3 className="mt-6 text-lg text-purple-300 font-semibold">
        SKILLS & ACHIEVEMENTS
      </h3>
      <p className="mt-2 text-gray-500">
        HTML5 | CSS3 | Tailwind | JavaScript | React | Next.js | PostgreSQL |
        Version Control (GitHub)
      </p>

      <h3 className="mt-6 text-lg font-semibold">Projects</h3>
      <div className="mt-2">
        <p className="font-medium">Discuss</p>
        <Link
          href="https://chatter-one-brown.vercel.app"
          className="text-purple-500 hover:underline"
          isExternal
        >
          https://chatter-one-brown.vercel.app
        </Link>
        <p className="text-gray-500">
          Full-stack web application that enables users to have conversations about anything. Features OAuth 2.0 login with Google
        </p>

        <p class="font-medium mt-4">Cruise Control</p>
        <Link
          href="https://cruise-control-psi.vercel.app"
          className="text-purple-500
          hover:underline"
          isExternal
        >
          https://cruise-control-psi.vercel.app
        </Link>
        <p className="text-gray-500">
          Full stack web application with React, Redux, and Supabase PostgreSQL
          for bicycle rentals.
        </p>

        <p class="font-medium mt-4">Pure Palate 2.0</p>
        <Link
          href="https://purepalate2-0-psi.vercel.app"
          className="text-purple-500 hover:underline"
          isExternal
        >
          https://purepalate2-0-psi.vercel.app
        </Link>
        <p className="text-gray-500">
          Full-stack web application built with Next.js, Tailwind, and
          PostgreSQL featuring OAuth 2.0.
        </p>
      </div>
    </div>
  );
}
