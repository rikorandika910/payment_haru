document.getElementById("about-link").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });
document.getElementById("payment-link").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("payment").scrollIntoView({ behavior: "smooth" });
  });
document.getElementById("dashboard-link").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("dashboard").scrollIntoView({ behavior: "smooth" });
  });
  