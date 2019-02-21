$(function() {
  var span = $('span');
  span.each(function(index, element) {
    if (index % 2 == 0) {
      $(element).css('color', 'red');
    }
  });

  var paragraphs = $('p').css({
    'margin' : '0',
    'padding' : '0',
    'width' : '100%',
    'padding':'10px'
  });
  paragraphs.each(function(index, element) {
    if (index % 2 == 0) {
      $(element).css('background-color', '#e4e7e8');
    } else {
      $(element).css('background-color', 'yellow');
    }
    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
    $(element).append(button);
    $('button').css({
      'background-color': '#5ce5ce',
      'margin' : '0 0 0 20px',
      'height' : '20px',
      'width' : '80px',
      'border' : 'none'
    });

  })

  $('button').click(function() {
    alert('Index of this element is: ' + $(this).attr('data-tmp'));
  })
});
