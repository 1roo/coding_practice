function solution(phone_number) {
    let stars = phone_number.length - 4;
    
    return '*'.repeat(stars) + phone_number.slice(-4);

}