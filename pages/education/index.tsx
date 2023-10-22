import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../../components/container";
import HeroPost from "../../components/hero-post";
import Layout from "../../components/layout";
import { getPostsByCategory } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import MoreStories from "../../components/more-stories";
import Intro from "../../components/intro";

export default function EducationIndex({ categoryPosts: { edges } }) {
  const latestPosts = edges.slice(0, 3); // Get the first 3 posts
  const heroPost = latestPosts[0]?.node;
  const morePosts = latestPosts.slice(1);

  // Get all the remaining posts for the MoreStories component
  const remainingPosts = edges.slice(3);

  return (
    <Layout>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <div className="max-w-7xl mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.featuredImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />

              {morePosts.map(({ node }) => (
                <HeroPost
                  key={node.slug}
                  title={node.title}
                  coverImage={node.featuredImage}
                  date={node.date}
                  author={node.author}
                  slug={node.slug}
                  excerpt={node.excerpt}
                />
              ))}
            </ul>
          </div>
        )}
        {remainingPosts.length > 0 && <MoreStories posts={remainingPosts} />}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const categoryName = "education"; // Replace with your chosen category name
  const categoryPosts = await getPostsByCategory(categoryName);

  return {
    props: { categoryPosts, preview },
    revalidate: 10,
  };
};
