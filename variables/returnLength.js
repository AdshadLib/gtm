//Using jQuery for brevity. This Variable can be used to return the how many elements are in an array
//Use case, determining whcih level of the category you are on, by reading how many breadcrumb 
// elements you pick up. 

function() {
    try {
        var cat = jQuery('.breadcrumb').length;
    return cat;
    }catch(e) {
        return "0";
    }
}