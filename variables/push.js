//Use this function to easily see the variables that would be passed into the datalayer,
//but in your console. Delete the conditional statement in order to see both the push
//to the datalayer and the console.logs

function(){
  return function(input){
    datalayer.push(input)
    if({{Debug Mode}} === true){
    console.table(input)
    console.log(input)
    }
  }

}