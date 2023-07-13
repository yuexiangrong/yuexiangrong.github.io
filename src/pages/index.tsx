import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const pageStyles = {
  // color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const aLinkClass =
  "relative after:content-[''] after:bg-[#69b1ff] after:bg-opacity-50 after:absolute after:top-[80%] after:h-1 after:w-full after:left-0 after:transition-all after:hover:h-full after:hover:top-0";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles} className="container max-w-[600px]">
      <h1 className="text-4xl font-semibold">Hello</h1>
      <p className="text-2xl my-4">I'm Russell Yue(岳向荣).</p>
      <p className="my-2">
        I am a front-end engineer, currently living in Shanghai. I define myself
        as a realist, a long-termist, and a lifelong learner.
      </p>
      <p className="my-2">
        我是一个前端工程师，目前在上海。
        我把自己定义为一个现实主义者、长期主义者和终身学习者。
      </p>
      <p className="">
        Nice to know you, you can contact me via the following:{" "}
      </p>
      <p className="">
        <a
          className={aLinkClass}
          href="mailto: yuexiangrong@foxmail.com"
          target="__blank"
        >
          yuexiangrong@foxmail.com
        </a>
        <br />
        <a
          href="https://juejin.cn/user/2436173499470167/posts"
          target="__blank"
          className={aLinkClass}
        >
          掘金
        </a>
        <span className="mr-2">,</span>
        <a
          href="https://github.com/yuexiangrong"
          target="__blank"
          className={aLinkClass}
        >
          GitHub
        </a>
        <span className="mr-2">,</span>
        <a
          href="https://www.jianshu.com/u/91f9b6cdd2de"
          target="__blank"
          className={aLinkClass}
        >
          简书
        </a>
      </p>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
