/* =====================================================
   SHOP EASY - JAVASCRIPT
   ===================================================== */


/* =====================================================
   LOGIN PROTECTION
   ===================================================== */

// Check whether the user is logged in
function checkLogin() {

    const currentPage =
        window.location.pathname.split("/").pop();

    const isLoggedIn =
        localStorage.getItem("shopEasyLoggedIn");

    // If user opens index.html without logging in,
    // redirect to login page
    if (
        currentPage === "index.html" &&
        isLoggedIn !== "true"
    ) {

        window.location.href = "login.html";

        return false;
    }

    return true;
}


/* =====================================================
   PRODUCT DATA
   ===================================================== */

const products = [

    {
        name: "Smartphone",
        category: "Electronics",
        price: 19999,
        icon: "📱",
        description:
            "Modern smartphone with great features."
    },

    {
        name: "Wireless Headphones",
        category: "Electronics",
        price: 2499,
        icon: "🎧",
        description:
            "High-quality wireless headphones."
    },

    {
        name: "Smart Watch",
        category: "Electronics",
        price: 3999,
        icon: "⌚",
        description:
            "Track your activities and stay connected."
    },

    {
        name: "Laptop",
        category: "Electronics",
        price: 49999,
        icon: "💻",
        description:
            "Powerful laptop for work and study."
    },

    {
        name: "Premium Tyre",
        category: "Tyres",
        price: 2500,
        icon: "🛞",
        description:
            "Premium quality tyre for better performance."
    },

    {
        name: "Bike Tyre",
        category: "Tyres",
        price: 1800,
        icon: "🛞",
        description:
            "Durable bike tyre for everyday use."
    },

    {
        name: "Tube",
        category: "Tubes",
        price: 500,
        icon: "🔵",
        description:
            "High-quality tube for tyres."
    },

    {
        name: "Puncture Repair Kit",
        category: "Puncture Repair",
        price: 250,
        icon: "🔧",
        description:
            "Useful kit for repairing tyre punctures."
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


    // Clear old products

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


    // Number of products found

    if (searchMessage) {

        searchMessage.textContent =
            `${productList.length} product(s) found.`;

        searchMessage.style.color =
            "green";
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


    const searchText =
        searchInput.value
            .trim()
            .toLowerCase();


    // Empty search

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


    // Display results

    displayProducts(
        filteredProducts
    );

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

    event.preventDefault();


    const email =
        document.getElementById("email")
            .value
            .trim();

    const password =
        document.getElementById("password")
            .value;

    const message =
        document.getElementById("message");


    // Empty fields

    if (
        email === "" ||
        password === ""
    ) {

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

        // Save login status

        localStorage.setItem(
            "shopEasyLoggedIn",
            "true"
        );


        message.textContent =
            "Login successful! Redirecting...";

        message.style.color =
            "green";


        // Move to Home page

        setTimeout(function() {

            window.location.href =
                "index.html";

        }, 500);


    } else {

        message.textContent =
            "Invalid email or password.";

        message.style.color =
            "red";
    }

}


/* =====================================================
   LOGOUT
   ===================================================== */

function logout() {

    localStorage.removeItem(
        "shopEasyLoggedIn"
    );


    window.location.href =
        "login.html";
}


/* =====================================================
   PAGE LOAD
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        /* ---------------------------------------------
           LOGIN PAGE
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
           HOME PAGE LOGIN PROTECTION
           --------------------------------------------- */

        const homePage =
            document.getElementById("homePage");


        if (homePage) {

            if (!checkLogin()) {
                return;
            }

        }


        /* ---------------------------------------------
           Display Products
           --------------------------------------------- */

        displayProducts(products);


        /* ---------------------------------------------
           Search Button
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
           Search with ENTER
           --------------------------------------------- */

        const searchInput =
            document.getElementById("searchInput");


        if (searchInput) {

            searchInput.addEventListener(
                "keydown",
                function(event) {

                    if (
                        event.key === "Enter"
                    ) {

                        event.preventDefault();

                        searchProducts();

                    }

                }
            );

        }


        /* ---------------------------------------------
           View Cart Button
           --------------------------------------------- */

        const viewCartButton =
            document.getElementById(
                "viewCartButton"
            );


        if (viewCartButton) {

            viewCartButton.addEventListener(
                "click",
                viewCart
            );

        }


        /* ---------------------------------------------
           Logout Button
           --------------------------------------------- */

        const logoutButton =
            document.getElementById(
                "logoutButton"
            );


        if (logoutButton) {

            logoutButton.addEventListener(
                "click",
                logout
            );

        }

    }
);