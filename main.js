var comment;
var edit;
var remove;
var postNum = 0;

$('button').click(function() {
  var newPost = $('#forum').append('<div id="post'+ postNum +'"></div>');

  var text = $('#post' + postNum).append('<hr><li>' + $('#text').val() + '</li>');
  var name = $('#post' + postNum).append('<li><h5>' + 'Posted by: ' + '<b>' + $('#name').val() + '</li></b></h4>');
  var comment = $('#post' + postNum).append('<a href="#comment"><span class="glyphicon glyphicon-comment" style="display:inline-block; width: 50px;"></span></a>');
  var edit = $('#post' + postNum).append('<a href="#edit"><span class="glyphicon glyphicon-edit" style="display:inline-block; width: 50px;"></span></a>');
  var remove =  $('#post' + postNum).append('<a class="remove glyphicon glyphicon-remove" style="display:inline-block; width: 50px;"></a>');

  $('a.remove').click(function(e) {
    $(e.target).parent().remove();
  });

  postNum++;
});



// var li = document.createElemnet('li');
//
// var userInputElement = document.createTextNode(text + name + comment + edit + remove);
//
// li.appendChild(userInputElement);
//
// document.getElementByClassName('container')[0].append(li);

// });


// $('.container').append('<button id="comment" type="button"><a href="#comment"><span class="glyphicon glyphicon-comment" style="display:inline-block; width: 40px;"></span></a></button>'),
// $('.container').append('<button id="edit" type="button"><a href="#edit"><span class="glyphicon glyphicon-edit" style="display:inline-block; width: 40px;"></span></a>'),
// $('.container').append('<button id="remove" type="button"><a href="#remove"><span class="glyphicon glyphicon-remove" style="display:inline-block; width: 40px;"></span></a>'),


// $('#remove').click(function(){
//   this.remove();


  //

    // $("#dialog").dialog({ autoOpen: false });
    // $('a').click(function () {
    //     $("#dialog").dialog('open');



// $('#comment').click(function(){
//   $(this).data('clicked', true);
// });
//
// if($('#comment').data('clicked')) {
//   alert('yes!');
// }
