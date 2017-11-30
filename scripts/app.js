$( document ).ready(function() {
  let paribuStats = $('#paribu-stats');
  
  getParibu();

  // setInterval(function() {
  //   paribuStats.text('Loading...');
  //   getParibu(); 
  // }, 5000);

  function getParibu() {
    fetch('https://www.paribu.com/ticker')
    .then((resp) => resp.json())
    .then(function(data){
      let latestPrice = data.BTC_TL.last;
      let priceText = `Latest bitcoin price for Paribu: ${latestPrice} TL`;
      paribuStats.text(priceText);
    })
    .catch(function(error){
      console.log(error);
    });
  }

  // function createCORSRequest(method, url) {
  //   var xhr = new XMLHttpRequest();
  //   if ("withCredentials" in xhr) {
  
  //     // Check if the XMLHttpRequest object has a "withCredentials" property.
  //     // "withCredentials" only exists on XMLHTTPRequest2 objects.
  //     xhr.open(method, url, true);
  
  //   } else if (typeof XDomainRequest != "undefined") {
  
  //     // Otherwise, check if XDomainRequest.
  //     // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
  //     xhr = new XDomainRequest();
  //     xhr.open(method, url);
  
  //   } else {
  
  //     // Otherwise, CORS is not supported by the browser.
  //     xhr = null;
  
  //   }
  //   return xhr;
  // }
  
  // var xhr = createCORSRequest('GET', 'https://www.paribu.com/ticker');
  // if (!xhr) {
  //   throw new Error('CORS not supported');
  // }

  // xhr.withCredentials = true;
  
  // xhr.onload = function() {
  //   var responseText = xhr.responseText;
  //   console.log(responseText);
  //   // process the response.
  //  };
   
  //  xhr.onerror = function() {
  //    console.log('There was an error!');
  //  };

  //  xhr.send();

});

