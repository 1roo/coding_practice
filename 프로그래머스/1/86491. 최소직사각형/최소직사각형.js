function solution(sizes) {
    let maxW = 0;
    let maxH = 0;

    for (const size of sizes) {
        let [w, h] = size;

        if (w < h) {
            [w, h] = [h, w];
        }

        if (w > maxW) {
            maxW = w;
        }
        if (h > maxH) {
            maxH = h;
        }
    }

    return maxW * maxH;
}