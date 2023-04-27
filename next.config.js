/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

// module.exports = {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.scss$/,
//       use: [
//         {
//           loader: "sass-loader",
//           options: {
//             sourceMap: true,
//             sassOptions: {
//               includePaths: ["./node_modules"],
//             },
//           },
//         },
//       ],
//     });
//     return config;
//   },
//   experimental: {
//     appDir: true,
//   },
// };
