// Complete the icecreamParlor function below.

//Brute Force
function icecreamParlor(m, arr) 
{
    for(let i=0;i<arr.length-1;i++)
   {                                       //Checking all the possiblee Outcomes
       for(let j=i+1;j<arr.length;j++)
        {
        if(arr[i]+arr[j]===m)             //Checking the given condition
        {
           return [i+1,j+1]               // Returning the Possible combination
        }
        }
       
   }

}

//Working on code for better time complexity