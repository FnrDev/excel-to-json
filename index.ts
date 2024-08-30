import * as XLSX from 'xlsx';
import * as fs from 'node:fs';

function readExcelFile(filePath: string): any[] {
    // Read the Excel file
    const workbook = XLSX.readFile(filePath);

    // Get the first sheet name (assuming it's always the first one)
    const sheetName = workbook.SheetNames[0];

    // Get the sheet data
    const worksheet = workbook.Sheets[sheetName];

    // Convert sheet data to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: null });

    return jsonData;
}

function writeJsonFile(data: any[], outputPath: string): void {
    // Convert data to JSON string
    const jsonString = JSON.stringify(data, null, 2);

    // Write JSON string to a file
    fs.writeFileSync(outputPath, jsonString, 'utf8');
}

// Example usage
const excelFilePath = './Item.xlsx'; // Path to the uploaded Excel file
const jsonOutputPath = './output.json'; // Path where you want to save the JSON

const jsonData = readExcelFile(excelFilePath);
writeJsonFile(jsonData, jsonOutputPath);

console.log('Excel data has been successfully converted to JSON and saved to', jsonOutputPath);
