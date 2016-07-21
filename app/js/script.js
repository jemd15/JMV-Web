$(document).ready(function() {
    $("#inicio").on("click",function () {
        $(this).addClass("active");
        $("#tab-inicio").removeClass("hide");
        $("#tab-que-es-jmv").addClass("hide");
        $("#que-es-jmv").removeClass("active");
        $("#tab-consejo-nacional").addClass("hide");
        $("#consejo-nacional").removeClass("active");
        $("#tab-galeria").addClass("hide");
        $("#galeria").removeClass("active");
        $("#tab-centros").addClass("hide");
        $("#centros").removeClass("active");
        $("#tab-contacto").addClass("hide")
        $("#contacto").removeClass("active");
    });
    $("#que-es-jmv").on("click",function () {
        $(this).addClass("active");
        $("#tab-que-es-jmv").removeClass("hide");
        $("#tab-inicio").addClass("hide");
        $("#inicio").removeClass("active");
        $("#tab-consejo-nacional").addClass("hide");
        $("#consejo-nacional").removeClass("active");
        $("#tab-galeria").addClass("hide");
        $("#galeria").removeClass("active");
        $("#tab-centros").addClass("hide");
        $("#centros").removeClass("active");
        $("#tab-contacto").addClass("hide");
        $("#contacto").removeClass("active");
    });
    $("#consejo-nacional").on("click",function () {
        $(this).addClass("active");
        $("#tab-consejo-nacional").removeClass("hide");
        $("#tab-inicio").addClass("hide");
        $("#inicio").removeClass("active");
        $("#tab-que-es-jmv").addClass("hide");
        $("#que-es-jmv").removeClass("active");
        $("#tab-galeria").addClass("hide");
        $("#galeria").removeClass("active");
        $("#tab-centros").addClass("hide");
        $("#centros").removeClass("active");
        $("#tab-contacto").addClass("hide");
        $("#contacto").removeClass("active");
    });
    $("#galeria").on("click",function () {
        $(this).addClass("active");
        $("#tab-galeria").removeClass("hide");
        $("#tab-inicio").addClass("hide");
        $("#inicio").removeClass("active");
        $("#tab-que-es-jmv").addClass("hide");
        $("#que-es-jmv").removeClass("active");
        $("#tab-consejo-nacional").addClass("hide");
        $("#consejo-nacional").removeClass("active");
        $("#tab-centros").addClass("hide");
        $("#centros").removeClass("active");
        $("#tab-contacto").addClass("hide");
        $("#contacto").removeClass("active");
    });
    $("#centros").on("click",function () {
        $(this).addClass("active");
        $("#tab-centros").removeClass("hide");
        $("#tab-inicio").addClass("hide");
        $("#inicio").removeClass("active");
        $("#tab-que-es-jmv").addClass("hide");
        $("#que-es-jmv").removeClass("active");
        $("#tab-galeria").addClass("hide");
        $("#galeria").removeClass("active");
        $("#tab-consejo-nacional").addClass("hide");
        $("#consejo-nacional").removeClass("active");
        $("#tab-contacto").addClass("hide");
        $("#contacto").removeClass("active");
    });
    $("#contacto").on("click",function () {
        $(this).addClass("active");
        $("#tab-contacto").removeClass("hide");
        $("#tab-inicio").addClass("hide");
        $("#inicio").removeClass("active");
        $("#tab-consejo-nacional").addClass("hide");
        $("#consejo-nacional").removeClass("active");
        $("#tab-galeria").addClass("hide");
        $("#galeria").removeClass("active");
        $("#tab-centros").addClass("hide");
        $("#centros").removeClass("active");
        $("#tab-que-es-jmv").addClass("hide");
        $("#que-es-jmv").removeClass("active");
    });
    $("img.circle.responsive-img.animated").mouseenter(function () {
        $(this).addClass("tada");
        $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("tada");
        });
    });
    window.twttr = (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function(f) {
            t._e.push(f);
        };

        return t;
    }(document, "script", "twitter-wjs"));
});