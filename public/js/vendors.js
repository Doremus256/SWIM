$("#sourceBtn").on("click", function (event) {
    event.preventDefault()
    $.ajax({
        method: "GET",
        data: data,
        URL: "/api/vendors/" + id
    }).then(function (response) {
        console.log(response)
    })
});