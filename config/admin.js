module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '63937e6e5a57d4136836f2e3f9072ccf'),
  },
});
