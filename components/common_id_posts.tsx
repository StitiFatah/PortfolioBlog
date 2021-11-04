import React from "react";
import Head from "next/head";
import Date from "./dates";
import Layout from "./layout";
import style from "../styles//utils.module.css";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import TitleIndexs from "./title_indexs";

export default function CommonPost({ post_data, lang }) {
  //React.useEffect(() => {
  //const h2s: any[] = document.querySelectorAll("h2");
  //for (let element of h2s) {
  //console.log(element.innerText);
  //}
  //}, []);

  return (
    <>
      <Head>
        <title>{post_data.title}</title>
      </Head>
      <article className="prose dark:prose-dark">
        <h1
          className={`${style.PostDataTitle} mb-0'`}
          style={{ marginBottom: 0 }}
        >
          {post_data.title}
        </h1>
        <div className="mb-4">
          <Date
            className={`${style.PostDateTime} text-gray-700 dark:text-green-200 `}
            dateString={post_data.date}
          />
        </div>

        <div className="mb-4">
          <TitleIndexs />
        </div>

        {/* <div dangerouslySetInnerHTML={{ __html: post_data.contentHtml }} /> */}
        <ReactMarkdown
          linkTarget="_blank"
          components={{
            code({ className, children }) {
              // Removing "language-" because React-Markdown already added "language-"
              const language = className.replace("language-", "");
              return (
                <SyntaxHighlighter style={materialDark} language={language}>
                  {children[0]}
                </SyntaxHighlighter>
              );
            },
          }}
        >
          {post_data.contentMarkdown}
        </ReactMarkdown>
      </article>
    </>
  );
}
