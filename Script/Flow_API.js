//USEUNIT API_Energy

When("An API to get energy is requested", function ()
{
  API_Energy.GetRequestEnergy();
});

When("An API to buy energy is requested for id {arg} and number of units {arg}", function (id, units)
{
  API_Energy.PostRequestToBuyEnergy(id, units);
});

When("An API to get orders is requested", function (){
  API_Energy.PostRequestToGetOrders();
});

When("An API to reset is requested", function (){
  API_Energy.PostRequestReset();
});

Then("The API is validated", function ()
{
  API_Energy.checkStatusCode();
});
