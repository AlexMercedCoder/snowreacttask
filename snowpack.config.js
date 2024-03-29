module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-sass',
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    knownEntrypoints: {
      /* ... */
    }
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
