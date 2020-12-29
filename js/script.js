$(function() {
    // First standart
    $("#eye-show").show();
    $("#eye-hide").hide();

    // Make the TAB key work on the textarea
    $('#html-code, #css-code, #js-code').keydown(function(e) {
        if (e.keyCode === 9) {
            e.preventDefault();
            // get the point of the cursor and split it in twoo halfs
            let point = this.selectionStart;
            let txt = this.value;
            let start = txt.slice(0, point);
            let end = txt.slice(point);
            txt = start + "    " + end;
            this.value = txt;
        }
    });

    // html code
    $('#html-code').keyup(function() {
        $(".body-site").html($('#html-code').val());
    });

    // css code
    $('#css-code').keyup(function() {
        $("style").html($('#css-code').val());
    });

    // js code
    $('#js-code').keyup(function() {
        $('.action').html('<script type="text/javascript">' + $('#js-code').val() + '</script>');
    });
});


// MouseOver and MouseOut//

// HTML
document.getElementById("html-frontEnd").addEventListener("mouseover", htmlMouseOver);
document.getElementById("html-frontEnd").addEventListener("mouseout", htmlMouseOut);
document.getElementById("html-code").addEventListener("mouseover", htmlMouseOver);
document.getElementById("html-code").addEventListener("mouseout", htmlMouseOut);

function htmlMouseOver() {
    document.getElementById("html-frontEnd").style.backgroundColor = "#CB4335";
    document.getElementById("title-html").style.color = "#333";
}

function htmlMouseOut() {
    document.getElementById("html-frontEnd").style.backgroundColor = "#333";
    document.getElementById("title-html").style.color = "#ccc";
}

// CSS
document.getElementById("css-frontEnd").addEventListener("mouseover", cssMouseOver);
document.getElementById("css-frontEnd").addEventListener("mouseout", cssMouseOut);
document.getElementById("css-code").addEventListener("mouseover", cssMouseOver);
document.getElementById("css-code").addEventListener("mouseout", cssMouseOut);

function cssMouseOver() {
    document.getElementById("css-frontEnd").style.backgroundColor = "#2471A3";
    document.getElementById("title-css").style.color = "#333";
}

function cssMouseOut() {
    document.getElementById("css-frontEnd").style.backgroundColor = "#333";
    document.getElementById("title-css").style.color = "#ccc";
}

// JS
document.getElementById("js-frontEnd").addEventListener("mouseover", jsMouseOver);
document.getElementById("js-frontEnd").addEventListener("mouseout", jsMouseOut);
document.getElementById("js-code").addEventListener("mouseover", jsMouseOver);
document.getElementById("js-code").addEventListener("mouseout", jsMouseOut);

function jsMouseOver() {
    document.getElementById("js-frontEnd").style.backgroundColor = "#FFC300";
    document.getElementById("title-js").style.color = "#333";
}

function jsMouseOut() {
    document.getElementById("js-frontEnd").style.backgroundColor = "#333";
    document.getElementById("title-js").style.color = "#ccc";
}

// Click //
document.getElementById("html-section-select").addEventListener("click", function() {
    document.getElementById("html-section-select").style.boxShadow = "10px 10px 10px #FA041E";
    document.getElementById("css-section-select").style.boxShadow = "0px 0px 0px";
    document.getElementById("js-section-select").style.boxShadow = "0px 0px 0px";
});

document.getElementById("css-section-select").addEventListener("click", function() {
    document.getElementById("css-section-select").style.boxShadow = "10px 10px 10px #374FE5";
    document.getElementById("html-section-select").style.boxShadow = "0px 0px 0px";
    document.getElementById("js-section-select").style.boxShadow = "0px 0px 0px";
});

document.getElementById("js-section-select").addEventListener("click", function() {
    document.getElementById("js-section-select").style.boxShadow = "10px 10px 10px #FAF704";
    document.getElementById("html-section-select").style.boxShadow = "0px 0px 0px";
    document.getElementById("css-section-select").style.boxShadow = "0px 0px 0px";
});

$("#eye-hide").on("click", function(e) {
    e.preventDefault();
    $("#eye-hide").removeClass("active")
    $("#eye-show").addClass("active");
    $("#eye-show").show();
    $("#eye-hide").hide();
    $(".coding").show();
    $("#header-default").show();
    $("#footer-default").show();
    $(".website-title").show();
});

$("#eye-show").on("click", function(e) {
    e.preventDefault();
    $("#eye-show").removeClass("active")
    $("#eye-hide").addClass("active");
    $("#eye-hide").show();
    $("#eye-show").hide();
    $(".coding").hide();
    $("#header-default").hide();
    $("#footer-default").hide();
    $(".website-title").hide();
});