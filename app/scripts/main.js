
var APIurl = 'https://api.github.com/repos/shanwynn/my-proj/issues';

var iContainer = $('#issues');
var iTemplate = _.template($('#iTemplate').html());

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
