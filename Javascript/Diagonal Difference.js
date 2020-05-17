function diagonalDifference(arr) {
    const dim=arr[0].length
    let firstsum=0      //Left-Right Diagonal
    let secondsum=0     //Right-Left Diagonal
    let diff=0
    for(let i=0, j=(dim-1);i<arr.dim,j>-1;i++,j--)
    {
        firstsum=firstsum+arr[i][i]
        secondsum=secondsum+arr[i][j]
    }
    
    diff=Math.abs(firstsum-secondsum)
    return diff
}