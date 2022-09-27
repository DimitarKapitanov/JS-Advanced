function extractText() {
    let items = document.querySelectorAll("ul#items li");
    console.log(items);
    let textarea = document.querySelector("#result");

    for (const node of items) {
    console.log();
      textarea.value += node.textContent +"\n";
    }
}