// dataWorker.js

// Listen for messages from the main thread
onmessage = function(event) {
    const data = event.data; // Data received from main thread
    const processedData = processData(data); // Process the data
    postMessage(processedData); // Send processed data back to the main thread
};

// Function to process data
function processData(data) {
    const processedData = [];
    const times = data.hourly.time;
    const temperatures = data.hourly.temperature_2m;
    for (let i = 0; i < times.length; i++) {
        processedData.push({ time: times[i], temperature_2m: temperatures[i] });
    }
    return processedData;
}
