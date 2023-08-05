import React from "react";
import { UnsplashImage } from "../models/unsplash-image";

const StaticPage = async () => {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );

  const image: UnsplashImage = await response.json();
};

export default StaticPage;
