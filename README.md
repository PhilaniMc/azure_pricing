# azure_pricing_cost
# Description:
This Node.js script retrieves pricing data for Azure resources from the Azure Pricing API and saves it to a CSV file named azure_prices.csv.

# Requirements:
Node.js installed on your system
npm (Node Package Manager) installed on your system

# Setup:
Clone or download the script file to your local machine.
Navigate to the directory containing the script file in your terminal or command prompt.
Install the required dependencies by running the following command:

npm install node-fetch

Run the script using the following command:

node azure_prices.js

# Usage:
Upon running the script, it will fetch pricing data from the Azure Pricing API and save it to a CSV file named azure_prices.csv in the same directory as the script.
The CSV file will contain columns for various pricing attributes such as SKU, retail price, region, product name, etc.

# Note:
Ensure that you have an active internet connection to fetch data from the Azure Pricing API.
If any errors occur during the execution of the script, they will be logged to the console.
