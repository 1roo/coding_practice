function solution(sizes) {
    let maxW = 0, maxH = 0;   
    
    for (i=0; i<sizes.length; i++) {
        const [w, h] = sizes[i];
        maxW = Math.max(maxW, Math.max(w, h));
        maxH = Math.max(maxH, Math.min(w, h));
    }


    return maxW * maxH;
}