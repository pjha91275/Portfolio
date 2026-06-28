//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//scroll section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }

    let lastSection = sections[sections.length - 1];
    let scrollBottom = window.scrollY + window.innerHeight;
    let pageHeight = document.documentElement.scrollHeight;

    if (scrollBottom >= pageHeight - 10) {
      lastSection.classList.add("show-animate");
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  let footer = document.querySelector("footer");
  const buffer = 5; // tolerance for rounding errors
  const scrolledBottom = window.innerHeight + window.scrollY;
  const fullHeight = document.documentElement.scrollHeight;

  footer.classList.toggle(
    "show-animate",
    scrolledBottom >= fullHeight - buffer
  );
};

const roles = ["2nd year Computer Engineering Student", "Full-Stack Web Development Enthusiast"];
let currentRole = 0;
const roleElement = document.getElementById("animated-role");

function changeRole() {
  roleElement.classList.remove("typing");

  setTimeout(() => {
    currentRole = (currentRole + 1) % roles.length;
    roleElement.textContent = roles[currentRole];

    void roleElement.offsetWidth;

    roleElement.classList.add("typing");
  }, 3000);
}

roleElement.classList.add("typing");

setInterval(changeRole, 5600);

// Outdated Portfolio Notice Banner logic
document.addEventListener("DOMContentLoaded", () => {
  const notice = document.getElementById("portfolio-notice");
  const closeBtn = document.getElementById("close-notice");

  function updateNoticeHeight() {
    if (notice && notice.offsetHeight > 0 && document.body.classList.contains("notice-active")) {
      document.documentElement.style.setProperty("--notice-height", `${notice.offsetHeight}px`);
    } else {
      document.documentElement.style.setProperty("--notice-height", "0px");
    }
  }

  // Show banner with a slight delay for a smooth slide-down animation
  setTimeout(() => {
    if (notice) {
      notice.classList.add("show");
      updateNoticeHeight();
      window.addEventListener("resize", updateNoticeHeight);
    }
  }, 800);

  // Close banner behavior
  if (closeBtn && notice) {
    closeBtn.addEventListener("click", () => {
      notice.classList.remove("show");
      document.body.classList.remove("notice-active");
      document.documentElement.style.setProperty("--notice-height", "0px");

      // Clean up window resize listener and fully hide banner after transition
      window.removeEventListener("resize", updateNoticeHeight);
      setTimeout(() => {
        notice.style.display = "none";
      }, 400);
    });
  }
});
