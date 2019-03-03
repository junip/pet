# React Petfinder
A sample web app to search Pet using Petfinder API.

![Interface](petfinder.png?raw=true "Web App picture")

## Prerequisites

You are required to have [Node.js](https://nodejs.org/) installed to run the app locally.

## Getting Started

Install [petfinder-client](https://www.npmjs.com/package/petfinder-client) 
```
npm install petfinder-client --save
```

Register in [PetfinderAPI](https://www.petfinder.com/developers/api-key) to get API keys. Petfinder API allows you to search their database for available pets ready for adoption.

Make a new `.env` file and do the following

```
 API_KEY = your_api_key
 API_SECRET = your_api_secret
```

## Usage

```sh
# First install all the project dependencies.

# Now run the app
~/ npm run dev 

# app will run on port 1234