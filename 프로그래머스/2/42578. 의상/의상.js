function solution(clothes) {
    let clothesMap = new Map();
    clothes.forEach(([name, type]) => {
        if(!clothesMap.has(type)) {
            clothesMap.set(type, []);
        }
        clothesMap.get(type).push(name);
    })
    
    let combi = 1;
    clothesMap.forEach((names) => {
        combi *= (names.length + 1);
    })
    
    return combi - 1;
}