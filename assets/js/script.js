var saveBtn = $(".saveBtn");

var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
    console.log(localStorage.getItem)(time, text)
})

function timeBlockCode () {
    var timeNow = moment().hours();

    $(".time-block").each(function() {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
    if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (blockTime === timeNow) {
        $(this).removeclass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");

    }
    })
}

timeBlockCode();