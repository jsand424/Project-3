// Function to build the metadata panel for hospital data
function buildMetadata(providerID) {
  d3.csv("../../SIR.csv").then((data) => {

    // Filter the data for the object with the desired Provider_ID
    let result = data.filter(providerObj => providerObj["Provider ID"] == providerID)[0];

    // Log the result to the console
    console.log(result);

    // Use d3 to select the panel with id of `#provider-metadata`
    let metadataPanel = d3.select("#provider-metadata");

    // Use `.html("")` to clear any existing metadata
    metadataPanel.html("");

    // Define the fields to display (excluding Measure Name and Measure ID)
    let fieldsToShow = {
      "PROVIDER ID": result["Provider ID"],
      "HOSPITAL NAME": result["Hospital Name"],
      "ADDRESS": result["Address"],
      "CITY": result["City"],
      "STATE": result["State"],
      "ZIP CODE": result["ZIP Code"],
      "COUNTY NAME": result["County Name"],
      "PHONE NUMBER": result["Phone Number"]
    };

    // Loop through the filtered data and append key-value pairs to the panel
    Object.entries(fieldsToShow).forEach(([key, value]) => {
      metadataPanel.append("h6").text(`${key}: ${value}`);
    });
  });
}


// Function to build both charts for hospital data
function buildCharts(providerID) {
  d3.csv("../../SIR.csv").then((data) => {

    // Filter the data for the object with the desired Provider_ID
    let result = data.filter(providerObj => providerObj["Provider ID"] == providerID);

    // Get relevant fields for the chart (Measure Name and Score)
    let measureNames = result.map(d => d["Measure Name"]);
    let scores = result.map(d => +d.Score);  // Convert score to number

    // Creating a horizontal bar chart. For the Bar Chart, map the measures and their corresponding scores
    let yticks = measureNames.slice(0, 10).reverse();  // Limit to 10 measures
    
    // Build a Bar Chart
    let barData = [
      {
        y: yticks,
        x: scores.slice(0, 10).reverse(),  // Ensure scores are numbers
        text: yticks,
        type: 'bar',
        orientation: 'h'
      }
    ];
  
    let barLayout = {
      title: 'Performance Measures based on SIR',
      xaxis: { 
        title: 'Score',  // Set x-axis label
        range: [0, Math.max(...scores)]  // Adjust the x-axis range as per your data
      },
      yaxis: {
        tickfont: {
          size: 8  // Adjust the font size here (change 14 to any desired size)
        }
      },
      margin: { t: 30, l: 150 }
    };
  
    // Render the Bar Chart
    Plotly.newPlot('bar', barData, barLayout);
  });
}


// Function to run on page load
function init() {
d3.csv("../../SIR.csv").then((data) => {

  // Get the list of unique states
  let states = [...new Set(data.map(d => d["State"]))];

  // Populate the state dropdown
  let stateDropdown = d3.select("#selState");
  states.forEach((state) => {
    stateDropdown.append("option").text(state).property("value", state);
  });

  // Get the first state from the list and filter hospitals
  let firstState = states[0];
  updateHospitalDropdown(firstState, data);
  
  // Get the first provider for the first state
  let firstProvider = data.filter(d => d["State"] == firstState)[0]["Provider ID"];
  
  // Build charts and metadata panel with the first provider
  buildCharts(firstProvider);
  buildMetadata(firstProvider);
});
}

// Function to update hospital dropdown based on state selection
function updateHospitalDropdown(selectedState, data) {
// Filter hospitals by state
let providerIDs = [...new Set(data.filter(d => d["State"] == selectedState).map(d => d["Provider ID"]))];

// Clear the existing options
let hospitalDropdown = d3.select("#selDataset");
hospitalDropdown.html("");

// Populate the hospital dropdown
providerIDs.forEach((providerID) => {
  hospitalDropdown.append("option").text(providerID).property("value", providerID);
});

// Get the first provider in the filtered list and update charts and metadata
let firstProvider = providerIDs[0];
buildCharts(firstProvider);
buildMetadata(firstProvider);
}

// Function for event listener when a new provider is selected
function optionChanged(newProvider) {
buildCharts(newProvider);
buildMetadata(newProvider);
}

// Function for event listener when a new state is selected
function stateChanged(newState) {
d3.csv("../../SIR.csv").then((data) => {
  updateHospitalDropdown(newState, data);
});
}

// Initialise the dashboard
init();


  