let grades = [];
var i;
var store;
var sum = 0;

$(".submit").click(function() {
    store = parseInt($("input").val());
    grades.push(store);
    $(".grade").val("");
});

$(".calculate").click(function() {
    for (i = 0; i < grades.length; i++) {
        sum += grades[i];
        var average = sum / grades.length;
    }

        if (average <= 100 && average >= 97) {
            $(".letter").text("A+");
        } else if (average <= 96 && average >= 93) {
            $(".letter").text("A");
        } else if (average <= 92 && average >= 90) {
            $(".letter").text("A-");
        } else if (average <= 89 && average >= 87) {
            $(".letter").text("B+");
        } else if (average <= 86 && average >= 83) {
            $(".letter").text("B");
        } else if (average <= 82 && average >= 80) {
            $(".letter").text("B-");
        } else if (average <= 79 && average >= 77) {
            $(".letter").text("C+");
        } else if (average <= 76 && average >= 73) {
            $(".letter").text("C");
        } else if (average <= 72 && average >= 70) {
            $(".letter").text("C-");
        } else if (average <= 69 && average >= 67) {
            $(".letter").text("D+");
        } else if (average <= 66 && average >= 65) {
            $(".letter").text("D");
        } else {
            $(".letter").text("F");
        }
});