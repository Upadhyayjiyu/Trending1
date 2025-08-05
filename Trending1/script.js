const items = [
  {
    title: "Top Hit: 'Eclipse' by Solar Beats",
    category: "music",
    image: "https://images.unsplash.com/photo-1581092160607-7e8f1f1eade0",
    description: "Topping charts globally, a synthwave masterpiece.",
  },
  {
    title: "Movie: Galactic Warfare",
    category: "movies",
    image: "https://images.unsplash.com/photo-1601933471666-c6e7e5e1025b",
    description: "Sci-fi movie that took the box office by storm.",
  },
  {
    title: "Breaking: New Tech Invention",
    category: "news",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    description: "AI breakthrough is changing everything.",
  },
  {
    title: "Music: Lofi Chill Vibes",
    category: "music",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e8f87c94",
    description: "Relaxing beats trending on Spotify.",
  },
  {
    title: "News: Market Hits Record High",
    category: "news",
    image: "https://images.unsplash.com/photo-1565372910284-8b5cd773a3b2",
    description: "Stock market shows massive growth this week.",
  },
  {
    title: "Movie: Mystery of the Lost Island",
    category: "movies",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58e3c5",
    description: "Adventure movie trending on streaming platforms.",
  }
];

const trendingList = document.getElementById("trending-list");
const tabs = document.querySelectorAll(".tab");

function displayItems(category) {
  trendingList.innerHTML = "";
  const filtered = category === "all" ? items : items.filter(i => i.category === category);
  filtered.forEach(item => {
    trendingList.innerHTML += `
      <div class="card">
        <img src="${item.image}" alt="${item.title}">
        <div class="content">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </div>
    `;
  });
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");
    displayItems(tab.dataset.category);
  });
});

// Initial load
displayItems("all");
