import { formatDistanceStrictWithOptions } from "date-fns/fp";
import Head from "next/head";
import Link from "next/link";
import Date from "../components/dates";
import Layout, { siteTitle } from "../components/layout";
import style from "../styles/utils.module.css";
import Description from "./description";
import * as React from "react";
import BlogCard from "./blogCard";

export default function CommonHome({ post_data, lang }) {
  const get_title = (lang, post) => {
    const anchor = (
      <a
        style={{ textDecoration: "none" }}
        className={`text-2xl text-purple-500 dark:text-purple-200 mb-2 `}
      >
        <h1 className={`${style.postTitle}`}>{post.title}</h1>
      </a>
    );

    if (lang === "fr") {
      return <Link href={`/posts/${post.id}`}>{anchor}</Link>;
    } else if (lang === "en") {
      return <Link href={`/posts/en/${post.id}`}>{anchor}</Link>;
    }
  };
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Description className="mb-16" lang={lang} />
      <div>
        <div className="">
          <div></div>
          <div className="flex flex-col justify-center">
            {post_data.map((post, index) => (
              <>
                <BlogCard
                  key={post.id}
                  lang={lang}
                  title={get_title(lang, post)}
                  date={post.date}
                  body={post.summary}
                  stack={post.stack || ["drf", "react", "celery", "tailwind"]}
                  link={{
                    href: post.link_href || "google.com",
                    name: post.link_name || "test",
                  }}
                  image={post.image}
                  className={"my-2"}
                />
              </>
            ))}
            {/* {post_data.map((post) => (
              <div className="flex flex-col justify-center my-4" key={post.id}>
                {get_title(lang, post)}
                <div className="text-sm mb-2">
                  <Date
                    className={`${style.postDate}  text-gray-600 dark:text-white`}
                    dateString={post.date}
                  />
                </div>
                <div
                  className={` ${style.potsSummary} text-gray-900 dark:text-white`}
                >
                  {post.summary}
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
}
