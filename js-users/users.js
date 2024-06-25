async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await response.json();
  return data;
}

function generateCard(user) {
  const card = `
        <div class="card">
        <h2><i class="fa-solid fa-id-card" style="color: #000000;"></i>  ${
          user.name
        }</h2>
        <p><i class="fa-solid fa-user fa-lg" style="color: #000000;"></i> ${
          user.username
        }</p>
        <p><i class="fa-solid fa-location-dot fa-lg" style="color: #000000;"></i> ${
          user.address.street
        }, ${user.address.city}</p>
        <p><i class="fa-solid fa-building fa-lg"style="color: #000000;"></i> ${
          user.company.name
        }</p>
        <p><i class="fa-solid fa-envelope fa-lg"style= color: #000000;"></i>${
          user.email
        }</p>
        <p><i class="fa-solid fa-phone fa-lg" style="color: #000000;"></i> ${
          user.phone
        }</p>
        <p><i class="fa-solid fa-globe fa-lg" style="color: #000000;"></i> ${
          user.website
        }</p>
        <button type="button"><a class="text-decoration" href="${`posts.html?userId=${user.id}`}">Go to the Posts </a></button>
        </div>
    `;
  return card;
}
/* Render the cards */
async function renderCards() {
  const userData = await getUsers();
  const cardContainer = document.getElementById("card-container");
  userData.forEach((user) => {
    const card = generateCard(user);
    cardContainer.innerHTML += card;
  });
}
/* We need to call renderCards function when the page loads! */
document.addEventListener("DOMContentLoaded", renderCards);
