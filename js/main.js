document.addEventListener("DOMContentLoaded", function () {
    // // Menu
    // document.querySelectorAll(".menuItems a").forEach(item => {
    //     item.addEventListener("click", function (event) {
    //         event.preventDefault();
            
    //         let page = this.getAttribute("data-item");
    //         if (page === "New") {
    //             loadNewProducts();
    //         }
    //     });
    // });

    // function loadNewProducts() {
    //     fetch("new_products.html")
    //         .then(response => response.text())
    //         .then(data => {
    //             document.querySelector(".products").innerHTML = data;
    //         })
    //         .catch(error => console.error("Lỗi tải trang:", error));
    // }
    
    // Ads
    const closeAdButton = document.querySelector(".close-ad");
    if (closeAdButton) {
        closeAdButton.addEventListener("click", function () {
            const ads = document.querySelector(".ads");
            if (ads) {
                ads.style.display = "none";
            }
        });
    }

    // // footer
    // fetch('footer.html')
    // .then(response => response.text())
    // .then(data => {
    //   document.getElementById('footer').innerHTML = data;
    // });
  
    // Paging
    const productsPerPage = 8;
    const products = document.querySelectorAll(".container.page-wrapper");
    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    let currentPage = 1;

    function showPage(page) {
        products.forEach((product, index) => {
            product.style.display =
                index >= (page - 1) * productsPerPage && index < page * productsPerPage
                    ? "block"
                    : "none";
        });

        const prevPageButton = document.getElementById("prevPage");
        const nextPageButton = document.getElementById("nextPage");
        if (prevPageButton) prevPageButton.disabled = page === 1;
        if (nextPageButton) nextPageButton.disabled = page === totalPages;

        updatePageNumbers();
    }

    function updatePageNumbers() {
        const pageNumbers = document.getElementById("pageNumbers");
        if (pageNumbers) {
            pageNumbers.innerHTML = `Trang ${currentPage} / ${totalPages}`;
        }
    }

    const prevPageButton = document.getElementById("prevPage");
    const nextPageButton = document.getElementById("nextPage");

    if (prevPageButton) {
        prevPageButton.addEventListener("click", function () {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
            }
        });
    }

    if (nextPageButton) {
        nextPageButton.addEventListener("click", function () {
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
            }
        });
    }

    showPage(currentPage);
});
