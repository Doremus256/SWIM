$("#updateBtn").on("click", function (event) {
    event.preventDefault()
    var id = $("#itemDropdown").val()
    var data = {
        item_QOH: $("#item_QOH").val().trim(),
    }
    $.ajax({
        method: "PUT",
        data: data,
        URL: "/api/items/" + id
    }).then(function (response) {
        console.log(response)
        location.redirect("/")
    })
});