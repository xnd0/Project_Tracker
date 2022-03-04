
function update() {


    var gradDate = moment("2022-3-4").format("MMM Do, YYYY");
    $("#1a").text(gradDate);

    var time = moment().format("hh:mm:ss");
    $("#3a").text(time);


} setInterval(update, 1000);