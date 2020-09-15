$("#coffee").on("click",function() {
    $("#coffeeParagraph").slideToggle(function() {
        document.getElementById('coffeeParagraph').scrollIntoView({block: "end"});
    });
});

$("#food").on("click",function() {
    $("#foodParagraph").slideToggle(function() {
        document.getElementById('foodParagraph').scrollIntoView({block: "end"});
    });
});

$("#photo").on("click",function() {
    $("#photoParagraph").slideToggle(function() {
        document.getElementById('photoParagraph').scrollIntoView({block: "end"});
    });
});