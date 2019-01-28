
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

function checkAnswers(){

  answers = ["phishing","legitimate", "phishing", "phishing", "phishing"];

  var radios = document.getElementsByName('phishing1');
  correct =0;
  for (var i = 0, length = radios.length; i < length; i++)
  {
   if (radios[i].checked)
   {
    // do whatever you want with the checked radio
    if(radios[i].value.localeCompare(answers[0])==0){
      document.getElementById("results1").classList.remove("error");
        document.getElementById("results1").classList.add("success");
        correct++;
    }else{
      document.getElementById("results1").classList.remove("success");
      document.getElementById("results1").classList.add("error");
    }


   }
 }

    radios = document.getElementsByName('phishing2');

   for (var i = 0, length = radios.length; i < length; i++)
   {
    if (radios[i].checked)
    {
     // do whatever you want with the checked radio
     if(radios[i].value.localeCompare(answers[1])==0){
       document.getElementById("results2").classList.remove("error");
         document.getElementById("results2").classList.add("success");
         correct++;
     }else{
       document.getElementById("results2").classList.remove("success");
       document.getElementById("results2").classList.add("error");
     }


    }
  }

     radios = document.getElementsByName('phishing3');

    for (var i = 0, length = radios.length; i < length; i++)
    {
     if (radios[i].checked)
     {
      // do whatever you want with the checked radio
      if(radios[i].value.localeCompare(answers[2])==0){
        document.getElementById("results3").classList.remove("error");
          document.getElementById("results3").classList.add("success");
          correct++;
      }else{
        document.getElementById("results3").classList.remove("success");
        document.getElementById("results3").classList.add("error");
      }

      // only one radio can be logically checked, don't check the rest

     }
   }

     radios = document.getElementsByName('phishing4');

    for (var i = 0, length = radios.length; i < length; i++)
    {
     if (radios[i].checked)
     {
      // do whatever you want with the checked radio
      if(radios[i].value.localeCompare(answers[3])==0){
        document.getElementById("results4").classList.remove("error");
          document.getElementById("results4").classList.add("success");
          correct++;
      }else{
        document.getElementById("results4").classList.remove("success");
        document.getElementById("results4").classList.add("error");
      }

      // only one radio can be logically checked, don't check the rest

     }
   }

     radios = document.getElementsByName('phishing5');

    for (var i = 0, length = radios.length; i < length; i++)
    {
     if (radios[i].checked)
     {
      // do whatever you want with the checked radio
      if(radios[i].value.localeCompare(answers[4])==0){
        document.getElementById("results5").classList.remove("error");
          document.getElementById("results5").classList.add("success");
          correct++;
      }else{
        document.getElementById("results5").classList.remove("success");
        document.getElementById("results5").classList.add("error");
      }

      // only one radio can be logically checked, don't check the rest

     }

     document.getElementById("result-value").innerHTML="You get "+ correct + " over 5";
  }





}


function checkAnswersWeb(){

  answers = ["phishing","phishing", "legitimate"];

  var radios = document.getElementsByName('web1');
  correct =0;
  for (var i = 0, length = radios.length; i < length; i++)
  {
   if (radios[i].checked)
   {
    // do whatever you want with the checked radio
    if(radios[i].value.localeCompare(answers[0])==0){
      document.getElementById("resultsweb1").classList.remove("error");

        document.getElementById("resultsweb1").classList.add("success");
        correct++;
    }else{
      document.getElementById("resultsweb3").classList.remove("success");

      document.getElementById("resultsweb1").classList.add("error");
    }


   }
 }

    radios = document.getElementsByName('web2');

   for (var i = 0, length = radios.length; i < length; i++)
   {
    if (radios[i].checked)
    {
     // do whatever you want with the checked radio
     if(radios[i].value.localeCompare(answers[1])==0){
        document.getElementById("resultsweb2").classList.remove("error");
         document.getElementById("resultsweb2").classList.add("success");
         correct++;
     }else{
       document.getElementById("resultsweb2").classList.remove("success");
       document.getElementById("resultsweb2").classList.add("error");
     }


    }
  }

     radios = document.getElementsByName('web3');

    for (var i = 0, length = radios.length; i < length; i++)
    {
     if (radios[i].checked)
     {
      // do whatever you want with the checked radio
      if(radios[i].value.localeCompare(answers[2])==0){
          document.getElementById("resultsweb3").classList.remove("error");

          document.getElementById("resultsweb3").classList.add("success");
          correct++;
      }else{
        document.getElementById("resultsweb3").classList.remove("success");
        document.getElementById("resultsweb3").classList.add("error");
      }

      // only one radio can be logically checked, don't check the rest

     }
   }

     document.getElementById("result-value-web").innerHTML="You get "+ correct + " over 3";
  }
