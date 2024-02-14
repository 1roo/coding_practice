function solution(arr1, arr2) {
    var answer = []; 
    
    for (var i = 0; i < arr1.length; i++) {
        var row = []; 
        
        for (var j = 0; j < arr1[i].length; j++) {
            var sum = 0; 
            
            if (arr1[i][j]) {
                sum += arr1[i][j];
            }
            if (arr2[i][j]) {
                sum += arr2[i][j];
            }
            
            row.push(sum);
        }
        
        answer.push(row);
    }
    
    return answer;
}