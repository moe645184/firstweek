function deleteBtn(id) {
  $.ajax({
    url: '/message/' + id,
    type: 'DELETE',
    success: function (result) {
      console.log(result)
      location.reload()
    },
    error: function (error) {
      console.log(`Error ${error}`)
    }
  })
}
