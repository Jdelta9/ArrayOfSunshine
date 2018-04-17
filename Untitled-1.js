!docutype











$.ajax({
         url: queryURL,
         method: "GET"
       }).then(function(response) {
         $("#movies-view").text(JSON.stringify(response));
         renderButtons();
       });