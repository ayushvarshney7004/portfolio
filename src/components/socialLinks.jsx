import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ayushvarshney7004@gmail.com",
    },
    {
      id: 3,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/ayushvarshney7004",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map((e) => (
          <li
            key={e.id}
            className={
              "flex jsutify-between items-center w-40 h-14 px-4 bg-gray ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 " +
              "" +
              e.style
            }
          >
            <a
              href={e.href}
              className="flex justify-between items-enter w-full text-white "
              download={e.download}
              target="_blank"
              rel="noreferrer"
            >
              {e.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
