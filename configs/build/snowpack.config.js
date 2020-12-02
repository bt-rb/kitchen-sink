// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration
// Make sure to restart snowpack watch if you change this file.

module.exports = {
  mount: {
    frontend: '/dist',
    output: '/',
    public: '/'
  },
  plugins: [
    [
      '@snowpack/plugin-build-script',
      { cmd: 'postcss', input: ['.css'], output: ['.css'] }
    ]
  ],
  installOptions: {},
  devOptions: {},
  buildOptions: {}
}
