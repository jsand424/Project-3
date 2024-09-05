// Build the metadata panel. Used ChatGTP to understand and receive sample codes. 
function buildMetadata(providerID) {
  // Load the hospital data CSV file
  d3.csv("../../hospital_data_cleaned.csv").then((data) => {

    // Filter the data for the object with the desired Provider_ID
    let result = data.filter(providerObj => providerObj.Provider_ID == providerID)[0];

    // Log the result to the console
    console.log(result);

    // Use d3 to select the panel with id of `#provider-metadata`
    let metadataPanel = d3.select("#provider-metadata");

    // Use `.html("") to clear any existing metadata
    metadataPanel.html("");

    // Loop through the filtered data and append key-value pairs to the panel
    Object.entries(result).forEach(([key, value]) => {
      metadataPanel.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}

// Function to build both charts for hospital data
function buildCharts(providerID) {
    d3.csv("../../hospital_data_cleaned.csv").then((data) => {
  
      // Filter the data for the object with the desired Provider_ID
      let result = data.filter(providerObj => providerObj.Provider_ID == providerID)[0];
  
      // Get relevant fields for the chart (adjust based on your data columns)
      let measureNames = result.Measure_Name.split(";");  // Assuming multiple measures are separated by semicolons
      let scores = result.Score.split(";");  // Assuming corresponding scores are separated by semicolons
  
      // Creating a horizontal bar chart. For the Bar Chart, map the measures and their corresponding scores
      let yticks = measureNames.slice(0, 10).reverse();  // Limit to top 10 measures
      
      // Build a Bar Chart
      let barData = [
        {
          y: yticks,
          x: scores.slice(0, 10).map(Number).reverse(),  // Ensure scores are numbers
          text: yticks,
          type: 'bar',
          orientation: 'h'
        }
      ];
    
      let barLayout = {
        title: 'Top 10 Performance Measures',
        xaxis: { 
          title: 'Score',  // Set x-axis label
          range: [0, 100]  // Adjust the x-axis range as per your data (assuming score out of 100)
        },
        margin: { t: 30, l: 150 }
      };
    
      // Render the Bar Chart
      Plotly.newPlot('bar', barData, barLayout);
    });
  }
  
  // Function to run on page load
  function init() {
    d3.csv("../../hospital_data_cleaned.csv").then((data) => {
  
      // Get the list of Provider_IDs (assuming Provider_ID is unique for each hospital)
      let providerIDs = data.map(d => d.Provider_ID);
  
      // Use d3 to select the dropdown with id of `#selDataset`
      let dropdown = d3.select("#selDataset");
  
      // Use the list of provider IDs to populate the select options.
      providerIDs.forEach((providerID) => {
        dropdown.append("option").text(providerID).property("value", providerID);
      });
  
      // Get the first provider from the list
      let firstProvider = providerIDs[0];
      
      // Build charts and metadata panel with the first provider
      buildCharts(firstProvider);
      buildMetadata(firstProvider);
  
    });
  }
  
  // Function for event listener when a new provider is selected
  function optionChanged(newProvider) {
    // Build charts and metadata panel each time a new provider is selected
    buildCharts(newProvider);
    buildMetadata(newProvider);
  }
  
  // Initialise the dashboard
  init();
  
  // Function to build the metadata panel for hospital data
  function buildMetadata(providerID) {
    d3.csv("../../hospital_data_cleaned.csv").then((data) => {
  
      // Filter the data for the object with the desired Provider_ID
      let result = data.filter(providerObj => providerObj.Provider_ID == providerID)[0];
  
      // Log the result to the console
      console.log(result);
  
      // Use d3 to select the panel with id of `#provider-metadata`
      let metadataPanel = d3.select("#provider-metadata");
  
      // Use `.html("") to clear any existing metadata
      metadataPanel.html("");
  
      // Loop through the filtered data and append key-value pairs to the panel
      Object.entries(result).forEach(([key, value]) => {
        metadataPanel.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
    });
  }
  
