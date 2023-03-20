# Historical Equity Dashboard App

![Wireframe sketch](https://github.com/ojigs/historical-equity-dashboard/blob/main/historical-equity-dashboard.jpg?raw=true)

This project is a Node.js and React application that connects to the Metatrader5 platform and extracts equity, balance, and market watch time data. The data is collected every minute and saved to MongoDB using Mongoose. The data is then retrieved from MongoDB and transmitted to React in real time. This allows us to build a live dashboard in React and present it in a chart format.

## Prerequisites

- Node.js
- Express
- Python
- MongoDB
- React

## Installation

1. Clone this repository
2. Install dependencies: `npm install`
3. Start the client server: `npm start`
5. Start the api server: `npm start`
4. Open http://localhost:3000/ in your browser

## Usage

The application will automatically collect and save the data from Metatrader5 to MongoDB every minute. The data is then retrieved from MongoDB and transmitted to React in real time. This allows us to build a live dashboard in React and present it in a chart format. The chart can be zoomed in to get more detailed information. Also, note that you will need to have a credentials file that supplies login details for the MetaTrader Platform. For connection to more than one accounts, you will have to make copies of the MetaTrader app instances in your local machine. Contact the developer if you need more clarity.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
