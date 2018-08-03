

$('button').click(function() {
  var text = $('.forum').append('<hr><li>' + $('#text').val() + '</li>');
  var name = $('.forum').append('<li><h5>' + 'Posted by: ' + '<b>' + $('#name').val() + '</li></b></h4>');
  var comment = $('.forum').append('<a href="#comment"><span class="glyphicon glyphicon-comment" style="display:inline-block; width: 50px;"></span></a>');
  var edit = $('.forum').append('<a href="#edit"><span class="glyphicon glyphicon-edit" style="display:inline-block; width: 50px;"></span></a>');
  var remove =  $('.forum').append('<a href="#remove"><span class="glyphicon glyphicon-remove" style="display:inline-block; width: 50px;"></span></a>');
  });
