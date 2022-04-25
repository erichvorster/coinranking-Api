var baseUrl = "https://api.coinranking.com/v2";
var proxyUrl = "https://cors-anywhere.herokuapp.com/http://example.com.";
var apiKey = "";

fetch(`${proxyUrl}${baseUrl}`, {
  method: "GET",
  headers: {
    "Content-type": "application/json",
    "x-access-token": `${apiKey}`,
    "Access-Control-Allow-Origin": "*",
  },
}).then((response) => {
  console.log(response);
});
