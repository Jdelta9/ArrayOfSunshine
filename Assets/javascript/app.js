
        // Initialize Firebase
    var config = {   
    apiKey: "AIzaSyCdMCfsevsjx8phekaS2VQZBLE5YbsZUdc",
    authDomain: "arrayofsunshine-e9af0.firebaseapp.com",
    databaseURL: "https://arrayofsunshine-e9af0.firebaseio.com",
    projectId: "arrayofsunshine-e9af0",
    storageBucket: "arrayofsunshine-e9af0.appspot.com",
    messagingSenderId: "365773571173"
  };
     firebase.initializeApp(config);

       var more = $(this).attr("");
       var queryURL = "https://arrayofsunshine-e9af0.firebaseio.com=" + more + "&api_key="AIzaSyCdMCfsevsjx8phekaS2VQZBLE5YbsZUdc";
       $.ajax({
            url: queryURL,
        method: 'GET'
    })
</script>

</html>
