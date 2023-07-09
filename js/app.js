function playerData(e){
  if(e==1 || e==2 || e==3 || e==4 || e==5 || e==6 || e==7 || e==8 || e==9 || e==10 || e==11){
    if(e==1){
      sessionStorage.setItem("sheetTab", "Anik Ahmed");
window.open("../player-details.html");
    }
    else if(e==2){
      sessionStorage.setItem("sheetTab", "Tonoy");
window.open("../player-details.html");
    }
    else if(e==3){
      sessionStorage.setItem("sheetTab", "Ariyan");
window.open("../player-details.html");
    }
    else if(e==4){
      sessionStorage.setItem("sheetTab", "Arafat");
window.open("../player-details.html");
    }
    else if(e==5){
      sessionStorage.setItem("sheetTab", "Ashraf");
window.open("../player-details.html");
    }
    else if(e==6){
      sessionStorage.setItem("sheetTab", "Mehedi");
window.open("../player-details.html");
    }
    else if(e==7){
      sessionStorage.setItem("sheetTab", "Munna");
window.open("../player-details.html");
    }
    else if(e==8){
      sessionStorage.setItem("sheetTab", "M. Anik");
window.open("../player-details.html");
    }
    else if(e==9){
      sessionStorage.setItem("sheetTab", "Sammo");
window.open("../player-details.html");
    }
    else if(e==10){
      sessionStorage.setItem("sheetTab", "Tanveer");
window.open("../player-details.html");
    }
    else if(e==11){
      sessionStorage.setItem("sheetTab", "Tayeb");
window.open("../player-details.html");
    }
  }
  else{
    location.reload();
  }
}






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
        const sheetName = sessionStorage.getItem("sheetTab"); // Replace with the actual sheet tab name
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