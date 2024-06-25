const urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");

// If userId is not provided, prompt the user to enter one
if (!userId) {
  userId = prompt("Please enter a user ID (between 1 and 10):");
  if (!userId || isNaN(userId) || userId < 1 || userId > 10) {
    alert("Invalid user ID. Please try again.");
    throw new Error("Invalid user ID");
  }
}

// Make a GET request to the JSON Placeholder API
fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  .then((response) => response.json())
  .then((posts) => {
    // Create a card design for each post
    const postCards = posts.map((post) => {
      return `
        <div class="card">
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        </div>
      `;
    });

    // Add the post cards to the page
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = postCards.join("");
  })
  .catch((error) => {
    console.error(error);
  });
