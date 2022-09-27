function encodeAndDecodeMessages() {
    let textarea = document.getElementsByTagName('textarea');
    let inputMessage = textarea[0];
    let lastMessage = textarea[1];

    document.getElementsByTagName('button')[0].addEventListener('click', encodeMessage);
    document.getElementsByTagName('button')[1].addEventListener('click', decodeMessage);

    function encodeMessage(item) {

        let message = item.target.previousElementSibling.value;
        let encode = '';

        for (let i = 0; i < message.length; i++) {
            encode += nextChar(message[i]);
            console.log(message[i]);
            console.log(encode);
        }
        lastMessage.textContent = encode;
        inputMessage.value = '';
    }

    function decodeMessage(item) {
        let message = item.target.previousElementSibling.value;
        let encode = '';

        for (let i = 0; i < message.length; i++) {
            encode += previosChar(message[i]);
            console.log(message[i]);
            console.log(encode);
        }
        lastMessage.textContent = encode;
    }

    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }

    function previosChar(c) {
        return String.fromCharCode(c.charCodeAt(0) - 1);
    }
}