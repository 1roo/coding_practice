function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let queue = Array.from({length: bridge_length}, () => 0);
    let total = 0;

    while (queue.length > 0) {
        time++;
        total -= queue.shift();

        if (truck_weights.length > 0) {
            if (total + truck_weights[0] <= weight) {
                let truck = truck_weights.shift();
                queue.push(truck);
                total += truck;
            } else {
                queue.push(0);
            }
        }
    }

    return time;
}