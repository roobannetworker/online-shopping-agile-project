/* =====================================================
   SHOP EASY - JAVASCRIPT
   PBI-01 to PBI-04
   ===================================================== */


/* =====================================================
   PRODUCT DATA
   ===================================================== */

const products = [

    {
        name: "Smartphone",
        category: "Electronics",
        price: 19999,
        icon: "📱",
        description: "Modern smartphone with great features."
    },

    {
        name: "Wireless Headphones",
        category: "Electronics",
        price: 2499,
        icon: "🎧",
        description: "High-quality wireless headphones."
    },

    {
        name: "Smart Watch",
        category: "Electronics",
        price: 3999,
        icon: "⌚",
        description: "Track your activities and stay connected."
    },

    {
        name: "Laptop",
        category: "Electronics",
        price: 49999,
        icon: "💻",
        description: "Powerful laptop for work and study."
    },

    {
        name: "Premium Tyre",
        category: "Tyres",
        price: 2500,
        icon: "🛞",
        description: "Premium quality tyre for better performance."
    },

    {
        name: "Bike Tyre",
        category: "Tyres",
        price: 1800,
        icon: "🛞",
        description: "Durable bike tyre for everyday use."
    },

    {
        name: "Tube",
        category: "Tubes",
        price: 500,
        icon: "🔵",
        description: "High-quality tube for tyres."
    },

    {
        name: "Puncture Repair Kit",
        category: "Puncture Repair",
        price: 250,
        icon: "🔧",
        description: "Useful kit for repairing tyre punctures."
    }

];


/* =====================================================
   DISPLAY PRODUCTS
   ===================================================== */

function displayProducts(productList) {

    const productListElement =
        document.getElementById("productList");

    const searchMessage =
        document.getElementById("searchMessage");


    // Safety check

    if (!productListElement) {
        return;
    }


    // Clear existing products

    productListElement.innerHTML = "";


    // No products found

    if (productList.length === 0) {

        productListElement.innerHTML = `

            <div class="product-card">

                <h3>
                    No Products Found
                </h3>

                <p>
                    Try searching for another product.
                </p>

            </div>

        `;


        if (searchMessage) {

            searchMessage.textContent =
                "No products found.";

            searchMessage.style.color =
                "red";
        }

        return;
    }


    // Display products

    productList.forEach(function(product) {

        const productCard =
            document.createElement("div");


        productCard.className =
            "product-card";


        productCard.innerHTML = `

            <div class="product-image">
                ${product.icon}
            </div>

            <h3>
                ${product.name}
            </h3>

            <p>
                ${product.category}
            </p>

            <p>
                ${product.description}
            </p>

            <strong>
                ₹${product.price.toLocaleString("en-IN")}
            </strong>

            <button
                type="button"
                onclick="addToCart('${product.name}')"
            >
                Add to Cart
            </button>

        `;


        productListElement.appendChild(
            productCard
        );

    });


    // Display result count

    if (searchMessage) {

        searchMessage.textContent =
            `${productList.length} product(s) found.`;

        searchMessage.style.color =
            "green";
    }

}


/* =====================================================
   PBI-04 - FILTER PRODUCTS BY CATEGORY
   ===================================================== */

function filterByCategory(categoryName) {

    // Find products belonging to selected category

    const filteredProducts =
        products.filter(function(product) {

            return product.category === categoryName;

        });


    // Display filtered products

    displayProducts(filteredProducts);


    // Update message

    const searchMessage =
        document.getElementById("searchMessage");


    if (searchMessage) {

        searchMessage.textContent =
            `${categoryName}: ${filteredProducts.length} product(s) found.`;

        searchMessage.style.color =
            "green";
    }


    // Scroll to products section

    const productsSection =
        document.getElementById("products");


    if (productsSection) {

        productsSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================================
   PBI-04 - SHOW ALL PRODUCTS
   ===================================================== */

function showAllProducts() {

    // Display all products

    displayProducts(products);


    // Update message

    const searchMessage =
        document.getElementById("searchMessage");


    if (searchMessage) {

        searchMessage.textContent =
            `${products.length} product(s) available.`;

        searchMessage.style.color =
            "green";
    }


    // Scroll to products section

    const productsSection =
        document.getElementById("products");


    if (productsSection) {

        productsSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================================
   SEARCH PRODUCTS
   ===================================================== */

function searchProducts() {

    const searchInput =
        document.getElementById("searchInput");


    if (!searchInput) {
        return;
    }


    // Get search text

    const searchText =
        searchInput.value.trim().toLowerCase();


    // Empty search → show all products

    if (searchText === "") {

        displayProducts(products);

        return;
    }


    // Filter products

    const filteredProducts =
        products.filter(function(product) {

            return (

                product.name
                    .toLowerCase()
                    .includes(searchText)

                ||

                product.category
                    .toLowerCase()
                    .includes(searchText)

                ||

                product.description
                    .toLowerCase()
                    .includes(searchText)

            );

        });


    // Display search results

    displayProducts(filteredProducts);


    // Scroll to products

    const productsSection =
        document.getElementById("products");


    if (productsSection) {

        productsSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================================
   ADD TO CART
   ===================================================== */

function addToCart(productName) {

    const cartMessage =
        document.getElementById("cartMessage");


    if (cartMessage) {

        cartMessage.textContent =
            `${productName} added to your cart.`;

        cartMessage.style.color =
            "green";

    }

}


/* =====================================================
   VIEW CART
   ===================================================== */

function viewCart() {

    const cartMessage =
        document.getElementById("cartMessage");


    if (cartMessage) {

        cartMessage.textContent =
            "Your cart is ready for shopping.";

        cartMessage.style.color =
            "black";

    }

}


/* =====================================================
   LOGIN
   ===================================================== */

function handleLogin(event) {

    // Prevent page reload

    event.preventDefault();


    const email =
        document.getElementById("email").value.trim();


    const password =
        document.getElementById("password").value;


    const message =
        document.getElementById("message");


    // Check empty fields

    if (email === "" || password === "") {

        message.textContent =
            "Please enter email and password.";

        message.style.color =
            "red";

        return;
    }


    // Demo login credentials

    if (
        email === "user@example.com" &&
        password === "123456"
    ) {

        message.textContent =
            "Login successful!";

        message.style.color =
            "green";


        /*
         * Hide login page
         * Show home page
         */

        const loginPage =
            document.getElementById("loginPage");


        const homePage =
            document.getElementById("homePage");


        if (loginPage) {

            loginPage.style.display =
                "none";

        }


        if (homePage) {

            homePage.style.display =
                "block";

        }

    }

    else {

        message.textContent =
            "Invalid email or password.";

        message.style.color =
            "red";

    }

}


/* =====================================================
   PAGE LOAD
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        /* ---------------------------------------------
           LOGIN / HOME INITIAL STATE
           --------------------------------------------- */

        const loginPage =
            document.getElementById("loginPage");


        const homePage =
            document.getElementById("homePage");


        /*
         * Login page appears first.
         * Home page stays hidden until successful login.
         */

        if (loginPage) {

            loginPage.style.display =
                "flex";

        }


        if (homePage) {

            homePage.style.display =
                "none";

        }


        /* ---------------------------------------------
           DISPLAY PRODUCTS
           --------------------------------------------- */

        displayProducts(products);


        /* ---------------------------------------------
           SEARCH BUTTON
           --------------------------------------------- */

        const searchButton =
            document.getElementById("searchButton");


        if (searchButton) {

            searchButton.addEventListener(
                "click",
                searchProducts
            );

        }


        /* ---------------------------------------------
           SEARCH WITH ENTER KEY
           --------------------------------------------- */

        const searchInput =
            document.getElementById("searchInput");


        if (searchInput) {

            searchInput.addEventListener(
                "keydown",
                function(event) {

                    if (event.key === "Enter") {

                        event.preventDefault();

                        searchProducts();

                    }

                }
            );

        }


        /* ---------------------------------------------
           LOGIN FORM
           --------------------------------------------- */

        const loginForm =
            document.getElementById("loginForm");


        if (loginForm) {

            loginForm.addEventListener(
                "submit",
                handleLogin
            );

        }


        /* ---------------------------------------------
           VIEW CART BUTTON
           --------------------------------------------- */

        const viewCartButton =
            document.getElementById("viewCartButton");


        if (viewCartButton) {

            viewCartButton.addEventListener(
                "click",
                viewCart
            );

        }


    }
);