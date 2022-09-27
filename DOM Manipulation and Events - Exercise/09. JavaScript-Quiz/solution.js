function solve() {
    const answerEvents = Array.from(document.getElementsByClassName('answer-text'))
        .forEach(e => {
            e.addEventListener('click', userAnswer)
        });

    let result = document.getElementsByClassName('results-inner')[0].firstElementChild;

    const sections = document.getElementsByTagName('section');

    const corectAnswer = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

    const answers = [];

    function userAnswer(item) {
        answers.push(item.target.textContent);

        const curSection = Array.from(sections).find(c => c.style.display == '' || c.style.display == 'block');

        let indexOfCurSection = Array.from(sections).indexOf(curSection);

        curSection.style.display = 'none';

        if (indexOfCurSection + 1 < sections.length) {
            sections[indexOfCurSection + 1].style.display = 'block';
        } else {

            let isPassTest = corectAnswer;
            let count = 0;

            for (let i = 0; i < answers.length; i++) {
                if (answers[i] != corectAnswer[i]) {
                    isPassTest = false;
                }else{
                    count++;
                }
            }

            if (isPassTest) {
                document.getElementById('results').style.display= 'block';
                result.textContent = 'You are recognized as top JavaScript fan!';
            } else {
                document.getElementById('results').style.display= 'block';
                result.textContent = `You have ${count} right answers`
            }
        }
    }
}
