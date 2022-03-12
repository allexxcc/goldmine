function goldMine(input) {
    let location = Number(input[0]);
    let index = 1;
    let sumAvgGold = 0;
    let sumGold = 0;
    for (let i = 0; i < location; i++) {
        let avgGold = Number(input[index]);
        index++
        let daysDigging = Number(input[index]);
        index++
        if(sumGold > 0){
            sumGold = 0;
            sumAvgGold = 0;
        }
 
        for (let g = 0; g < daysDigging; g++) {
 
            let extraction = Number(input[index]);
            index++
            sumAvgGold += extraction;
            sumGold = sumAvgGold / daysDigging;
        }
 
        if (sumGold >= avgGold) {
            console.log(`Good job! Average gold per day: ${sumGold.toFixed(2)}.`);
        }else if (sumGold < avgGold){
                let left = avgGold - sumGold;
                console.log(`You need ${left.toFixed(2)} gold.`);
        } 
 
    }
 
}
goldMine(["2","10","3","10","10","11","20","2","20","10"]);