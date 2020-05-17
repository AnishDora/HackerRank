function divisibleSumPairs(n, k, ar) {
    let count=0
    for(let i=0;i<n;i++)
    {                     //Iterating to check the possible pairs
        for(let j=0;j<n;j++)
        {
            if(i<j)
            { 
                if( (ar[i]+ar[j])%k===0) //Checking if the sum is divisible by the given number
                {
                    count++
                }
            }
        }
    }

return count
}
