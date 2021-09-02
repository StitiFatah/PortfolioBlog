import Head from "next/head";
import Link from "next/link";
import CommonHome from "../components/common_index";
import Date from "../components/dates";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

const posts_directory = "posts/en";
const lang = "en";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData(posts_directory);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return <CommonHome post_data={allPostsData} lang={lang} />;
}
