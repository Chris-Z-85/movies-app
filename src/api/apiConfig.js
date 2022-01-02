const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "f01c17da8f59251f9a974b98d178d16d",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
