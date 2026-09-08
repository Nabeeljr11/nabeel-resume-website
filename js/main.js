(() => {
  document.documentElement.classList.add("js");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector(".nav__toggle");
  const mobile = document.getElementById("mobile-menu");
  const progress = document.querySelector(".scroll-progress span");
  const navLinks = document.querySelectorAll(".nav__links a[data-section]");
  const sections = [...document.querySelectorAll("main section[id]")];

  const splitText = () => {
    document.querySelectorAll("[data-split]").forEach((el) => {
      const words = el.textContent.trim().split(/\s+/);
      el.textContent = "";
      words.forEach((word, i) => {
        const wrap = document.createElement("span");
        wrap.className = "word";
        wrap.style.transitionDelay = `${i * 70}ms`;
        const inner = document.createElement("span");
        inner.textContent = word;
        wrap.appendChild(inner);
        el.appendChild(wrap);
        el.appendChild(document.createTextNode(" "));
      });
    });
  };

  const reveal = () => {
    const items = document.querySelectorAll(".reveal, .word");
    if (reduceMotion) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    items.forEach((el) => io.observe(el));
  };

  const setActive = () => {
    const fromTop = window.scrollY + 120;
    let current = "home";
    sections.forEach((section) => {
      if (section.offsetTop <= fromTop) current = section.id;
    });
    if (current === "intro" || current === "skills") current = "about";
    if (current === "education") current = "experience";
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.section === current);
    });
  };

  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    if (progress) progress.style.width = `${Math.min(ratio, 1) * 100}%`;
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 12);
    setActive();
  };

  const closeMenu = () => {
    if (!toggle || !mobile) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    mobile.hidden = true;
    document.body.classList.remove("menu-open");
  };

  const openMenu = () => {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    mobile.hidden = false;
    document.body.classList.add("menu-open");
  };

  if (toggle && mobile) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      if (expanded) closeMenu();
      else openMenu();
    });

    mobile.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const setupCursor = () => {
    const cursor = document.querySelector(".cursor");
    if (!cursor || !finePointer || reduceMotion) return;

    document.body.classList.add("has-cursor");
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let ticking = false;

    const render = () => {
      rx += (x - rx) * 0.22;
      ry += (y - ry) * 0.22;
      cursor.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      ticking = false;
    };

    window.addEventListener("pointermove", (event) => {
      x = event.clientX;
      y = event.clientY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(render);
      }
    });

    const setState = (node, entering) => {
      if (!entering) {
        cursor.classList.remove("is-link", "is-view");
        return;
      }
      if (node.closest("[data-cursor='view']")) cursor.classList.add("is-view");
      else cursor.classList.add("is-link");
    };

    document.querySelectorAll("a, button, summary, [data-cursor]").forEach((node) => {
      node.addEventListener("pointerenter", () => setState(node, true));
      node.addEventListener("pointerleave", () => setState(node, false));
    });
  };

  const setupParallax = () => {
    if (reduceMotion) return;
    const covers = document.querySelectorAll(".project-cover");
    window.addEventListener(
      "scroll",
      () => {
        covers.forEach((cover) => {
          const rect = cover.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > window.innerHeight) return;
          const offset = (rect.top - window.innerHeight / 2) * 0.06;
          cover.style.backgroundPosition = `center ${offset}px`;
        });
      },
      { passive: true }
    );
  };

  splitText();
  reveal();
  requestAnimationFrame(() => {
    document.querySelectorAll(".reveal, .word").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        el.classList.add("is-in");
      }
    });
  });
  onScroll();
  setupCursor();
  setupParallax();
  window.addEventListener("scroll", onScroll, { passive: true });
})();
