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
/* =========================================
   RIWAQ BOOK DATABASE
========================================= */

const booksData = {

    "math-basics": {

        id: "math-basics",

        icon: "➗",

        rating: "4.8",

        pages: 180,

        year: 2026,

        type: "free",

        price: 0,

        ar: {
            title: "أساسيات الرياضيات",
            author: "رِواق للتعليم",
            category: "رياضيات",
            curriculum: "المنهج السوداني",
            level: "المرحلة الثانوية",
            language: "العربية",

            description:
                "كتاب تعليمي شامل يساعد الطلاب على فهم أساسيات الرياضيات بطريقة سهلة ومنظمة، مع أمثلة وتطبيقات تساعد على تطوير مهارات حل المسائل."
        },

        en: {
            title: "Mathematics Basics",
            author: "RIWAQ Education",
            category: "Mathematics",
            curriculum: "Sudanese Curriculum",
            level: "Secondary School",
            language: "Arabic",

            description:
                "A comprehensive educational book that helps students understand the fundamentals of mathematics through simple explanations, examples and practical exercises."
        }

    },


    "modern-physics": {

        id: "modern-physics",

        icon: "⚛️",

        rating: "4.7",

        pages: 220,

        year: 2026,

        type: "paid",

        price: 5,

        ar: {
            title: "الفيزياء الحديثة",
            author: "رِواق للعلوم",
            category: "فيزياء",
            curriculum: "المنهج السوداني",
            level: "المرحلة الثانوية",
            language: "العربية",

            description:
                "مقدمة منظمة في موضوعات الفيزياء الحديثة تشمل الذرة والطاقة والإشعاع والنظريات الأساسية."
        },

        en: {
            title: "Modern Physics",
            author: "RIWAQ Science",
            category: "Physics",
            curriculum: "Sudanese Curriculum",
            level: "Secondary School",
            language: "Arabic",

            description:
                "An organized introduction to modern physics covering atoms, energy, radiation and fundamental concepts."
        }

    },


    "learn-programming": {

        id: "learn-programming",

        icon: "💻",

        rating: "4.9",

        pages: 260,

        year: 2026,

        type: "new",

        price: 8,

        ar: {
            title: "تعلم البرمجة",
            author: "رِواق للتقنية",
            category: "برمجة",
            curriculum: "تعليم عام",
            level: "مبتدئ",
            language: "العربية",

            description:
                "دليل عملي للمبتدئين للتعرف على أساسيات البرمجة وتطوير مهارات التفكير البرمجي."
        },

        en: {
            title: "Learn Programming",
            author: "RIWAQ Technology",
            category: "Programming",
            curriculum: "General Education",
            level: "Beginner",
            language: "Arabic",

            description:
                "A practical guide for beginners to understand programming fundamentals and develop computational thinking."
        }

    },


    "english-beginners": {

        id: "english-beginners",

        icon: "🔤",

        rating: "4.6",

        pages: 150,

        year: 2026,

        type: "free",

        price: 0,

        ar: {
            title: "اللغة الإنجليزية للمبتدئين",
            author: "رِواق للغات",
            category: "لغات",
            curriculum: "تعليم عام",
            level: "مبتدئ",
            language: "العربية / الإنجليزية",

            description:
                "كتاب مناسب للمبتدئين لتطوير المفردات والقواعد والقراءة والمحادثة باللغة الإنجليزية."
        },

        en: {
            title: "English for Beginners",
            author: "RIWAQ Languages",
            category: "Languages",
            curriculum: "General Education",
            level: "Beginner",
            language: "Arabic / English",

            description:
                "A beginner-friendly book for developing English vocabulary, grammar, reading and conversation skills."
        }

    }

};


/* =========================================
   BOOK DETAILS PAGE
========================================= */

function loadBookDetails() {

    const container = document.getElementById("bookDetails");

    if (!container) {
        return;
    }

    const params = new URLSearchParams(window.location.search);

    const bookId = params.get("id");

    const book = booksData[bookId];

    if (!book) {

        container.innerHTML = `
            <div class="book-not-found">

                <div class="not-found-icon">
                    📚
                </div>

                <h2>
                    الكتاب غير موجود
                </h2>

                <p>
                    عذراً، لم يتم العثور على الكتاب المطلوب.
                </p>

                <a href="index.html" class="download-button">
                    العودة إلى المكتبة
                </a>

            </div>
        `;

        return;
    }

    renderBook(book);

}


/* =========================================
   RENDER BOOK
========================================= */

function renderBook(book) {

    const container = document.getElementById("bookDetails");

    const language =
        typeof currentLanguage !== "undefined"
            ? currentLanguage
            : "ar";

    const data =
        language === "en"
            ? book.en
            : book.ar;


    let statusText;

    if (book.type === "free") {

        statusText =
            language === "en"
                ? "FREE"
                : "مجاني";

    } else {

        statusText =
            language === "en"
                ? `$${book.price}`
                : `${book.price} دولار`;

    }


    container.innerHTML = `

        <div class="large-cover">

            <div class="cover-icon">
                ${book.icon}
            </div>

            <div class="cover-title">
                ${data.title}
            </div>

        </div>


        <div class="book-main-info">

            <span class="book-status ${book.type}">
                ${statusText}
            </span>


            <h1>
                ${data.title}
            </h1>


            <p class="book-author">
                ✍️ ${data.author}
            </p>


            <div class="book-rating">

                ⭐ ${book.rating}

            </div>


            <div class="book-meta">

                <div>
                    <strong>
                        ${language === "en" ? "Category" : "التصنيف"}
                    </strong>

                    <span>
                        ${data.category}
                    </span>
                </div>


                <div>
                    <strong>
                        ${language === "en" ? "Curriculum" : "المنهج"}
                    </strong>

                    <span>
                        ${data.curriculum}
                    </span>
                </div>


                <div>
                    <strong>
                        ${language === "en" ? "Level" : "المستوى"}
                    </strong>

                    <span>
                        ${data.level}
                    </span>
                </div>


                <div>
                    <strong>
                        ${language === "en" ? "Pages" : "عدد الصفحات"}
                    </strong>

                    <span>
                        ${book.pages}
                    </span>
                </div>


                <div>
                    <strong>
                        ${language === "en" ? "Language" : "اللغة"}
                    </strong>

                    <span>
                        ${data.language}
                    </span>
                </div>


                <div>
                    <strong>
                        ${language === "en"
                            ? "Publication Year"
                            : "سنة النشر"}
                    </strong>

                    <span>
                        ${book.year}
                    </span>
                </div>

            </div>


            <div class="description">

                <h2>
                    ${language === "en"
                        ? "About the Book"
                        : "عن الكتاب"}
                </h2>

                <p>
                    ${data.description}
                </p>

            </div>


            <button
                class="download-button"
                onclick="requestBook('${book.id}')"
            >

                ${
                    book.type === "free"

                    ? (
                        language === "en"
                            ? "📥 Download Book"
                            : "📥 تحميل الكتاب"
                    )

                    : (
                        language === "en"
                            ? "🛒 Buy This Book"
                            : "🛒 شراء الكتاب"
                    )
                }

            </button>

        </div>

    `;


    document.title =
        `${data.title} | RIWAQ`;

}


/* =========================================
   BOOK REQUEST
========================================= */

function requestBook(bookId) {

    const book = booksData[bookId];

    if (!book) {
        return;
    }

    const language =
        typeof currentLanguage !== "undefined"
            ? currentLanguage
            : "ar";


    if (book.type === "free") {

        alert(
            language === "en"
                ? "The free download system will be connected soon."
                : "سيتم ربط نظام تحميل الكتب المجانية قريباً."
        );

    } else {

        alert(
            language === "en"
                ? "Purchase request system will be connected soon."
                : "سيتم ربط نظام طلب وشراء الكتاب قريباً."
        );

    }

}


/* =========================================
   UPDATE BOOK WHEN LANGUAGE CHANGES
========================================= */

const originalUpdateLanguage =
    typeof updateLanguage === "function"
        ? updateLanguage
        : null;


if (originalUpdateLanguage) {

    const oldUpdateLanguage = updateLanguage;

    updateLanguage = function () {

        oldUpdateLanguage();

        loadBookDetails();

    };

}


/* =========================================
   START
========================================= */

loadBookDetails();