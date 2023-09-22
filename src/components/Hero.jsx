import React from "react";

import { logo } from "../assets/icons";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <div className="flex justify-center items-center gap-x-4">
          <img src={logo} alt='sumz_logo' className='w-15 object-contain' />
          <span className="font-extrabold orange_gradient text-xl">ShortRead</span>
        </div>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Rohit-Patran/ai-article-summarizer-extractor", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize & Extract <br className='max-md:hidden'/> Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with ShortRead, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries with AI.
      </h2>
    </header>
  );
};

export default Hero;
