// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Simpan gambar per project
const projectImages = {
  1: ["f1.jpg","f2.jpg","f3.jpg","f4.jpg","f5.jpg","f6.jpg","f7.jpg","f8.jpg","f9.jpg","f10.jpg"],
  2: ["pj1.jpg","pj2.jpg","pj3.jpg","pj4.jpg","pj5.jpg","pj6.jpg"],
  3: ["tp1.jpg","tp2.jpg","tp3.jpg","tp4.jpg","tp5.jpg","tp6.jpg","tp7.jpg","tp8.jpg","tp9.jpg","tp10.jpg","tp11.jpg","tp12.jpg","tp13.jpg","tp14.jpg","tp15.jpg","tp16.jpg"],
  4: ["lj1.jpg","lj2.jpg","lj3.jpg","lj4.jpg","lj5.jpg","lj6.jpg","lj7.jpg","lj8.jpg","lj9.jpg","lj10.jpg","lj11.jpg","lj12.jpg","lj13.jpg","lj14.jpg"],
  5: ["f1.jpg","f3.jpg","f4.jpg","f5.jpg","f6.jpg","f7.jpg","f8.jpg","f9.jpg","f10.jpg","f11.jpg","f12.jpg","f13.jpg","f14.jpg","f15.jpg","f16.jpg","f17.jpg","f18.jpg","f19.jpg","f20.jpg"],
  6: ["s1.jpg","s2.jpg","s3.jpg","s4.jpg","s5.jpg","s6.jpg","s7.jpg","s8.jpg","s9.jpg","s10.jpg","s11.jpg","s12.jpg","s13.jpg","s14.jpg","s15.jpg","s16.jpg","s17.jpg","s18.jpg","s19.jpg"],
};

let currentProject = 1;
let currentIndex = 0;

function openModal(project) {
  currentProject = project;
  currentIndex = 0;
  document.getElementById("imgModal").style.display = "block";
  showImage();
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}

function changeSlide(step) {
  const images = projectImages[currentProject];
  currentIndex = (currentIndex + step + images.length) % images.length;
  showImage();
}

function showImage() {
  const img = document.getElementById("modalImage");
  img.src = projectImages[currentProject][currentIndex];
}
