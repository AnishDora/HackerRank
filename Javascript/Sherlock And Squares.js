
// Complete the squares function below.
function squares(a, b) {
    let count=0
    for(let i=1;i<=Math.sqrt(b);i++) 
    {
        if(Math.pow(i,2)>=a && Math.pow(i,2)<=b)
        {
            count++
        }
    }
return count

}