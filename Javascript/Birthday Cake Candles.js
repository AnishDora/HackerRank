// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    let count=0
  
    let max = ar[0]; 

    for (let i = 1; i < ar.length; i++)  // To check the maximum height of the candles available
        {
            if (ar[i] > max) 
            { 
              max = ar[i] 
            }

        }
    for(let i=0;i<ar.length;i++)  // To check no of candles present (Maximum Height)
        {
        if(max===ar[i])
        {
            count++
        }

        }
        return count
    }