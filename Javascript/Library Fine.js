// Complete the libraryFine function below.
function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1>y2) //Different years
    {
        return 10000
    }
    if (y1==y2)         //Same year
    {
       if (m1>m2) //Different months
        {
               return (m1-m2)*500
        }
       
       if (m1==m2 && d1>d2) //Different dates  in same month
        { 
          return (d1-d2)*15
        }   
   }
   return 0}
   