//Using jQuery for brevity. This Variable can be used to return a boolean for whether or not a
//certain elements ==='s one on the page. This can be used for determining specific pages.

function(){
  if(jQuery('#breadcrumb > a')[1].innerHTML.replace(/&amp;/g, '&') == "targetElement"){
    return true
  }else{
    return false
  }
}