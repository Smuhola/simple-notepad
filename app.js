document.getElementById("title").innerHTML = localStorage["title"] || "Title"; // default title
document.getElementById("text").innerHTML = localStorage["text"] || "Text"; // default text

function save() {
  // saves when save button pressed
  localStorage["title"] = document.getElementById("title").innerHTML; // title div
  localStorage["text"] = document.getElementById("text").innerHTML; // text div
  alert("Saved!");
}

function download() {

	// saving first 
	save();

  // data for creating txt file
  filename = document.getElementById("title").innerText;
  text = document.getElementById("text").innerText;

	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);

	element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);

}

function reset() {

  if (window.confirm("Are you sure you want to reset?")) {
    localStorage["title"] = "";
    localStorage["text"] = "";
    location.reload();
  }

}