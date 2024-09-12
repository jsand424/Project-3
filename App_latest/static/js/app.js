// Function to populate the State dropdown
function populateDropdowns(data) {
  let stateDropdown = d3.select("#selState");

  // Get unique states
  let uniqueStates = [...new Set(data.map(d => d["State"]))];

  // Populate State dropdown
  uniqueStates.forEach(state => {
    stateDropdown.append("option").text(state).property("value", state);
  });
}

// Function to build both charts for hospital data
function buildCharts(providerID, data) {
  // Filter the data for the object with the desired Provider_ID
  let result = data.filter(providerObj => providerObj["Provider ID"] == providerID);

  // Get relevant fields for the chart (Measure Name and Score)
  let measureNames = result.map(d => d["Measure Name"]);
  let scores = result.map(d => +d.Score);  // Convert score to number

  // Creating a horizontal bar chart
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
    xaxis: { title: 'Score', range: [0, Math.max(...scores)] },
    yaxis: { tickfont: { size: 8 } },
    margin: { t: 30, l: 150 }
  };

  // Render the Bar Chart
  Plotly.newPlot('bar', barData, barLayout);
}

// Function to build the metadata panel for hospital data
function buildMetadata(providerID, data) {
  let result = data.filter(providerObj => providerObj["Provider ID"] == providerID)[0];

  let metadataPanel = d3.select("#provider-metadata");
  metadataPanel.html("");

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

  Object.entries(fieldsToShow).forEach(([key, value]) => {
    metadataPanel.append("h6").text(`${key}: ${value}`);
  });
}

// Function to filter providers based on selected state
function filterProviders(data) {
  let selectedState = d3.select("#selState").property("value");

  // Filter data based on selected state
  let filteredData = data.filter(d =>
    (selectedState === "" || d["State"] === selectedState)
  );

  // Get unique Provider IDs from filtered data
  let providerIDs = [...new Set(filteredData.map(d => d["Provider ID"]))];

  // Populate Provider dropdown
  let providerDropdown = d3.select("#selDataset");
  providerDropdown.html("");  // Clear existing options
  providerIDs.forEach(providerID => {
    providerDropdown.append("option").text(providerID).property("value", providerID);
  });

  // Build charts and metadata for the first provider in the filtered list
  let firstProvider = providerIDs[0];
  buildCharts(firstProvider, data);
  buildMetadata(firstProvider, data);
}

// Function to initialize the dashboard
function init() {
  d3.csv("../../SIR.csv").then((data) => {
    // Populate State dropdown
    populateDropdowns(data);

    // Set up event listener for State dropdown
    d3.select("#selState").on("change", () => filterProviders(data));

    // Initialize the dashboard with the full list of providers
    filterProviders(data);
  });
}

// Event listener for provider dropdown
function optionChanged(newProvider) {
  d3.csv("../../SIR.csv").then((data) => {
    buildCharts(newProvider, data);
    buildMetadata(newProvider, data);
  });
}

// Initialize the dashboard on page load
init();
