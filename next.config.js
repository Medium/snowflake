module.exports = {
  target: "serverless",
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
};
