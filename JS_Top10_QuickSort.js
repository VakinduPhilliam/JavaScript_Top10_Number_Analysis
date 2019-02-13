
/* Function that takes in a list of elements and returns the largest 10. */
/* The function uses Quick sort Algorithm. */
/* Written by Vakindu Philliam. */


var m = function Top10(list){

//Return list if one element or none
if(list.length<=1){

return list;

}


//Declare variables
var left=[];
var right=[];
var pivot=list.pop();
var newList=[];

//Iterate through list

for(var i=0;i<list.length;i++){

//Compare elements to pivot and distribute accordingly
if(list[i]<=pivot){

left.push(list[i]);

}else {

right.push(list[i]);

 }

}

//Coalesce the left and right lists
var sorted =newList.concat(Top10(right),pivot,Top10(left));

return sorted.slice(0,10);

};


//Run function
var array = [13,5,7,1,2,289,75,63,69,34,22,1,22,11,56,78,97,91,31,53,64,73,18,87];

console.log(m(array));