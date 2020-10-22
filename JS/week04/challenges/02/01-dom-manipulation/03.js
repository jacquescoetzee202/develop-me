((d) => {
    let time = d.getElementById('time');

    let hour = new Date().getHours();
    hour < 10 ? hour = "0" + hour : hour += "";
    let minute = new Date().getMinutes();
    minute < 10 ? minute = "0" + minute : minute += "";
    let second = new Date().getSeconds();
    second < 10 ? second = "0" + second : second += "";
    

    time.textContent = `${hour}:${minute}:${second}`;

})(document);