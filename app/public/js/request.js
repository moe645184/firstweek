function deleteBtn(id) {
    $.ajax({
        url: '/message/'+id,
        type: "DELETE",
        success: function (result) {
            console.log(result)
            location.reload()
        },
        error: function (error) {
            console.log(`Error ${error}`)
        }
    })
}

function reviseBtn(id) {
    $.ajax({
        url: '/message/'+id,
        type: "PUT",
        success: function (result) {
            console.log(result)
        },
        error: function (error) {
            console.log(`Error ${error}`)
        }
    })
}