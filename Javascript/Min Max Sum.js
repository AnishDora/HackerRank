function miniMaxSum(arr) {
    let min=0
    let maxsum=0
    let least=arr[0]
    for (let i = 0; i < arr.length; i++)  //Sorting the array elements
    {
        for (let j = 0; j < arr.length; j++) 
        {
            if (arr[j] >arr[j + 1])
            {
               let tmp = arr[j];
               arr[j] = arr[j + 1]; 
               arr[j + 1] = tmp;
            }
        }
   }
    
    for(let i=0;i<4;i++) //Sum of least 4 numbers
    {
        min=min+arr[i]
    }
    for(let i=4;i>0;i--) //Sum of highest 4 numbers
    {
        maxsum=maxsum+arr[i]
    }
    console.log(min + " "+ maxsum)
    }
    