var list = document.querySelectorAll("li");
var deleteButton = document.querySelectorAll("span");
var input = document.querySelector("input");
var unorderList = document.querySelector("ul");

//click to strikethrough
$("ul").on("click", "li" ,function(){
    $(this).toggleClass("strikethrough");
});

//delete button appears on hover
// $(list).hover(function(){
//     $("span").show();
//     }, function(){
//     $("span").hide();
// });

//delete on click
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    // $(list).on("click", function(){
    //     $(this).fadeOut(400, function(){
    //         $(this).remove();
    //     });
    // });
    e.stopPropagation();
});

//add new todo from input
$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        var newToDo = $(this).val();
        //delete text inside input
        input.value = "";
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newToDo + "</li>");
    }
});
