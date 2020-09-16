$.ajax({
    method: "GET",
    data: data,
    URL: "/api/vendors"
}).then(function (response) {
    console.log(response)
})
$("#updateBtn").on("click", function (event) {
    event.preventDefault()
    var id = $("#vendorDropdown").val()
    var data = {
        vendor_QOH: $("#vendor").val().trim(),
    }
    $.ajax({
        method: "PUT",
        data: data,
        URL: "/api/vendors/" + id
    }).then(function (response) {
        console.log(response)
        location.redirect("/")
    })
});