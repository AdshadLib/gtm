//This can be used to rreturn a full address, then concatenate the results into one string.

function() {
  var address = document.getElementById('billing-address-line-1').value;
  var address2 = document.getElementById('billing-address-line-2').value; 
  var suburb = document.getElementById('billing-suburb').value;
  var postcode = document.getElementById('billing-postcode').value;
  var fullAddress = address + ", " + address2 + ", " + suburb + ", " + postcode;
  return fullAddress;
}