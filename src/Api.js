import pf from "petfinder-client";

// Common API used to fetch data from Petfinder

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export default petfinder;
