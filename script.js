// your code here
const button = document.getElementById("button");

button.addEventListener('click', (event)=>{
	event.preventDefault();
	var name =   document.getElementById("name").value;
    var year = document.getElementById("year").value;
	// Construct the query string based on the input values
      var queryString = "";

      if (name && year) {
        queryString = "?name=" + encodeURIComponent(name) + "&year=" + encodeURIComponent(year);
      } else if (name) {
        queryString = "?name=" + encodeURIComponent(name);
      } else if (year) {
        queryString = "?year=" + encodeURIComponent(year);
      }

	
	var h3 = document.getElementById("url");
	h3.textContent = "https://localhost:8080/" + queryString;
});