let currentLanguage = "ar";

const languageBtn = document.getElementById("languageBtn");

languageBtn.addEventListener("click", () => {

  currentLanguage = currentLanguage === "ar" ? "en" : "ar";

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir =
    currentLanguage === "ar" ? "rtl" : "ltr";

  languageBtn.textContent =
    currentLanguage === "ar" ? "EN" : "عربي";

  document.querySelectorAll("[data-ar]").forEach(element => {

    element.textContent =
      currentLanguage === "ar"
        ? element.dataset.ar
        : element.dataset.en;

  });

  const input = document.getElementById("searchInput");

  input.placeholder =
    currentLanguage === "ar"
      ? "ابحث عن كتاب أو مؤلف..."
      : "Search for a book or author...";
});


function filterCategory(category) {

  const cards = document.querySelectorAll(".book-card");

  cards.forEach(card => {

    if (category === "all") {
      card.style.display = "";
      return;
    }

    card.style.display =
      card.dataset.category === category
        ? ""
        : "none";
  });
}


function searchBooks() {

  const value =
    document.getElementById("searchInput")
      .value
      .toLowerCase()
      .trim();

  const cards = document.querySelectorAll(".book-card");

  cards.forEach(card => {

    const text =
      card.textContent.toLowerCase();

    card.style.display =
      text.includes(value) ? "" : "none";

  });

  showToast(
    currentLanguage === "ar"
      ? "تم تنفيذ البحث"
      : "Search completed"
  );
}


function openBook(bookName) {

  showToast(
    currentLanguage === "ar"
      ? `تم اختيار: ${bookName}`
      : `Selected: ${bookName}`
  );

}


function showToast(message) {

  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 2500);

}😂😀