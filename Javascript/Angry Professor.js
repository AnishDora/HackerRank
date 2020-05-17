// Complete the angryProfessor function below.
function angryProfessor(k, a) {

    let good=0    //No of students who attended in time
    let bad=0     //No of students who are late to the class
    for(let i=0;i<a.length;i++)
    {
        if(a[i]<=0)   //In time
        {
            good++    
        }
        else          //Late
        {
            bad++
        }
    }
    if(k<=good)
    {
        return "NO"    //Class will not be cancelled
    }
    else
    {
        return "YES"  //Class will be cancelled
    }
    }
    