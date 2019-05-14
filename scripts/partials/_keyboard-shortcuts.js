// KEYBOARD SHORTCUTS

// show about text on ESC
$('body').keydown(function(e) {

  // if ESC key
  if (e.keyCode === 27) {
    // hide dialog/modal window
    if ($('body').hasClass('noScroll')) {
      hideModalWindow();
    } else {
      showModalWindow();
    }
  }
})