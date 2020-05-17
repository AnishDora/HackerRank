function hurdleRace(k, height) {

    let potion=0
    let max=height[0]
    for(let i=1;i<height.length;i++)  //Finding max height to be jump
    {
        if(height[i]>=max)
        {
            max=height[i]
        }
    }
    
    for(let i=0;i<height.length;i++)
    {
        if(height[i]<=k)  //If height to be jumped is less than his capability
        {
            continue
        }
        if(height[i]>k)  //Height to be jumped is greater than his capability
        {
           
               if(height[i]===max) 
               {
                   potion=height[i]-k
                   return potion
               }
           
        }
    }
    return potion
    }