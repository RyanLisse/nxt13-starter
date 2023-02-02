import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="max-w-3xl px-4 mx-auto sm:px-6 md:max-w-5xl ">
      <hr className="mx-auto mt-8 h-0.5 w-full border-0 bg-neutral-200"></hr>
      <div className="flex flex-col p-4 mx-auto text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2023 Ryan Lisse<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center mb-1 space-x-2">
          <a
            href="https://github.com/ryanlisse"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="transition-transform cursor-pointer text-neutral-500 hover:-translate-y-1 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/ryanlisse"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="transition-transform cursor-pointer text-neutral-500 hover:-translate-y-1 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/ryanlisse/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="transition-transform cursor-pointer text-neutral-500 hover:-translate-y-1 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/ryanlisse"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="transition-transform cursor-pointer text-neutral-500 hover:-translate-y-1 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;