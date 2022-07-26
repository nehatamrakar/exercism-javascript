//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x,y) => {
    const distance = x*x+y*y;
    let final_score = 0;
    if(distance>100)
        return final_score
    if(distance <= 100 && distance>25)
        return final_score=1;
    if(distance<=25 && distance>1)
        return final_score=5;
    return final_score=10;
}

