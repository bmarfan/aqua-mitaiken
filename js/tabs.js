"use strict";
$(function () {
    unitsAll();
    $("#tabFinal").toggleClass('visible');
    $("#infoSegEstrofa1l").toggleClass('visible');
    $("#buttonSegEstrofa1").toggleClass('active');
});
function unitsAll() {
    showUnits();
    showTabs();
    getUnit();

}

function showUnits() {
    for (let i = 0; i < allUnits.length; i++) {
        let unitName = allUnits[i].n;
        let unitText = allUnits[i].v;
        $('#unitsOpciones').append($("<button id='button" + unitName + "' class='contentButton btn btn-dark' type='button'> " + unitText + " </button>"));
        $('#contentTabs').append($("<div id='tab" + unitName + "' class='contentTab'></div>"));
        $('#infoTabs').append($("<div id='info" + unitName + "' class='infoTab'></div>"));
    }
}

function showTabs() {
    for (let i = 0; i < allUnits.length; i++) {
        let unitName = allUnits[i].n;
        $("#button" + unitName + "").on('click', function () {
            if ($(".content-tabs div").hasClass('visible')) {
                $(".content-tabs div").removeClass('visible')
            };
            if ($(".info-tabs div").hasClass('visible')) {
                $(".info-tabs div").removeClass('visible')
            };
            if ($(".button-container button").hasClass('active')) {
                $(".button-container button").removeClass('active')
            };
        });

        $("#button" + unitName + "").on('click', function (event) {
            event.preventDefault();
            $("#tab" + unitName + "").toggleClass('visible');
            $("#info" + unitName + "").toggleClass('visible');
             $("#button" + unitName + "").toggleClass('active');
        });
    }
}

function getUnit() {
    for (let i = 0; i < allUnits.length; i++) {
        let unit = allUnits[i];
        let unitN = unit.n;

        let p = idolArray(unit);

        let head = document.createElement("div");
        $(head).addClass("unitHeader");
        $("#tab" + unitN + "").append(head);

        for (let j = 0; j < p.length; j++) {
            let idol = p[j];
            $("#tab" + unitN + "").append("<div class='idol " + idol.val + "' style='--top:" + idol.top + "; --left:" + idol.left + "'></div>")
        }
    }
}

