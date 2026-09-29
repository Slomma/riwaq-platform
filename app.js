let currentLanguage = "ar";

const languageBtn = document.getElementById("languageBtn");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const books = document.querySelectorAll(".book-card");
const toast = document.getElementById("toast");


function updateLanguage() {

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-ar]").forEach(element => {

        element.textContent =
            currentLanguage === "ar"
                ? element.dataset.ar
                : element.dataset.en;

    });

    searchInput.placeholder =
        currentLanguage === "ar"
            ? searchInput.dataset.placeholderAr
            : searchInput.dataset.placeholderEn;

    languageBtn.textContent =
        currentLanguage === "ar"
            ? "English"
            : "العربية";
}


languageBtn.addEventListener("click", () => {

    currentLanguage =
        currentLanguage === "ar" ? "en" : "ar";

    updateLanguage();

});


function showToast(message) {

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}


function searchBooks() {

    const query =
        searchInput.value.trim().toLowerCase();

    let found = false;

    books.forEach(book => {

        const titleAr =
            book.dataset.title.toLowerCase();

        const titleEn =
            book.dataset.titleEn.toLowerCase();

        if (
            query === "" ||
            titleAr.includes(query) ||
            titleEn.includes(query)
        ) {
            book.style.display = "";
            found = true;
        } else {
            book.style.display = "none";
        }

    });

    if (!found) {

        showToast(
            currentLanguage === "ar"
                ? "لم يتم العثور على كتاب"
                : "No books found"
        );

    }
}


searchBtn.addEventListener("click", searchBooks);

searchInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {
        searchBooks();
    }

});


document.querySelectorAll(".quick-card").forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        books.forEach(book => {

            if (filter === "all") {
                book.style.display = "";
            }

            else if (filter === "free") {
                book.style.display =
                    book.dataset.type === "free"
                        ? ""
                        : "none";
            }

            else if (filter === "paid") {
                book.style.display =
                    book.dataset.type === "paid"
                        ? ""
                        : "none";
            }

            else if (filter === "new") {
                book.style.display =
                    book.dataset.type === "new"
                        ? ""
                        : "none";
            }

        });

        document
            .getElementById("books")
            .scrollIntoView({ behavior: "smooth" });

    });

});


document.querySelectorAll(".book-card button").forEach(button => {

    button.addEventListener("click", () => {

        showToast(
            currentLanguage === "ar"
                ? "صفحة الكتاب ستتم إضافتها قريبًا 📖"
                : "Book page coming soon 📖"
        );

    });

});


updateLanguage();