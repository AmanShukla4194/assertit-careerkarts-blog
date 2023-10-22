if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
  https://blog.careerkarts.com/graphql
  `);
}

const wordpressDomain = new URL(process.env.WORDPRESS_API_URL).hostname;

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      wordpressDomain, // Valid WP Image domain.
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'secure.gravatar.com',
    ],
  },
};
