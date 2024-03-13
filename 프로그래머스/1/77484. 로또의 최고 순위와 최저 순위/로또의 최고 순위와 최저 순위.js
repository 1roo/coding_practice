function solution(lottos, win_nums) {
    let count = 0;
    let countZero = 0;
    
    for(let i = 0; i < lottos.length; i++) {
            if (win_nums.includes(lottos[i])) {
                count++;
            } else if(lottos[i] === 0)
                countZero++;
        
    }
    
    return [countRank(count+countZero), countRank(count)];
}

function countRank(count) {
    switch (count) {
        case 6:
            return 1;
        case 5:
            return 2;
        case 4:
            return 3;
        case 3:
            return 4;
        case 2:
            return 5;
        default:
            return 6;
    }
}
