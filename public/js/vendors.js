<<<<<<< HEAD
$("#sourceBtn").on("click", function (event) {
=======
$.ajax({
    method: "GET",
    data: data,
    URL: "/api/vendors"
}).then(function (response) {
    console.log(response)
})


$("#updateBtn").on("click", function (event) {
>>>>>>> 590e16f7f210212053bc7e17a8a7e69d23fcbaf0
    event.preventDefault()
    $.ajax({
        method: "GET",
        data: data,
        URL: "/api/vendors/" + id
    }).then(function (response) {
        console.log(response)
        location.redirect("/")
    })
});