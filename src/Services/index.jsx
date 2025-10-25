const images = require.context("../assets/images", true);
export  const dynamicImage = (image) => {
  return images(`./${image}`);
};