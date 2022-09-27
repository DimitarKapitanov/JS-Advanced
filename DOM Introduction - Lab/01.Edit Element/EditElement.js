function editElement(ref, match, replacer) {
    const matcher = new RegExp(match, 'g');
    const editer = ref.textContent.replace(matcher, replacer);
    ref.textContent = editer;
}