
export function getStrTime(num){
    let strTime = [0, 0, 0];
    strTime[0] = ("00" + (num%60)).slice(-2);//01, 02
    strTime[1] = ("00" + (Math.trunc(num/60))).slice(-2);
    strTime[2] = ("00" + (Math.trunc(strTime[1]/60))).slice(-2);

    if(strTime[2]==0)
        if(strTime[1]==0)
            return strTime[0]+"sec";
        else 
            return strTime[1]+"min " + strTime[0]+"sec";
    else {
        strTime[1] -= strTime[2]*60;
        return strTime[2]+"h " + strTime[1]+"min " + strTime[0]+"sec";
    }
}