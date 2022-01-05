module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi_commerce'),
      user: env('DATABASE_USERNAME', 'strapi_commerce'),
      password: env('DATABASE_PASSWORD', 'XDMd1gq3VOVZBGw4DhK81RyqOrjIbXIL'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
