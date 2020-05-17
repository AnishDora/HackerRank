
function gradingStudents(grades) {
    
 for(let i=0;i<grades.length;i++)
   {
       if(grades[i]>=38) //If student passed the exam
       {
           let remainder=grades[i]%5   
           let upperboundary=grades[i]+(5-remainder)  //Finding nearest multiple of 5
           let diff=upperboundary-grades[i]
           if(diff<3)           //Checking if the difference is less than 3
           {
               grades[i]=upperboundary  //Rounding off the score
           }
       }
    
   } 
return grades

}