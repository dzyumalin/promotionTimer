// Timer 

const deadline = '2020-06-11'; // Конечная дата

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),  // Отнимает текущее время и получает количество мс
          days = Math.floor(t / (1000 * 60 * 60 * 24)), // 1000 * 60 - кол-во мс в 1 минуте, * 60 в 1 часе, * 24 часов в сутках
          hours = Math.floor( (t / (1000 * 60 * 60) % 24)), // Кол-во мс в часе. Общее кол-во часов оставшихся до таймера
          minutes = Math.floor( (t / 1000 / 60) % 60), // t / 1000 - кол-во с, / 60 - кол-во минут
          seconds = Math.floor( (t / 1000) % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}         

function getZero(num) { // Если кол-во дней, часов, минут, секунд будет меньше 10, то ф-я добавит 0
    if (num >= 0 && num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}

// Hours 

function setClock(selector, endtime) {

    const timer = document.querySelector(selector),
          days = timer.querySelector("#days"),
          hours = timer.querySelector("#hours"),
          minutes = timer.querySelector("#minutes"),
          seconds = timer.querySelector("#seconds"),
          timeInterval = setInterval(updateClock, 1000); // Запуск каждую с

    updateClock(); // Запускаем текущую дату и после включается 1000мс. Тем самым не будет отображено моргание.
    // Обновляем таймер каждую с    

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

    setClock('.timer', deadline);


