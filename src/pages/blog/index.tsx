import { NextPage } from "next";
import Link from "next/link";

const BlogIndex: NextPage = () => {
  return (
    <>
      <div className="w-full h-[250px] bg-slate-400 text-center justify-center items-center">
        <h1 className="text-2xl">Blog index</h1>
      </div>
      <Link href="/blog/article1" className="">
        Mon premier article
      </Link>
    </>
  );
};

export default BlogIndex;
