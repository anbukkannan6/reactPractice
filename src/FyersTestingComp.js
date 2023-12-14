var fyersModel= require("fyers-api-v3").fyersModel

var fyers= new fyersModel({"path":"logs"})

fyers.setAppId("V98XJ37RZ6-100")

fyers.setRedirectUrl("https://127.0.0.3")

var URL=fyers.generateAuthCode()

// use url to generate auth code
console.log(URL) 