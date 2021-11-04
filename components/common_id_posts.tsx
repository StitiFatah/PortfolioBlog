import React from "react";
import Head from "next/head";
import Date from "./dates";
import Layout from "./layout";
import style from "../styles//utils.module.css";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import TableContent from "./table_content";

export default function CommonPost({ post_data, lang }) {
  const [titleList, setTitleList] = React.useState([]);

  React.useEffect(() => {
    const h2s: HTMLHeadingElement[] = [...document.querySelectorAll("h2")];

    for (let i = 0; i < h2s.length; i++) {
      titleList.push(h2s[i].innerText);
      setTitleList([...titleList]);
      h2s[i].id = `h2-${i.toString()}`;
    }
  }, []);

  const hasTitles = () => (titleList.length > 0 ? true : false);

  return (
    <>
      <Head>
        <title>{post_data.title}</title>
      </Head>
      <div
        className=" prose md:prose-md lg:prose-lg 
          dark:prose-dark max-w-none w-full
          flex flex-col md:flex-row-reverse  md:justify-between
          "
      >
        {hasTitles() && (
          <div className="mb-4 w-full md:w-1/3 md:ml-4">
            <TableContent titleList={titleList} />
          </div>
        )}
        <div
          className={`
         w-full mb-4 
          ${hasTitles() && "md:w-2/3"} `}
        >
          <h1 className={`${style.PostDataTitle} mb-0'`}>{post_data.title}</h1>

          <div className="mb-4">
            <Date
              className={`${style.PostDateTime} text-gray-700 dark:text-green-200 `}
              dateString={post_data.date}
            />
            <span>
              {hasTitles() ? "has titles" : "no titles"} {titleList.length}
            </span>
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
        </div>
      </div>
    </>
  );
}
