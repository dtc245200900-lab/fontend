const movies = {
  forest: {
    title: "Khu rừng kỳ diệu",
    description: "Video minh họa · Chất lượng phụ thuộc nguồn phát",
    video: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?rel=0"
  },
  space: {
    title: "Phiêu lưu vũ trụ",
    description: "Video minh họa · Chọn nội dung phù hợp với lứa tuổi",
    video: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?rel=0"
  },
  ocean: {
    title: "Đại dương xanh",
    description: "Video minh họa · Chọn nội dung phù hợp với lứa tuổi",
    video: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?rel=0"
  },
  friends: {
    title: "Những người bạn nhỏ",
    description: "Video minh họa · Chọn nội dung phù hợp với lứa tuổi",
    video: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?rel=0"
  }
};

const movieList = document.getElementById("movieList");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const emptyState = document.getElementById("emptyState");
const movieCount = document.getElementById("movieCount");
const cards = Array.from(document.querySelectorAll(".movie-card"));

function selectMovie(card) {
  const movie = movies[card.dataset.id];
  if (!movie) return;

  cards.forEach(item => item.classList.toggle("selected", item === card));
  document.getElementById("playerTitle").textContent = movie.title;
  document.getElementById("videoDescription").textContent = movie.description;
  document.getElementById("videoFrame").src = movie.video;
}

cards.forEach(card => {
  card.addEventListener("click", () => selectMovie(card));
});

function updateList() {
  const query = searchInput.value.trim().toLocaleLowerCase("vi");
  const visibleCards = cards.filter(card =>
    card.querySelector("strong").textContent.toLocaleLowerCase("vi").includes(query)
  );

  visibleCards.sort((a, b) => {
    if (sortSelect.value === "views") {
      const views = { forest: 2100, space: 1800, ocean: 1250, friends: 950 };
      return views[b.dataset.id] - views[a.dataset.id];
    }
    const newest = { forest: 4, space: 3, ocean: 2, friends: 1 };
    return newest[b.dataset.id] - newest[a.dataset.id];
  });

  visibleCards.forEach(card => movieList.appendChild(card));
  cards.forEach(card => { card.hidden = !visibleCards.includes(card); });
  movieCount.textContent = `${visibleCards.length} phim`;
  emptyState.hidden = visibleCards.length !== 0;
}

searchInput.addEventListener("input", updateList);
sortSelect.addEventListener("change", updateList);
updateList();
