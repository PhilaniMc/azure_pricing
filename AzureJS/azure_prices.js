const fs = require('fs');
const fetch = require('node-fetch');

const originalLink = "https://prices.azure.com/api/retail/prices";

async function myFunction() {
    try {
        const response = await fetch(originalLink);
        const data = await response.json();

        const csvHeader = "armSkuName,skuId,meterName,productName,location,armRegionName,retailPrice,unitOfMeasure,serviceName,serviceId,serviceFamily,currencyCode,tierMinimumUnits,unitPrice,effectiveStartDate,meterId,productId,skuName,type,isPrimaryMeterRegion\n";

        let csvContent = csvHeader;

        for (const element of data.Items) {
            const item = element;
            const row = [
                item.armSkuName,
                item.skuId,
                item.meterName,
                item.productName,
                item.location,
                item.armRegionName,
                item.retailPrice,
                item.unitOfMeasure,
                item.serviceName,
                item.serviceId,
                item.serviceFamily,
                item.currencyCode,
                item.tierMinimumUnits,
                item.unitPrice,
                item.effectiveStartDate,
                item.meterId,
                item.productId,
                item.skuName,
                item.type,
                item.isPrimaryMeterRegion
            ].join(",") + "\n";

            csvContent += row;
        }

        fs.writeFileSync('azure_prices.csv', csvContent);
        console.log('CSV file created successfully.');

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

myFunction();