$.ajax({
    method: "GET",
    data: data,
    URL: "/api/quantity"
}).then(function (response) {
    console.log(response)
})
$("#updateBtn").on("click", function (event) {
    event.preventDefault()
    var id = $("#quantityDropdown").val()
    var data = {
        quantity_QOH: $("#quantity_QOH").val().trim(),
    }
    $.ajax({
        method: "PUT",
        data: data,
        URL: "/api/quantity/" + id
    }).then(function (response) {
        console.log(response)
        location.redirect("/")
    })
});