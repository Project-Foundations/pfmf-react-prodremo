const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: "http://localhost:3001/",
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "mfProducts",
          filename: "remoteEntry.js",
          exposes: {
            "./Products": "./src/products/pages/products.page",
            "./ProductsRoute": "./src/products/routes/products.route",
          },
          shared: {
            ...deps,
            tsconfig: {
              singleton: true,
            },
            layout: {
              singleton: true,
            },
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
            "react-router-dom": {
              singleton: true,
              requiredVersion: deps["react-router-dom"],
            }
          },
        }),
      ],
    },
  },
});
