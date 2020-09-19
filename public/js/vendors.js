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

$("#addInventory").on("click", function (event) {
    event.preventDefault()
    var newitem = {
        item_name: $("#item_name").val(), 
        item_description: $("#item_description").val(),
        item_QOH: $("#item_QOH").val(),
        item_price: $("#item_price").val(),
        VendorId: $("#VendorId").val()
    }
    console.log(newitem)
    $.ajax({
        method: "POST",
        data: newitem,
        url: "/api/add_item"
    }).then(function (response) {
        console.log(response)
    }).catch(err=>console.log(err))
});

// $.ajax({
//     method: "GET",
//     url: "/api/get_all_items"
// }).then(function (response) {
//     console.log(response)
// }).catch(err=>console.log(err))