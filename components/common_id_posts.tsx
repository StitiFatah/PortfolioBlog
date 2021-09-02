import Head from "next/head";
import Date from "./dates";
import Layout from "./layout";
import style from "../styles//utils.module.css";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CommonPost({ post_data, lang }) {
  return (
    <>
      <Head>
        <title>{post_data.title}</title>
      </Head>
      <article>
        <h1 className={`${style.PostDataTitle}`}>{post_data.title}</h1>
        <div>
          <Date
            className={`${style.PostDataTime} text-gray-700 dark:text-green-200`}
            dateString={post_data.date}
          />
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: post_data.contentHtml }} /> */}
        <ReactMarkdown
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
