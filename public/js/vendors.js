$("#sourceBtn").on("click", function (event) {
    event.preventDefault()
    var id = $(this).attr("data-itemid");
    console.log(id);
    $.get("/api/get_vendor/" + id
    ).then(function (response) {
        console.log(response)
    }).catch(err=>console.log(err))
});
console.log("this is loaded")