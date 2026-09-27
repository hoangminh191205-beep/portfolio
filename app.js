/* ---------------- Mobile nav toggle ---------------- */
const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

siteNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ---------------- Animated stat counters ---------------- */
const statNums = document.querySelectorAll(".stat-num");

function animateCount(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 900;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(progress * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

statNums.forEach(el => statsObserver.observe(el));

/* ==========================================================
   EDIT ME: your real projects go here.
   category must be one of: "web", "tools", "practice"
   ========================================================== */
const PROJECTS = [
  {
    title: "Weather Dashboard",
    category: "web",
    description: "A small web app that shows current weather and a 3-day forecast for any city.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#"
  },
  {
    title: "Markdown Notes",
    category: "tools",
    description: "A lightweight notes app that saves entries in the browser and renders Markdown live.",
    tags: ["JavaScript", "LocalStorage"],
    link: "#"
  },
  {
    title: "Responsive Landing Page",
    category: "practice",
    description: "A practice project rebuilding a landing page design to sharpen CSS Grid and Flexbox skills.",
    tags: ["HTML", "CSS"],
    link: "#"
  },
  {
    title: "Expense Tracker",
    category: "tools",
    description: "Tracks daily expenses with categories and a running total, using vanilla JavaScript.",
    tags: ["JavaScript"],
    link: "#"
  },
  {
    title: "Recipe Finder",
    category: "web",
    description: "Search recipes by ingredient and view instructions in a modal window.",
    tags: ["JavaScript", "API"],
    link: "#"
  },
  {
    title: "CSS Grid Playground",
    category: "practice",
    description: "A set of small experiments exploring CSS Grid layouts.",
    tags: ["CSS"],
    link: "#"
  }
];

/* ---------------- Projects: render + filter ---------------- */
const grid = document.getElementById("project-grid");
const chips = document.querySelectorAll(".chip");
let currentFilter = "all";





/* ---------------- Modal ---------------- */
const overlay = document.getElementById("modal-overlay");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalTags = document.getElementById("modal-tags");
const modalLink = document.getElementById("modal-link");
const modalClose = document.getElementById("modal-close");



function closeModal() {
  overlay.classList.remove("open");
  document.removeEventListener("keydown", onEscape);
}

function onEscape(e) {
  if (e.key === "Escape") closeModal();
}

modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", e => {
  if (e.target === overlay) closeModal();
});

/* ---------------- Contact form (UI only, no backend) ---------------- */
const form = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");

form.addEventListener("submit", e => {
  e.preventDefault();
  // TODO: connect to a real backend or a form service (e.g. Formspree) if you want actual delivery.
  formNote.textContent = "Thanks! This is a UI-only demo — no message was actually sent.";
  form.reset();
});

/* ---------------- Footer year ---------------- */
document.getElementById("year").textContent = new Date().getFullYear();
