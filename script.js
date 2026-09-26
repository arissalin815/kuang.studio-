// Edit this array with your own projects.
// image: path to your artwork (put files in /assets)
// category: "uiux" | "print" | "code" | "video" — must match a sidebar filter
const projects = [
  {
    title: "Star Table Tennis × LTTT",
    tags: "Brand Identity, Graphic Design, Packaging",
    image: "assets/placeholder-1.jpg",
    category: "print",
    link: "#"
  },
  {
    title: "Taiwan New Cinema Wave Archive Zine",
    tags: "Editorial Design, Typography, Print",
    image: "assets/placeholder-2.jpg",
    category: "print",
    link: "#"
  },
  {
    title: "Project title",
    tags: "UI Design, UX Research",
    image: "assets/placeholder-3.jpg",
    category: "uiux",
    link: "#"
  },
  {
    title: "Project title",
    tags: "Creative Coding, Generative Art",
    image: "assets/placeholder-4.jpg",
    category: "code",
    link: "#"
  },
  {
    title: "Project title",
    tags: "Video, Motion",
    image: "assets/placeholder-5.jpg",
    category: "video",
    link: "#"
  },
  {
    title: "Project title",
    tags: "UI Design, Web Design",
    image: "assets/placeholder-6.jpg",
    category: "uiux",
    link: "#"
  }
];

const grid = document.getElementById("work-grid");
const filterLinks = document.querySelectorAll(".filters a");

function render(filter) {
  const items = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  grid.innerHTML = items.map(p => `
    <a class="item" href="${p.link}">
      <span class="tile">
        <img src="${p.image}" alt="${p.title}" loading="lazy"
             onerror="this.style.display='none'">
      </span>
      <span class="caption">
        <span class="title">${p.title}</span>
        <span class="meta">${p.tags}</span>
      </span>
    </a>
  `).join("");
}

filterLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    filterLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    render(link.dataset.filter);
  });
});

render("all");
