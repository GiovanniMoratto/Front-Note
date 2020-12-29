function transitionBoxCode() {
    setTimeout(function() {
        var box = document.querySelector("div.box-code");

        if (box) {
            box.className = "box-code1";
            setTimeout(function() {
                var box = document.querySelector("div.box-code1");

                if (box.className = "box-code1") {
                    box.className = "box-code";
                } else {
                    box = document.querySelector("div.box-code");
                    box.className = "box-code1";
                }
            }, 2000)
        } else {
            box = document.querySelector("div.box-code1");
            box.className = "box-code";
        }
    }, 1500);
}

function transitionBoxHarvardx() {
    setTimeout(function() {
        var box = document.querySelector("div.box-harvardx");

        if (box) {
            box.className = "box-harvardx1";
            setTimeout(function() {
                var box = document.querySelector("div.box-harvardx1");

                if (box.className = "box-harvardx1") {
                    box.className = "box-harvardx";
                } else {
                    box = document.querySelector("div.box-harvardx");
                    box.className = "box-harvardx1";
                }
            }, 2000)
        } else {
            box = document.querySelector("div.box-harvardx1");
            box.className = "box-harvardx";
        }
    }, 4500);
}

function transitionBoxPset8() {
    setTimeout(function() {
        var box = document.querySelector("div.box-pset8");

        if (box) {
            box.className = "box-pset8-1";
            setTimeout(function() {
                var box = document.querySelector("div.box-pset8-1");

                if (box.className = "box-pset8-1") {
                    box.className = "box-pset8";
                } else {
                    box = document.querySelector("div.box-pset8");
                    box.className = "box-pset8-1";
                }
            }, 2000)
        } else {
            box = document.querySelector("div.box-pset8-1");
            box.className = "box-pset8";
        }
    }, 7500);
}

function transitionBoxHomepage() {
    setTimeout(function() {
        var box = document.querySelector("div.box-homepage");

        if (box) {
            box.className = "box-homepage1";
        } else {
            box = document.querySelector("div.box-homepage1");
            box.className = "box-homepage";
        }
    }, 10000);
}

var boxCode = transitionBoxCode();
var boxCode = transitionBoxHarvardx();
var boxCode = transitionBoxPset8();
var boxCode = transitionBoxHomepage();