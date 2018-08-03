// var button = document.getElementsByTagName('button')[0];
//
// button.addEventListener('click', function (){
//   var userInputName = document.getElementById('name').value;
//   var userInputMessage = document.getElementById('message'.value);
//
//   var li = document.createElement('li');
//   var userInputElement = document.createTextNode(userInputName + '-' +userInputMessage);
//
//   li.appendChild(userInputElement);
//
//   document.getElementsByClassName('posts')[0].append(li);
// });



$('button').click(function(){
  // var userName = $('#name').val();
  // var userText = $('#text').val();
  $('.forum').append('<hr /><li>' +  $('#text').val() + '</li>');
  $('.forum').append('<li><h5>' + 'Posted by: ' + '<b>'+ $('#name').val() + '</li></b></h4>');

  // alert("Handler for .click() class.");

  });
