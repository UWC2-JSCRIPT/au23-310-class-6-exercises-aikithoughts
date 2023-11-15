
$(document).ready(function () {
  /**
   * Toggles "done" class on <li> element
   */
  $('ul').on('click', 'li', function (e) {
    $(this).toggleClass('delete');
  });

  /**
   * Delete element when delete link clicked
   */

  $('ul').on('click', '.delete', function(e) {
    $(this).parent().remove();
  })

  /**
   * Adds new list item to <ul>
   */
  const addListItem = function (e) {
    e.preventDefault();
    const $text = $('input').val();
    const $ul = $('ul');
    const $li = $('<li>', {
      text: $text,
    });
    $li.append(createDeleteButton());
    $ul.append($li);
    $('input').val('New item');
  };

  // add listener for add
  $('.add-item').on('click', addListItem);

  function createDeleteButton(){
    return $('<a>', {
      class: 'delete',
      text: 'Delete'
    })
  }

})


