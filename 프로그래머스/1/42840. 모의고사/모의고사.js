function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    const counts = patterns.map(pattern => 
        answers.reduce((count, answer, index) => 
            count + (answer === pattern[index % pattern.length] ? 1 : 0), 0)
    );
    
    const maxCount = Math.max(...counts);
    return counts.reduce((winners, count, index) => {
        if (count === maxCount) winners.push(index + 1);
        return winners;
    }, []);
}