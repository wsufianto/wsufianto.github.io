const timeUtils = (timeInput) => {
    const daily = 24 * 60 * 60;
    const hour = 60 * 60;
    const min = 60;

    const day = Math.trunc(timeInput / daily);
    const hourOutput = Math.trunc((timeInput - (daily * day)) / hour);
    const minOutput = Math.trunc((timeInput - (daily * day) - (hourOutput * hour)) / min);
    const second = timeInput - (daily * day) - (hourOutput * hour) - (minOutput * min);

    console.log(day, hourOutput, minOutput, second);
};

timeUtils(90061);
timeUtils(93784);

// 90061 sec: 1 1 1 1 (1 day, 1 hour, 1 min and 1 seconds)
// 93784 sec: 1 2 3 4 (1 day, 2 hours, 3 mins, 4 seconds)
