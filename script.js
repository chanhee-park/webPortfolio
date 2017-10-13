var projectList = document.getElementById("project-list");
var loading = document.getElementById("background-loading");
var logo = document.getElementById("background-logo");
var ui = document.getElementById("background-interface");

$(document).ready(function () {
    $(document).mousemove(function (e) {
        if(e.pageX<1200 || e.pageX>1900){
            loading.style.visibility = 'visible';
            logo.style.visibility ='hidden';
            ui.style.visibility ='hidden';
            document.body.style.backgroundColor = "rgb(56, 54, 56)";
            return;
        }
        var top = 375 - (e.pageY / 2);
        projectList.style.top = top + 'px';
    });
});


$("#healthy_diet1").on({
    "mouseover" : function() {
        noneToProjectBackground();
        logo.src = "/images/healthy_diet_logo.gif";
        ui.src = "/images/healthy_diet.png";
        document.body.style.backgroundColor = "rgb(75, 70, 75)";
    }
});
$("#healthy_diet2").on({
    "mouseover" : function() {
        noneToProjectBackground();
        logo.src = "/images/healthy_diet2_logo.gif";
        ui.src = "/images/healthy_diet2.png";
        document.body.style.backgroundColor = "rgb(45, 40, 45)";
    }
});
$("#healthy_diet3").on({
    "mouseover" : function() {
        noneToProjectBackground();
        logo.src = "/images/healthy_diet_logo.gif";
        ui.src = "/images/healthy_diet.png";
        document.body.style.backgroundColor = "rgb(61, 60, 70)";
    }
});
$("#healthy_diet4").on({
    "mouseover" : function() {
        noneToProjectBackground();
        logo.src = "/images/healthy_diet2_logo.gif";
        ui.src = "/images/healthy_diet2.png";
        document.body.style.backgroundColor = "rgb(25, 66, 116)";
    }
});
$("#healthy_diet5").on({
    "mouseover" : function() {
        noneToProjectBackground();
        logo.src = "/images/healthy_diet_logo.gif";
        ui.src = "/images/healthy_diet.png";
        document.body.style.backgroundColor = "rgb(40, 83, 65)";
    }
});
$("#healthy_diet6").on({
    "mouseover" : function() {
        noneToProjectBackground();
        logo.src = "/images/healthy_diet2_logo.gif";
        ui.src = "/images/healthy_diet2.png";
        document.body.style.backgroundColor = "#7d515d";

    }
});
$("#healthy_diet7").on({
    "mouseover" : function() {
        noneToProjectBackground();
        logo.src = "/images/healthy_diet_logo.gif";
        ui.src = "/images/healthy_diet.png";
        document.body.style.backgroundColor = "#7D524F";
    }
});

function noneToProjectBackground() {
    loading.style.visibility = 'hidden';
    logo.style.visibility ='visible';
    ui.style.visibility ='visible';
}
