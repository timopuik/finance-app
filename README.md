
## About

This is a coding test assignment to use `purify-ts` library and its features to fetch and validate financial data from some API providing such service. In this case, I chose Alpha Vantage (`https://alphavantage.co`). Before setting up the actual code, one needs to claim an API key from the site: `https://www.alphavantage.co/support/#api-key`

The project was done utilizing a boilerplate typescript express template and create-react-app.
  

## How to use:

  
 1. Clone this git repository
 2. Open the project's `src/services/QuoteService.ts` file in your preferred editor and on row 5, set the Alpha Vantage API Key obtained a second ago as the value of variable `ALPHA_VANTAGE_API_KEY`.
 3. In the root folder, run `npm install`
 4. After everything has been installed, run `npm run dev` in the same folder. This starts the backend server locally, running at `https://localhost:3000`.
 5. Then open up another terminal and from the root folder type `cd src/public/frontend` and there run `npm run start` to start the frontend. As the backend is already running on port 3000, it prompts `Would you like to run the app on another port instead?`, type in `y`. It should then start running on port 3001.
 6. Open your favorite browser and go to `https://localhost:3001`, and type a ticker/quote of a NYSE listed stock and press search. If you don't know the tickers, take a peek at for example here: `https://eoddata.com/symbols.aspx`.
 
