/*console.log('Testing API');*/

/*var APIping = $.ajax({url:'https://api.github.com/repos/shanwynn/my-proj/issues'}).done(function(e) { return e });*/

var hitMe = $('button');
hitMe.on('click'), function(e) {
  getIssues();
};

var getIssues = function () {
  var token = $('#token').val();
  var APIurl = $('#url').val();
};

var iContainer = $('#issues');
var iTemplate = _.template($('#iTemplate').html());
var iState = _.template($('#iState').html());
var iNumber = _.template($('#iNumber').html());

$.ajax({ url: APIurl }).done(function (data) {
  data.forEach(function(issue) {
    iContainer.append(iTemplate(issue));
  });
});

setInterval(function() {
  $.ajax({ url: APIurl }).done(function (data) {
    $("#iCount").text(data.length);
  });
}, 1000);
