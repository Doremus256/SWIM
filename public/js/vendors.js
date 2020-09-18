$("#sourceBtn").on("click", function (event) {
    event.preventDefault()
    var id = $(this).attr("data-itemid");
    console.log(id);
    $.ajax({
        method: "GET",
        URL: "/api/get_vendor/" + id
    }).then(function (response) {
        console.log(response)
    })
});
console.log("this is loaded")