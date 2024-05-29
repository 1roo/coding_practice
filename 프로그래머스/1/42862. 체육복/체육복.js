function solution(n, lost, reserve) {
    let realLost = lost.filter(l => !reserve.includes(l));
    let realReserve = reserve.filter(r => !lost.includes(r));
    
    realLost.sort((a, b) => a - b);
    realReserve.sort((a, b) => a - b);
    
    realLost = realLost.filter(l => {
        for (let i = 0; i < realReserve.length; i++) {
            if (realReserve[i] === l - 1 || realReserve[i] === l + 1) {
                realReserve.splice(i, 1);
                return false;
            }
        }
        return true;
    });
    
    let answer = n - realLost.length;
    
    return answer;
}