// dashboard.js

// Initialize Web Worker
const worker = new Worker('dataWorker.js');

// Function to fetch data from API
function fetchData(apiUrl) {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Send data to worker for processing
            worker.postMessage(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Function to display processed data on the dashboard
function displayData(processedData) {
    const dataDisplayElement = document.getElementById('dataDisplay');
    dataDisplayElement.innerHTML = ''; // Clear previous data
    const tableHeaderRow = document.createElement('tr');
    const headers = Object.keys(processedData[0]); // Get column headers dynamically
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        tableHeaderRow.appendChild(th);
    });
    dataDisplayElement.appendChild(tableHeaderRow);
    // Display processed data on the dashboard
    processedData.forEach(row => {
        const tableRow = document.createElement('tr');
        headers.forEach(header => {
            const td = document.createElement('td');
            td.textContent = row[header];
            tableRow.appendChild(td);
        });
        dataDisplayElement.appendChild(tableRow);
    });
}

// Event listener for messages from the worker
worker.onmessage = function(event) {
    const processedData = event.data; // Processed data received from worker
    // Display processed data on the dashboard
    displayData(processedData);
};

// Extract latitude and longitude from the input URL
const apiUrl = 'https://api.open-meteo.com/v1/cma?latitude=52.5625&longitude=13.375&hourly=temperature_2m';

// Fetch data from the provided API URL using Web Worker
fetchData(apiUrl);
