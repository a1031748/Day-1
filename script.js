// var title = document.querySelector('h1');
// console.log(title);
// var description = document.querySelector('p');
// console.log(description);
// var blackDoor = document.querySelector('.black');
// var brownDoor = document.querySelector('.brown');
// var redDoor = document.querySelector('.red');
// //var blackFrame = document.querySelector('.blackOut');
// var count = 0;
// var firstClick


// function chooseBlack() {
//     title.textContent = "You Picked the Black Door!";
//     description.textContent = "I opened the Brown Door which held a BAD THING.Now if you want to switch you can choose the Red Door or you can keep your first choice and open the Black Door.";
//     brownDoor.src = "./img/尺寸700x700/brown(open).png";
//     // blackDoor.ondbclick = location.href="https://mnya.tw/cc/word/1713.html";
//     count++;
//     console.log(count);
//     if(count>1){
//         location.href="./lose_page.html";
//     };

// };

// $(function(){
//     var firstClick;
//     $("#black").click(function(){
//         firstClick = true;
//     }
//     );
//     $("#red").click(function(){
//         if(firstClick){
//             $(location).prop('href', './win_page.html')
//         }
//     })
// })

$(function () {
    var firstClick;
    var count = 0;
    //first button
    $("#black").click(function () {
        $("#title").text("You Picked the Black Door!");
        $("#description").text("I opened the Brown Door which held a BAD THING.Now if you want to switch you can choose the Red Door or you can keep your first choice and open the Black Door.");
        $(".brown").attr("src", "./img/尺寸700x700/brown(open).png")
        firstClick = true;
        count++;
        if (count > 1) {
            $(location).prop('href', './lose_page.html')
        }
    });
    //second button
    $("#red").click(function () {
        if (firstClick) {
            $(location).prop('href', './win_page.html');
        }
    })

});

$(function () {
    var firstClick;
    var count = 0;
    // first button
    $("#red").click(function () {
        firstClick = true;
        $("#title").text("You Picked the Red Door!");
        $("#description").text("I opened the Brown Door which held a BAD THING.Now if you want to switch you can choose the Black Door or you can keep your first choice and open the Red Door.");
        $(".brown").attr("src", "./img/尺寸700x700/brown(open).png");
        count++;
        if (count > 1) {
            $(location).prop('href', './win_page.html');
        }


    });
    // second button
    $("#black").click(function () {
        if (firstClick) {
            $(location).prop('href', './lose_page.html')
        }
    })
});

$(function () {
    var firstClick;
    var count = 0;
    //first button
    $("#brown").click(function () {
        firstClick = true;
        $("#title").text("You Picked the Brown Door!");
        $("#description").text("I opened the Black Door which held a BAD THING.Now if you want to switch you can choose the Red Door or you can keep your first choice and open the Brown Door.");
        $(".black").attr("src", "./img/尺寸700x700/black(open).png");
        count++;
        if(count>1){
            $(location).prop('href', './win_page.html');
        }

    });
    //second door
    $("#red").click(function(){
        if (firstClick) {
            $(location).prop('href', './lose_page.html')
        }
    })
})