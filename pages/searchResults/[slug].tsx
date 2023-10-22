import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import Tags from '../../components/tags'
import { searchPostsByKeywords } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'

export default function Post({ post, morePosts }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`${post.title} | Next.js Blog Example with ${CMS_NAME}`}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false, previewData }) => {
  // Fetch the post data based on the slug
  const searchQuery = params.slug || "";
  const searchResults = await searchPostsByKeywords(searchQuery);
  const post = searchResults[0]; // Assuming you are retrieving a single post

  // Fetch more posts (e.g., for "More Stories" section)
  const morePosts = searchResults.slice(1);

  return {
    props: {
      preview,
      post,
      morePosts,
    },
    revalidate: 10,
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const router = useRouter();
  const searchQuery = router.query.query || ""; // Fetch the search query from the URL

  // Fetch search results based on the search query
  const searchResults = await searchPostsByKeywords(searchQuery);

  // Generate paths from the search results
  const paths = searchResults?.edges.map(({ node }) => `/searchResults/${node.slug}`) || [];

  return {
    paths,
    fallback: true, // Adjust the fallback behavior as needed
  };
}
