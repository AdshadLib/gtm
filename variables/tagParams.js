//This Variable can only be used in conjunction with Google AdWords. 
//It reads the google_tag_params.ecomm_pagetpe.
//Then return a value dependent on the returned result.
//Example: Trigger fire conditions: tagParams equals 2

function(){
  switch(google_tag_params.ecomm_pagetype){
    case "home":
      return 0;
      break;
    case "category":
      return 1;
      break;
    case"cart":
      return 2;
      break;
      case"searchresults":
      return 3;
      break;
      case"product":
      return 4;
      break;
    default:
      return 'other';
      
  }
}