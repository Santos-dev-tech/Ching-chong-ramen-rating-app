const ramens = [
  { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image:"images/shoyuramen.jpg"   , rating: 5, comment: "Delicious!" },
  { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/miso.jpg", rating: 4, comment: "Very flavorful!" },
  { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/tonkotsu.jpg", rating: 4.5, comment: "Creamy and rich!" },
  { id: 4, name: "Gyukotsu Ramen", restaurant: "Ramen World", image: "images/gyukotsu.jpg", rating: 4.7, comment: "Amazing beef flavor!" },
  { id: 5, name: "Naruto Ramen", restaurant: "Hidden Ramen", image: "images/naruto.jpg", rating: 4.2, comment: "Classic and comforting!" },
  { id: 6, name: "Nirvana Ramen", restaurant: "Zen Ramen", image: "images/nirvana.jpg", rating: 4.8, comment: "A spiritual experience!" }
];

function displayRamens() {
  const ramenMenu = document.getElementById('ramen-menu');
  ramens.forEach(ramen => {
    const img = document.createElement('img');
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener('click', () => handleClick(ramen));
    ramenMenu.appendChild(img);
  });
}

function handleClick(ramen) {
  const detailDiv = document.getElementById('ramen-detail');
  detailDiv.innerHTML = `
    <h2 id="ramen-name">${ramen.name}</h2>
    <h3 id="ramen-restaurant">${ramen.restaurant}</h3>
    <p id="ramen-rating">Rating: ${ramen.rating}</p>
    <p id="ramen-comment">${ramen.comment}</p>
  `;
}

function addSubmitListener() {
  const form = document.getElementById('new-ramen');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newRamen = {
      name: e.target.name.value,
      restaurant: e.target.restaurant.value,
      image: e.target.image.value,
      rating: e.target.rating.value,
      comment: e.target.comment.value,
    };
    ramens.push(newRamen);
    displayRamens();
    form.reset();
  });
}

function main() {
  displayRamens();
  addSubmitListener();
}

document.addEventListener('DOMContentLoaded', main);

function main() {
  displayRamens();
  addSubmitListener();
  if (ramens.length > 0) {
    handleClick(ramens[0]);
  }
}

function handleClick(ramen) {
  const detailDiv = document.getElementById('ramen-detail');
  detailDiv.innerHTML = `
    <h2 id="ramen-name">${ramen.name}</h2>
    <h3 id="ramen-restaurant">${ramen.restaurant}</h3>
    <p id="ramen-rating">Rating: ${ramen.rating}</p>
    <p id="ramen-comment">${ramen.comment}</p>
    <button id="edit-button">Edit</button>
  `;

  const editButton = document.getElementById('edit-button');
  editButton.addEventListener('click', () => {
    const newRating = prompt('Enter new rating (1-5):', ramen.rating);
    const newComment = prompt('Enter new comment:', ramen.comment);
    if (newRating && newComment) {
      ramen.rating = newRating;
      ramen.comment = newComment;
      handleClick(ramen); 
    }
  });
}