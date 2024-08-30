"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XLSX = require("xlsx");
var fs = require("node:fs");
function readExcelFile(filePath) {
    // Read the Excel file
    var workbook = XLSX.readFile(filePath);
    // Get the first sheet name (assuming it's always the first one)
    var sheetName = workbook.SheetNames[0];
    // Get the sheet data
    var worksheet = workbook.Sheets[sheetName];
    // Convert sheet data to JSON
    var jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: null });
    return jsonData;
}
function writeJsonFile(data, outputPath) {
    // Convert data to JSON string
    var jsonString = JSON.stringify(data, null, 2);
    // Write JSON string to a file
    fs.writeFileSync(outputPath, jsonString, 'utf8');
}
// Example usage
var excelFilePath = './Item.xlsx'; // Path to the uploaded Excel file
var jsonOutputPath = './output.json'; // Path where you want to save the JSON
var jsonData = readExcelFile(excelFilePath);
writeJsonFile(jsonData, jsonOutputPath);
console.log('Excel data has been successfully converted to JSON and saved to', jsonOutputPath);
