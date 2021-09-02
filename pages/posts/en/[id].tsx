import Head from "next/head";
import CommonPost from "../../../components/common_id_posts";
import { getAllPostIds, getPostData } from "../../../lib/posts";

const posts_directory = "posts/en";
const lang = "en";

export async function getStaticPaths() {
  const paths = getAllPostIds(posts_directory);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id, posts_directory);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return <CommonPost post_data={postData} lang={lang} />;
}
