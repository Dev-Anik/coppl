{
    {
      // Your API KEY
      const API_KEY = "AIzaSyBb98SIULHZ423gnWkXzxTs9aCinLj9C80";
      function displayResult4(response) {
        let marqSection=document.querySelector(".marq-wrapper");
        let newDiv="";
     let mData=response;
     console.log(mData);
    mData.forEach(element => {
     element.forEach((value,index)=>{
        if(index==0){
            newDiv +=`<p class="marquee-text red">${value}</p>`
        }
 
       });
    });
    marqSection.innerHTML=newDiv;
  }


      function loadNoticeData() {
        // Spreadsheet ID
        const spreadsheetId = "1Uao0UI2MVzqzW3m4qJjNPKccBGA9WkQlmuh78YV9jwE";
        const sheetName = "Notice"; // Replace with the actual sheet tab name
        const range = `${sheetName}!A2:Z`;
        getPublicValues({ spreadsheetId, range }, displayResult4);
      }

      window.addEventListener("load", (e) => {
        initOAuthClient({ apiKey: API_KEY });
      });

      document.addEventListener("gapi-loaded", (e) => {
        loadNoticeData();
      });

    }
}