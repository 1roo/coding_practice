function solution(a, b) {
    let days = 0;
    const months = {
        1: 31,
        2: 29,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31,
    }
    const week = {
        0: 'SUN',
        1: 'MON',
        2: 'TUE',
        3: 'WED',
        4: 'THU',
        5: 'FRI',
        6: 'SAT',
    }
    
    for(let i = 1; i < a; i++) {
        days += (months[i]);
    }
    days += b;
    
    return week[(days + 4) % 7];
}