const cardVideos = document.querySelectorAll(".portfolio-video");

cardVideos.forEach((video) => {
  const cardElement = video.parentElement.parentElement;

  cardElement.addEventListener("mouseenter", () => {
    video
      .play()
      .catch((e) => console.log("Video playback blocked by browser:", e));
  });

  cardElement.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

const cards = document.querySelectorAll(".card[data-target]");
const closeBtns = document.querySelectorAll(".close-btn");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const targetId = card.getAttribute("data-target");
    const modal = document.getElementById(targetId);
    if (modal) {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });
});

const galleryImages = document.querySelectorAll(".gallery-item img");
const imageModal = document.getElementById("image-modal");
const lightboxImg = document.getElementById("lightbox-img");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    if (imageModal && lightboxImg) {
      imageModal.classList.add("active");
      lightboxImg.src = img.src;
      document.body.style.overflow = "hidden";
    }
  });
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").classList.remove("active");
    document.body.style.overflow = "auto";

    if (btn.id === "close-image-modal" && lightboxImg) {
      setTimeout(() => {
        lightboxImg.src = "";
      }, 200);
    }

    const modal = btn.closest(".modal");
    const localVideos = modal.querySelectorAll("video");
    localVideos.forEach((vid) => {
      vid.pause();
    });
  });
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("active");
    document.body.style.overflow = "auto";
    if (e.target.id === "image-modal" && lightboxImg) {
      setTimeout(() => {
        lightboxImg.src = "";
      }, 200);
    }

    const localVideos = e.target.querySelectorAll("video");
    localVideos.forEach((vid) => {
      vid.pause();
    });
  }
});
