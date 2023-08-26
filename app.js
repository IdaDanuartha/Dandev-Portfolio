(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


$(document).ready(function() {
    const itemLength = $(".port-item").length

    $(".port-item").slice(0, 6).show()
    $(".load-less").hide()

    $(".load-more").on("click", function() {
        $(".port-item:hidden").slice(0, 3).show();

        if($(".port-item:hidden").length == 0) {
            $(".load-more").hide();
        }

        if($(".port-item:visible").length == itemLength) {
            $(".load-less").show()
        }
    })

    $(".load-less").on("click", function() {
        $(".port-item:visible").slice(0, itemLength).hide();
        $(".port-item:hidden").slice(0, 6).show();

        if($(".port-item:visible").length == 6) {
            $(".load-less").hide();
            $(".load-more").show()
        }

        // if($(".port-item:hidden").length == 6) {
        //     $(".load-more").show()
        // }
    })
})