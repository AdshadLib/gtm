//Template for a standard product page, grabbing the tumbnail, product title and price.
//It returns an event and an array containing said features.

<script>  

//This function checks to see if the product price contains USD, if it does, it cleans it and returns
//the number as a string. This can be used when an ecommerce store uses multiple currencies.  
var prodPrice = function(){
	var x = jQuery('#product-price p span span')[0].innerHTML;
		if(x.search('USD') !== -1){
			return jQuery('#product-price p span span')[0].innerHTML.replace('$','').replace('USD','').trim().replace('$','').replace('USD','').replace(/(^\s*$)|(\s*$)|(<[^>]*>)/gm, '').replace(',','');
	}
};
  
dataLayer.push(([ 'publish', 'product page visit', {
    	productThumbnailUrl: jQuery('.productElement a').attr('href'),
	    productTitle: jQuery('.page-title').html(),
    	productPrice: prodPrice()
	    }
                    
                   ]);)
</script>