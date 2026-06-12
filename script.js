const treks = [
  {
    name: "Rajgad Fort",
    location: "Pune",
    difficulty: "Medium",
    height: "4251 ft",
    image: "images/rajgad.jpg",
    info: "Rajgad was the capital fort of Chhatrapati Shivaji Maharaj and is famous for its Balekilla and scenic views.",
    season: "June to February",
    duration: "5 to 6 Hours",
  },

  {
    name: "Torna Fort",
    location: "Pune",
    difficulty: "Hard",
    height: "4603 ft",
    image: "images/torna.jpg",
    info: "Torna Fort is the first fort captured by Chhatrapati Shivaji Maharaj and is known for its historical importance.",
    season: "June to February",
    duration: "6 to 7 Hours",
  },

  {
    name: "Kalsubai Peak",
    location: "Ahilyanagar",
    difficulty: "Medium",
    height: "5400 ft",
    image: "images/kalsubai.jpg",
    info: "Kalsubai is the highest peak in Maharashtra and offers breathtaking sunrise views.",
    season: "October to February",
    duration: "4 to 5 Hours",
  },

  {
    name: "Harishchandragad",
    location: "Ahilyanagar",
    difficulty: "Hard",
    height: "4671 ft",
    image: "images/harishchandragad.jpg",
    info: "Harishchandragad is famous for Konkan Kada, ancient caves and beautiful landscapes.",
    season: "June to February",
    duration: "7 to 8 Hours",
  },

  {
    name: "Lohagad Fort",
    location: "Lonavala",
    difficulty: "Easy",
    height: "3389 ft",
    image: "images/lohagad.jpg",
    info: "Lohagad Fort is one of the most popular beginner-friendly treks near Lonavala.",
    season: "June to February",
    duration: "2 to 3 Hours",
  },
];

const trekContainer = document.getElementById("trekContainer");
const totalTreks = document.getElementById("totalTreks");

totalTreks.textContent = treks.length;

function displayTreks(data) {
  trekContainer.innerHTML = "";

  data.forEach((trek) => {
    const originalIndex = treks.findIndex((item) => item.name === trek.name);

    trekContainer.innerHTML += `
        <div class="trek-card">

            <img src="${trek.image}" alt="${trek.name}">

            <div class="trek-info">

                <h3>${trek.name}</h3>

                <p><strong>Location:</strong> ${trek.location}</p>

                <p><strong>Difficulty:</strong> ${trek.difficulty}</p>

                <p><strong>Height:</strong> ${trek.height}</p>

                <button
                    class="details-btn"
                    onclick="showDetails(${originalIndex})">
                    View Details
                </button>

            </div>

        </div>
        `;
  });
}

displayTreks(treks);

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value.toLowerCase();

  const filteredTreks = treks.filter((trek) =>
    trek.name.toLowerCase().includes(searchValue),
  );

  displayTreks(filteredTreks);
});

const modal = document.getElementById("trekModal");
const modalTitle = document.getElementById("modalTitle");
const modalInfo = document.getElementById("modalInfo");
const modalSeason = document.getElementById("modalSeason");
const modalDuration = document.getElementById("modalDuration");

function showDetails(index) {
  modal.style.display = "block";

  modalTitle.textContent = treks[index].name;

  modalInfo.textContent = treks[index].info;

  modalSeason.innerHTML =
    "<strong>Best Season:</strong> " + treks[index].season;

  modalDuration.innerHTML =
    "<strong>Trek Duration:</strong> " + treks[index].duration;
}

document.getElementById("closeModal").onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

console.log("TrekMate Loaded Successfully");
