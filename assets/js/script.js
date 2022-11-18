//save button variable
var saveBtn = $(".saveBtn");

//displays the current date/time
$("#currentDay").text(moment().format('MMM Do YYYY'));

//changes block color based on past/present/future
function blockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

