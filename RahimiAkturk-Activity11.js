$(document).ready(function() {

    $("a[title='toobin']").click(function() {
        $.getJSON("./json_files/toobin.json", function(data){
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("main").empty().append("<h1>" + value.title +"</h1>" + 
                    "<img src=\""+ value.image + "\">" +
                    "<h2>" + value.month + "<br>"+ value.speaker +"</h2>" + 
                    "<p>" + value.text + "</p>");   
                });
            });
        });        
    });

    $("a[title='sorkin']").click(function() {
        $.getJSON("./json_files/sorkin.json", function(data){
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("main").empty().append("<h1>" + value.title +"</h1>" + 
                    "<img src=\""+ value.image + "\">" +
                    "<h2>" + value.month + "<br>"+ value.speaker +"</h2>" + 
                    "<p>" + value.text + "</p>");
                });
            });
        }); 
    });

    $("a[title='chua']").click(function() {
        $.getJSON("./json_files/chua.json", function(data){
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("main").empty().append("<h1>" + value.title +"</h1>" + 
                    "<img src=\""+ value.image + "\">" +
                    "<h2>" + value.month + "<br>"+ value.speaker +"</h2>" + 
                    "<p>" + value.text + "</p>");
                });
            });
        }); 
    });

    $("a[title='sampson']").click(function() {
        $.getJSON("./json_files/sampson.json", function(data) {
            let html = "";
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("main").empty().append("<h1>" + value.title +"</h1>" + 
                    "<img src=\""+ value.image + "\">" +
                    "<h2>" + value.month + "<br>"+ value.speaker +"</h2>" + 
                    "<p>" + value.text + "</p>"); 
                });
            });
        });
    });
    
});
