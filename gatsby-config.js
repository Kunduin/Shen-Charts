module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-less`,
      options: {
        theme: {
            "layout-body-background": "white",
            "border-radius-base":"10px"
        },
      },
    },
    {
        resolve: 'gatsby-plugin-antd',
        options: {
          style: true
        }
    },
  ],
};