{
    {
      // Your API KEY
      const API_KEY = "AIzaSyBb98SIULHZ423gnWkXzxTs9aCinLj9C80";
      function displayResult2(response) {
        let tSection=document.querySelector(".tournament");
        let newDiv="";
     let tData=response.result.values;

    tData.forEach(element => {
        newDiv +=`<div class="col-sm-4">`;
    newDiv +=`<div class="t-details card">`;
     element.forEach((value,index)=>{
        if(index==0){
            newDiv +=`  <img src="https://drive.google.com/uc?export=view&id=${value}" class="card-img">`; 
            newDiv +=`<h5 class="card-header">Running Tournament</h5>`
            newDiv +=`  <div class="card-body">`
        }
        else if(index==1){
            newDiv +=`<h5 class="card-title">` + value + `</h5>`;
            newDiv +=`<div class="link-btn">`;
        }
       else if(index==2){
                newDiv +=`<a href="${value}" class="btn btn-primary">Match Fixture</a>`;
        }
        else if(index==3){
                newDiv +=`<a href="${value}" class="btn btn-primary">Match Scores</a>`;
        }
       else if(index==4){
                newDiv +=`<a href="${value}" class="btn btn-primary">Point Table</a>`;
                newDiv +="</div>";
        }
 
       });
       newDiv +="</div>";
       newDiv +="</div>";
       newDiv +="</div>";
    });
    tSection.innerHTML=newDiv;
  }


      function loadData() {
        // Spreadsheet ID
        const spreadsheetId = "1Uao0UI2MVzqzW3m4qJjNPKccBGA9WkQlmuh78YV9jwE";
        const sheetName = "Tournaments"; // Replace with the actual sheet tab name
        const range = `${sheetName}!A2:Z`;
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