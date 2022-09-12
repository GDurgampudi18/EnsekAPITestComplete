function GetRequestEnergy()
{
  var address = "https://ensekapicandidatetest.azurewebsites.net/energy";

  // Create an aqHttpRequest object
  var aqHttpRequest = aqHttp.CreateGetRequest(address);

  // Send the request, get an aqHttpResponse object
  var aqHttpResponse = aqHttpRequest.Send();
  
  Log.Message(aqHttpResponse.StatusCode);  // A status code
  
  //Assign it to a project variable
  Project.Variables.statusCode = aqHttpResponse.StatusCode;
  
  Log.Message("Response= " + aqHttpResponse.Text); // A response body 
}

function PostRequestReset()
{
  var address = "https://ensekapicandidatetest.azurewebsites.net/login";
  
  // Define the request body JSON string
  var requestBody = '{ "username": "test", "password": "testing"}';
  
  // Create the aqHttpRequest object
  var aqHttpRequest = aqHttp.CreatePostRequest(address);

  // Specify the Content-Type header value
  aqHttpRequest.SetHeader("Content-Type", "application/json");

  // Send the request, create the aqHttpResponse object
  var aqHttpResponse = aqHttpRequest.Send(requestBody)
  
  //Parse the response json and get token
  token = JSON.parse(aqHttpResponse.Text).access_token;
  
  Log.Message(token);
 
  Log.Message(aqHttpResponse.StatusCode);  // A status code
  
   
  Log.Message("Response= " + aqHttpResponse.Text); // A response body 
  
  //Check if status code is as expected
  if (aqHttpResponse.StatusCode == "200")
  {
    Log.Message("Bearer Token successfully obtained"); 
  } 
  else  
  {
    Log.Error("Something went wrong.Cant get bearer token"); 
  }
  
  //Create a post request to reset
   var address = "https://ensekapicandidatetest.azurewebsites.net/reset";
  
  // Create the aqHttpRequest object
  var aqHttpRequest = aqHttp.CreatePostRequest(address);

  // Specify the Content-Type header value
  aqHttpRequest.SetHeader("Content-Type", "application/json");
  
  //Give the bearer token for authorization
  aqHttpRequest.SetHeader("Authorization", "Bearer " + token);

  // Send the request, create the aqHttpResponse object
  var aqHttpResponse = aqHttpRequest.Send()
  
  //Set status code for a project variable
  Project.Variables.statusCode = aqHttpResponse.StatusCode;
  
  Log.Message("Response= " + aqHttpResponse.Text); // A response body 
}

function PostRequestToBuyEnergy(id, units)
{
  var address = "https://ensekapicandidatetest.azurewebsites.net/buy/"+ id +"/"+ units +"";
  
  // Create the aqHttpRequest object
  var aqHttpRequest = aqHttp.CreateRequest("PUT", address);
  
  // Send the request, create the aqHttpResponse object
  var aqHttpResponse = aqHttpRequest.Send();
  
  // Check the response:
  Log.Message("Status code= " + aqHttpResponse.StatusCode); // A status code

  //Set status code for a project variable
  Project.Variables.statusCode = aqHttpResponse.StatusCode;  
  
  Log.Message("Response= " + aqHttpResponse.Text); // A response body   
}

function PostRequestToGetOrders()
{
  var address = "https://ensekapicandidatetest.azurewebsites.net/orders";

  // Create an aqHttpRequest object
  var aqHttpRequest = aqHttp.CreateGetRequest(address);

  // Send the request, get an aqHttpResponse object
  var aqHttpResponse = aqHttpRequest.Send();
  
  Log.Message(aqHttpResponse.StatusCode);  // A status code
  
  //Assign it to a project variable
  Project.Variables.statusCode = aqHttpResponse.StatusCode;
  
  Log.Message("Response= " + aqHttpResponse.Text); // A response body 
}

function checkStatusCode()
{
  //Get the status code from the project variable
  statusCode = Project.Variables.statusCode;
  
  //Check if code is as expected
  if (statusCode == "200")
  {
    Log.Message("API is validated successfully"); 
  } 
  else  
  {
    Log.Error("Something went wrong.API is not validated"); 
  }
}
