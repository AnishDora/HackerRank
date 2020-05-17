function plusMinus(arr) {
    let positive=0
    let negative=0
    let zeros=0
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>0) 
        {
            positive++    //No of positive
        }
        else if(arr[i]<0) 
        {
            negative++    //No of Negative
        }
        else
        zeros++  //No of Zeros
    }
    positive=positive/arr.length
    negative=negative/arr.length
    zeros=zeros/arr.length
    console.log(positive.toFixed(6))
    console.log(negative.toFixed(6))
    console.log(zeros.toFixed(6))
}


//toFixed()---allows us to format the output to specific
//            no of places