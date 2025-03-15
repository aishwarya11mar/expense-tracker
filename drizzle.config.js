export default {
  schema: "./utils/schema.jsx",
  // driver: 'pg',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
};
