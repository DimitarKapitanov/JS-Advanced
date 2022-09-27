function attachEventsListeners() {
    let convertBtn = document.querySelectorAll('div');
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    for (let i = 0; i < convertBtn.length; i++) {
        let btn = convertBtn[i].children;
        btn[btn.length - 1].addEventListener('click', convertTime);

    }

    function convertTime(item) {
        let labelTextContent = item.target.parentNode.children[0].textContent;
        let value = item.target.parentNode.children[1].value;

        if (labelTextContent === 'Days: ') {
            hours.value = Number(value * 24);
            minutes.value = Number(hours.value * 60);
            seconds.value = Number(minutes.value * 60);
        } else if (labelTextContent === 'Hours: ') {
            days.value = Number(value / 24);
            minutes.value = Number(value * 60);
            seconds.value = Number(minutes.value * 60);
        } else if (labelTextContent === 'Minutes: ') {
            hours.value = Number(value / 60);
            days.value = Number(hours.value / 24);
            seconds.value = Number(value * 60);
        } else if (labelTextContent === 'Seconds: ') {
            minutes.value = Number(value / 60);
            hours.value = Number(minutes.value / 60);
            days.value = Number(hours.value / 24);
        }
    }
}