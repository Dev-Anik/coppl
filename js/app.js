{
    {
      // Your API KEY
      const API_KEY = "AIzaSyBb98SIULHZ423gnWkXzxTs9aCinLj9C80";
      function displayResult2(response) {
let tableHead = "";
let tableBody = "";

const maxColumns = response.result.values.reduce((max, row) => Math.max(max, row.length), 0);

response.result.values.forEach((row, index) => {
  if (index === 0) {
    tableHead += "<tr>";
    row.forEach((val) => (tableHead += "<th>" + val + "</th>"));

    // Add empty th elements for any missing columns
    for (let i = row.length; i < maxColumns; i++) {
      tableHead += "<th></th>";
    }

    tableHead += "</tr>";
  } else {
    tableBody += "<tr>";
    row.forEach((val) => (tableBody += "<td>" + val + "</td>"));

    // Add empty td elements for any missing columns
    for (let i = row.length; i < maxColumns; i++) {
      tableBody += "<td></td>";
    }

    tableBody += "</tr>";
  }
});

document.getElementById("table-head").innerHTML = tableHead;
document.getElementById("table-body").innerHTML = tableBody;
}


      function loadData() {
        // Spreadsheet ID
        const spreadsheetId = "1srNGi30VyczfQeBxJC_L5qF1WVENu104f-063eJL9Xo";
        const sheetName = "Ashraf"; // Replace with the actual sheet tab name
        const range = `${sheetName}!A:Z`;
        getPublicValues({ spreadsheetId, range }, displayResult2);
      }

      window.addEventListener("load", (e) => {
        initOAuthClient({ apiKey: API_KEY });
      });

      document.addEventListener("gapi-loaded", (e) => {
        loadData();
      });
    }
  }