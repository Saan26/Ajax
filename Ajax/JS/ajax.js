console.log("JS opened");

      let fetchBtn = document.getElementById("fetchBtn");
      fetchBtn.addEventListener("click", buttonClickHandler);

      function buttonClickHandler() {
        console.log("button clicked");

        //Instanstiate an xhr object
        const xhr = new XMLHttpRequest();

        // Open the object
        xhr.open("GET", "battles.json", true);

        //what to do on progress
        xhr.onprogress = function () {
          console.log("On progress");
        };

        //what to do when response is ready
        xhr.onload = function () {
          if (this.status === 200) {
            document.getElementById("battles").innerHTML= (this.responseText);
          } else {
            console.error("some error occured");
          }
        };

        xhr.send();
      }