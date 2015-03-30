require.config({
    baseUrl: 'js/',
    paths: {
        "jquery": "../node_modules/jquery/dist/jquery",
        "jquery-ui": "../node_modules/jquery-ui/jquery-ui"
    },
    shim: {
        "../node_modules/jquery/dist/jquery-ui": ["jquery"]
    }
});

require(["jquery", "jquery-ui"], function() {
    $("#text").text("Hello Earth");
    $("<p/>")
        .text("Welcome to the jibo template challenge. Please read the README.md for more info.")
        .appendTo($("body"));
});