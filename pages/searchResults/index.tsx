import Head from "next/head";
import { GetServerSideProps, GetStaticProps } from "next";
import Container from "../../components/container";
import HeroPost from "../../components/hero-post";
import Layout from "../../components/layout";
import { CMS_NAME } from "../../lib/constants";
import MoreStories from "../../components/more-stories";
import Intro from "../../components/intro";
import { searchPostsByKeywords } from "../../lib/api";
// import { useRouter } from "next/router";

export default function SearchResults({ searchResults }) {
  
    if (!searchResults || !searchResults.edges || searchResults.edges.length === 0 ) {
    // Handle the case where there are no search results or invalid query
    return (
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'red' }}>No results found. Please enter a more specific keyword.</p>
        </Container>
      </Layout>
    );
  }
  
  const { edges } = searchResults;
  
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

              {morePosts.map((post) => (
                <HeroPost
                  key={post.slug}
                  title={post.title}
                  coverImage={post.featuredImage}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  excerpt={post.excerpt}
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

export const getServerSideProps: GetServerSideProps = async (context) => {

  const searchQuery = context.query.query || ""; // Fetch the search query from the URL

  if (!searchQuery) {
    // If no search query is provided, return null to indicate an invalid query
    return {
      props: { searchResults: null },
    };
  }

  // Fetch search results based on the search query
  const searchResults = await searchPostsByKeywords(searchQuery);

  // Check if searchResults is null and return an empty object
  if (searchResults === null) {
    return {
      props: {},
    };
  }

  return {
    props: { searchResults },
  };
};



