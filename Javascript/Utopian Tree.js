// Complete the utopianTree function below.
function utopianTree(n) {
    let initial=1
    for(let i=0;i<n;i++)
    {
        if(i%2===0)
        {
            initial=initial*2  //Height doubled
        }
        else
        {
            initial=initial+1   //Height increased by 1
        }
    }
    return initial


}