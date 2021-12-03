// Select button
const button = document.querySelector("#gifBtn");

// Add listener to the button
button.addEventListener("click", () => {
  // Grab the value from the search box
  const word = document.querySelector("#gifSearch").value;
  // add the search word to the back of the API string to declear endpoint
  const url =
    "https://api.giphy.com/v1/gifs/search?api_key=JVfVAPQx9ZxfU546SUA9xByyX1SxWuD4&q=" + word;
  // fetch API endpoint
  fetch(url)
      // ask for JSON String and turn it into Json Object
    .then((Response) => Response.json())
    .then((jsonObj) => {
      // Select home for gif
      const divEl = document.querySelector(".gifHome");
      // Clean the home if someone has lived there before.
      divEl.innerHTML = "";
      console.log(jsonObj);
      jsonObj.data.forEach((gif) => {
        console.log(gif.images.original.url);
        const url = gif.images.original.url;
        // 1. Create an element in js
        const imageTag = document.createElement("img");
        // 2. innerHTML of the h2 to the answer from the server
        imageTag.setAttribute("src", url);
        imageTag.setAttribute('class', 'gifEl')
        // 3. Append the h2 to the document
        const gifHome = document.querySelector(".gifHome");
        gifHome.appendChild(imageTag);
      });
    });
});
