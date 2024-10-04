//SCROLLER
const scroller = document.querySelectorAll('.scroller');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');

scroller.forEach((card, i) => {
    let scrollerDimensions = card.getBoundingClientRect();
    let scrollerWidth = scrollerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        card.scrollLeft += scrollerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        card.scrollLeft -= scrollerWidth;
    })
})

// PROFILE AND BTN GRP SWITCHING
function showDashboard(event) {
    event.preventDefault();
    
    document.querySelector(".dashboard").style.display = "block";
    document.querySelector(".btn-grp").style.display = "none";
    document.querySelector(".wrapper").style.display = "none";
}

function showBtnGrp() {
    let confirmation = confirm("Are you sure you want to log out?");
    if (confirmation) {
        document.querySelector(".dashboard").style.display = "none";
        document.querySelector(".btn-grp").style.display = "block";
        document.querySelector(".profile-wrapper").style.display = "none";
    } else {
        console.log("Log out canceled");
    }
}

//PROFILE MODAL POPUP
const profileWrap = document.querySelector(".profile-wrapper");
const profBtn = document.querySelector("#profBtn");

profBtn.addEventListener("click", function() {
    profileWrap.style.display = "flex";
    profileWrap.style.justifyContent = "center";
    profileWrap.style.alignItems = "center";
});

//PROFILE MODAL CLOSE BUTTON
const profCloseBtn = document.querySelector("#profCloseBtn");

profCloseBtn.addEventListener("click", function() {
    profileWrap.style.display = "none";
});


//LOGIN & REGISTRATION PAGE
const loginBtn = document.querySelector("#loginBtn");
const regBtn = document.querySelector("#regBtn");
const loginForm = document.querySelector(".login-content");
const regForm = document.querySelector(".reg-content");
const wrapper = document.querySelector(".wrapper");
const closeBtn = document.querySelectorAll(".close-btn");
const bottomLogin = document.querySelector(".log-in");
const bottomSignup = document.querySelector(".sign-up");

// FUNCTION TO DISPLAY THE LOGIN PAGE AND HIDE THE REGISTRATION PAGE
loginBtn.addEventListener("click", function() {
    loginForm.style.display = "block";
    regForm.style.display = "none";
    wrapper.style.display = "block";
});

// FUNCTION TO DISPLAY THE REGISTRATION PAGE AND HIDE THE LOGIN PAGE
regBtn.addEventListener("click", function() {
    loginForm.style.display = "none";
    regForm.style.display = "block";
    wrapper.style.display = "block";
});

// CLOSE BUTTON
closeBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        loginForm.style.display = "none";
        regForm.style.display = "none";
        wrapper.style.display = "none";
    });
});

// ALREADY HAVE AN ACCOUNT? LOGIN
bottomLogin.addEventListener("click", function() {
    loginForm.style.display = "block";
    regForm.style.display = "none";
    wrapper.style.display = "block";
});

// DON'T HAVE AN ACCOUNT? SIGNUP
bottomSignup.addEventListener("click", function() {
    loginForm.style.display = "none";
    regForm.style.display = "block";
    wrapper.style.display = "block";
});



//HOMEPAGE
window.onload = function() {
    const scroller = document.querySelector('.display-scroller');
    const totalSlides = document.querySelectorAll('.display-scroller div').length;
    const scrollStep = 780;
    let currentSlide = 0;
    let intervalId;
    const buttons = document.querySelectorAll('.slide-button');
    const pauseButton = document.getElementById('pause-button');
    const icon = pauseButton.querySelector('i');
    let isPlaying = true;

    function autoScroll() {
        if (isPlaying) {
            currentSlide++;
            if (currentSlide >= totalSlides) {
                currentSlide = 0;
            }
            updateScrollPosition();
        }
    }

    function updateScrollPosition() {
        scroller.scrollTo({
            left: scrollStep * currentSlide,
            behavior: 'smooth'
        });
        updateActiveButton();
    }

    function updateActiveButton() {
        buttons.forEach((button, index) => {
            button.classList.toggle('active', index === currentSlide);
        });
    }

    function startAutoScroll() {
        intervalId = setInterval(autoScroll, 3000);
    }

    function stopAutoScroll() {
        clearInterval(intervalId);
    }

    startAutoScroll();

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentSlide = index;
            updateScrollPosition();
        });
    });

    pauseButton.addEventListener('click', () => {
        if (isPlaying) {
            stopAutoScroll();
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
            pauseButton.classList.add('paused');
        } else {
            startAutoScroll();
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
            pauseButton.classList.remove('paused');
        }
        isPlaying = !isPlaying;
    });

    updateActiveButton();
};



//FILTER AND SORTING

//FOR FILTERING
const filterMenu = document.querySelector(".filter-menu"),
    filterBtn = filterMenu.querySelector(".filter-button"),
    filterOptions = filterMenu.querySelectorAll(".filter-option"),
    fBtnText = filterMenu.querySelector(".fbtn-text");

filterBtn.addEventListener("click", () =>
    filterMenu.classList.toggle("active"));

filterOptions.forEach(fOption => {
    fOption.addEventListener("click", () => {
        let selectedfOption = fOption.querySelector(".filter-option-txt").innerText;
        fBtnText.innerText = selectedfOption;

        filterMenu.classList.remove("active");
    });
});

//FOR SORTING
const sortMenu = document.querySelector(".sort-menu"),
    sortBtn = sortMenu.querySelector(".sort-button"),
    sBtnText = sortBtn.querySelector(".sbtn-text"),
    sortOptions = sortMenu.querySelectorAll(".sort-option");

sortBtn.addEventListener("click", () => {
    sortMenu.classList.toggle("active");
});

sortOptions.forEach(sOption => {
    sOption.addEventListener("click", () => {
        // Get the text and icon of the selected option
        const selectedOptionText = sOption.querySelector('.sort-option-txt').innerHTML;
        const selectedOptionIcon = sOption.querySelector('i').outerHTML; // Get the icon HTML

        // Update the button HTML to include both icons
        sortBtn.innerHTML = `${selectedOptionIcon}<h3 class="sbtn-text">${selectedOptionText}</h3>
      <i class="fa-solid fa-angle-down" style="color: #000000;"></i> <!-- Angle down icon -->
    `;

        sortMenu.classList.remove("active");
    });
});

//RESET BUTTON
const resetButton = document.querySelector('.reset-btn');

resetButton.addEventListener('click', () => {
    fBtnText.innerText = 'Select your option';
    filterMenu.classList.remove('active');

    sortBtn.innerHTML = `<h3 class="sbtn-text">Select your option</h3><i class="fa-solid fa-angle-down" style="color: #000000;"></i>`;
    sortMenu.classList.remove('active');
});

// FILTER AND SORTING OF BOOKS
const books = [
    { bookName: "Ratan Tata: A Complete Biography", bookImage: "biography-1.webp", bookGenre: "biography", bookPrice: 199, bookRating: 4.2, bookDate: "1 November 2021", bookAuthor: "A.K.Gandhi" },
    { bookName: "The Grassland Games", bookImage: "thriller-1.webp", bookGenre: "thriller & mystery", bookPrice: 339, bookRating: 5, bookDate: "4 September 2024", bookAuthor: "Chitta Ranjan" },
    { bookName: "Good Nature: The New Science of How Nature Improves Our Health", bookImage: "edu-2.webp", bookGenre: "education", bookPrice: 475, bookRating: 3.5, bookDate: "24 August 2024", bookAuthor: "Kathy Willis" },
    { bookName: "Elon Musk", bookImage: "biography-2.webp", bookGenre: "biography", bookPrice: 869, bookRating: 4.6, bookDate: "11 September 2023", bookAuthor: "Walter Isaacson" },
    { bookName: "A Game of Two Halves: The Story of the Golden Era of Indian Club Football", bookImage: "sports-3.webp", bookGenre: "sports", bookPrice: 289, bookRating: 4.8, bookDate: "17 July 2024", bookAuthor: "Rishav Ray" },
    { bookName: "Solo Leveling", bookImage: "solo-leveling.jpg", bookGenre: "manga & comics", bookPrice: 1500, bookRating: 4.8, bookDate: "20 August 2024", bookAuthor: "Kisorong Chuchong" },
    { bookName: "White Alert: A Prosecution Force Thriller", bookImage: "thriller-2.webp", bookGenre: "thriller & mystery", bookPrice: 1250, bookRating: 4.2, bookDate: "3 September 2024", bookAuthor: "Logan Ryles" },
    { bookName: "How to Win a Grand Prix", bookImage: "sports-1.webp", bookGenre: "sports", bookPrice: 1000, bookRating: 4.7, bookDate: "23 May 2024", bookAuthor: "Bernie Collins" },
    { bookName: "Jujutsu Kaisen", bookImage: "jjk.webp", bookGenre: "manga & comics", bookPrice: 699, bookRating: 4.5, bookDate: "20 August 2024", bookAuthor: "Gege Akutami" },
    { bookName: "Awesome Space Facts for Kids", bookImage: "edu-3.webp", bookGenre: "education", bookPrice: 499, bookRating: 4, bookDate: "28 August 2024", bookAuthor: "John Hicks" },
    { bookName: "Things Every Photographer Should Know", bookImage: "photographer-know.webp", bookGenre: "Film & Photography", bookPrice: 419, bookRating: 4.5, bookDate: "22 August 2024", bookAuthor: "Cole Nelson" },
    { bookName: "The Little Book of Indian Business", bookImage: "indian-business.jpg", bookGenre: "Business", bookPrice: 279, bookRating: 3.8, bookDate: "25 September 2024", bookAuthor: "Finshots" },
    { bookName: "Mahadeshon ka Cinema", bookImage: "mahadeshon-ka-cinema.webp", bookGenre: "Film & Photography", bookPrice: 315, bookRating: 4.1, bookDate: "1 January 2024", bookAuthor: "Vijay Sharma" },
    { bookName: "500 Recipes", bookImage: "500recipes.webp", bookGenre: "Cooking", bookPrice: 270, bookRating: 4, bookDate: "5 June 2023", bookAuthor: "Kavita Devgan" },
    { bookName: "Ultimate Spiderman", bookImage: "spiderman.webp", bookGenre: "Manga & Comics", bookPrice: 1363, bookRating: 4.4, bookDate: "10 September 2024", bookAuthor: "Jonathan Hickman" },
    { bookName: "Stock Market: A Beginner's Guide to Investing & Trading", bookImage: "stock-market.jpg", bookGenre: "Business", bookPrice: 199, bookRating: 4.6, bookDate: "14 October 2020", bookAuthor: "Ardi Aazaznia" },
    { bookName: "Kitchen Secrets", bookImage: "kitchen-secrete.webp", bookGenre: "Cooking", bookPrice: 650, bookRating: 4.4, bookDate: "1 January 2015", bookAuthor: "Sanjeev Kapoor" },
    { bookName: "Blooming Flora Adult Coloring Book", bookImage: "blooming-flora.jpg", bookGenre: "Art & Craft", bookPrice: 529, bookRating: 4.7, bookDate: "4 August 2021", bookAuthor: "Amber Forest" },
    { bookName: "Rāmāyanam", bookImage: "ramayan.jpg", bookGenre: "History", bookPrice: 449, bookRating: 4, bookDate: "5 July 2024", bookAuthor: "Dushyanth Sridhar" },
    { bookName: "Quirk Books Entertains your Kids", bookImage: "entertain-kids.jpg", bookGenre: "Art & Craft", bookPrice: 99, bookRating: 3.7, bookDate: "16 May 2019", bookAuthor: "Raising Quirk" },
    { bookName: "Sapiens: A Graphic History Vol.1", bookImage: "sapiens.jpg", bookGenre: "History", bookPrice: 819, bookRating: 4.7, bookDate: "27 December 2020", bookAuthor: "Yuval Noah Harari" },
    { bookName: "Chainsaw Man Vol.16", bookImage: "csm.webp", bookGenre: "Manga & Comics", bookPrice: 765, bookRating: 4.5, bookDate: "3 September 2024", bookAuthor: "Tatsuki Fujimoto" },
    { bookName: "Renaissance State: The Unwritten Story of the Making of Maharashtra", bookImage: "renaissance-state.jpg", bookGenre: "History", bookPrice: 430, bookRating: 4.0, bookDate: "6 May 2021", bookAuthor: "Girish Kuber" },
    { bookName: "Wicked Problems: How to Engineer a Better World", bookImage: "wicked-problems.jpg", bookGenre: "Education", bookPrice: 2499, bookRating: 4.8, bookDate: "26 march 2024", bookAuthor: "Guru Madhvan" },
    { bookName: "A Murderous Plot", bookImage: "a-murderous-plot.jpeg", bookGenre: "thriller & mystery", bookPrice: 324, bookRating: 4.1, bookDate: "29 August 2024", bookAuthor: "Sue Minix" },
    { bookName: "Dilip Kumar : In the Shadow of a Legend", bookImage: "dilip-kumar-bio.jpeg", bookGenre: "Biography", bookPrice: 420, bookRating: 4.5, bookDate: "7 July 2022", bookAuthor: "Faisal Farooqui" },
    { bookName: "Class of 2000 : The Making of a Champion Team", bookImage: "class-of-2000.jpeg", bookGenre: "Sports", bookPrice: 569, bookRating: 5.0, bookDate: "9 September 2023", bookAuthor: "Sudeept" }
];

// Function to apply filters and sorting
document.querySelector('.apply-btn').addEventListener('click', () => {
    // Get selected genre from filter dropdown
    const selectedGenre = document.querySelector('.filter-button .fbtn-text').innerText.trim().toLowerCase();

    // Get selected sort option from sort dropdown
    const sortOption = document.querySelector('.sort-button .sbtn-text').innerText.trim();

    // Filter books by genre
    let filteredBooks = books.filter(book => {
        return selectedGenre === "select your option" || selectedGenre === "all" || book.bookGenre.toLowerCase() === selectedGenre;
    });

    // Sort books based on selected option
    if (sortOption.includes("Low to High")) {
        // Low to High Price sorting
        filteredBooks.sort((a, b) => a.bookPrice - b.bookPrice);
    } else if (sortOption.includes("High to Low")) {
        // High to Low Price sorting
        filteredBooks.sort((a, b) => b.bookPrice - a.bookPrice);
    } else if (sortOption.includes("Rating")) {
        filteredBooks.sort((a, b) => b.bookRating - a.bookRating);
    } else if (sortOption.includes("Publication Date")) {
        filteredBooks.sort((a, b) => new Date(b.bookDate) - new Date(a.bookDate));
    }

    // Display the filtered and sorted books
    const bookDisplay = document.getElementById('book-display');
    bookDisplay.innerHTML = ''; // Clear current book display

    filteredBooks.forEach(book => {
        const bookCard = `
      <div class="book-display-card">
        <div class="book-card-img">
          <img src="${getBookImage(book.bookName)}">
        </div>
        <div class="book-card-info">
          <span class="book-name">${book.bookName}</span>
          <span class="book-author">By ${book.bookAuthor}</span>
          <span class="book-price">RS.${book.bookPrice}&emsp;Rating : ${book.bookRating}/5</span>
          <span class="book-date">Published on ${book.bookDate}</span>
          <div class="book-card-btn-grp">
            <div class="book-card-btns">
                <button>
                    Add to Wishlist
                </button>
                <button>
                    Reserve
                </button>
            </div>
          </div>
        </div>
      </div>
    `;
        bookDisplay.innerHTML += bookCard;
    });
});

// Utility function to get book image based on book name
function getBookImage(bookName) {
    switch (bookName) {
        case "Ratan Tata: A Complete Biography":
            return "biography-1.webp";
        case "The Grassland Games":
            return "thriller-1.webp";
        case "Good Nature: The New Science of How Nature Improves Our Health":
            return "edu-2.webp";
        case "Elon Musk":
            return "biography-2.webp";
        case "How to Win a Grand Prix":
            return "sports-1.webp";
        case "Solo Leveling":
            return "solo-leveling.jpg";
        case "Jujutsu Kaisen":
            return "jjk.webp";
        case "A Game of Two Halves: The Story of the Golden Era of Indian Club Football":
            return "sports-3.webp";
        case "White Alert: A Prosecution Force Thriller":
            return "thriller-2.webp";
        case "Awesome Space Facts for Kids":
            return "edu-3.webp";
        case "Mahadeshon ka Cinema":
            return "mahadeshon-ka-cinema.webp";
        case "Things Every Photographer Should Know":
            return "photographer-know.webp";
        case "500 Recipes":
            return "500recipes.webp";
        case "Kitchen Secrets":
            return "kitchen-secrets.webp";
        case "Quirk Books Entertains your Kids":
            return "entertain-kids.jpg";
        case "Blooming Flora Adult Coloring Book":
            return "blooming-flora.jpg";
        case "The Little Book of Indian Business":
            return "indian-business.jpg";
        case "Stock Market: A Beginner's Guide to Investing & Trading":
            return "stock-market.jpg";
        case "Rāmāyanam":
            return "ramayan.jpg";
        case "Sapiens: A Graphic History Vol.1":
            return "sapiens.jpg";
        case "Ultimate Spiderman":
            return "spiderman.webp";
        case "Chainsaw Man Vol.16":
            return "csm.webp";
        case "Renaissance State: The Unwritten Story of the Making of Maharashtra":
            return "renaissance-state.jpg";
        case "Wicked Problems: How to Engineer a Better World":
            return "wicked-problems.jpg";
        case "A Murderous Plot":
            return "a-murderous-plot.jpeg";
        case "Dilip Kumar : In the Shadow of a Legend":
            return "dilip-kumar-bio.jpeg";
        case "Class of 2000 : The Making of a Champion Team":
            return "class-of-2000.jpeg";
        default:
            return "noimg.jpg";
    }
}

// Event listener to update the dropdown text when an option is selected
document.querySelectorAll('.filter-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelector('.filter-button .fbtn-text').innerText = this.innerText.trim();
    });
});

document.querySelectorAll('.sort-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelector('.sort-button .sbtn-text').innerText = this.innerText.trim();
    });
});

// Reset button functionality
document.querySelector('.reset-btn').addEventListener('click', () => {
    document.querySelector('.filter-button .fbtn-text').innerText = 'Select your option';
    document.querySelector('.sort-button .sbtn-text').innerText = 'Select your option';
    // Display all books
    displayAllBooks();
});

// Function to display all books without any filter or sorting
function displayAllBooks() {
    const bookDisplay = document.getElementById('book-display');
    bookDisplay.innerHTML = ''; // Clear current book display

    books.forEach(book => {
        const bookCard = `
      <div class="book-display-card">
        <div class="book-card-img">
          <img src="${getBookImage(book.bookName)}" class="book-cover-image">
        </div>
        <div class="book-card-info">
          <span class="book-name">${book.bookName}</span>
          <span class="book-author">By ${book.bookAuthor}</span>
          <span class="book-price">RS.${book.bookPrice}&emsp;Rating: ${book.bookRating}/5</span>
          <span class="book-date">Published on ${book.bookDate}</span>
          <div class="book-card-btn-grp">
            <div class="book-card-btns">
                <button>
                    Add to Wishlist
                </button>
                <button>
                    Reserve
                </button>
            </div>
          </div>
        </div>
      </div>
    `;
        bookDisplay.innerHTML += bookCard;

    });

}

// Initial display of all books
displayAllBooks();