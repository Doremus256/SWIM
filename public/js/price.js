$.ajax({
    method: "GET",
    data: data,
    URL: "/api/price"
}).then(function (response) {
    console.log(response)
})
$("#updateBtn").on("click", function (event) {
    event.preventDefault()
    var id = $("#priceDropdown").val()
    var data = {
        price_QOH: $("#price_QOH").val().trim(),
    }
    $.ajax({
        method: "PUT",
        data: data,
        URL: "/api/price/" + id
    }).then(function (response) {
        console.log(response)
        location.redirect("/")
    })
});

