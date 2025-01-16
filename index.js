const loadingScreen = document.getElementById("loading");
const mainContent = document.getElementById("body");

window.onload = () => {
  setTimeout(() => {
    (async () => {
      await loadStarsPreset(tsParticles);

      await tsParticles.load({
        id: "tsparticles",
        options: {
          preset: "stars",
        },
      });
    })();
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      mainContent.classList.remove("hidden");
      loadingScreen.remove();
    }, 500);
  }, 4000);
};
