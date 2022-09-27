function requestValidator(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const urlPattern = /^[\w.]+$/;

    if (!(obj.method && validMethods.includes(obj.method))) {
        throw Error('Invalid request header: Invalid Method');
    }

    if (!(obj.uri && (obj.uri == '*' || urlPattern.test(obj.uri)))) {
        throw Error('Invalid request header: Invalid URI');
    }

    if (!(obj.version && validVersion.includes(obj.version))) {
        throw Error('Invalid request header: Invalid Version');
    }

    const validMassasge = /^[^<>\\&\'\"]*$/

    if (!(obj.hasOwnProperty('message') && (obj.message == '' || validMassasge.test(obj.message)))) {
        throw Error('Invalid request header: Invalid Message');
    }

    return obj;
}


console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: '<script>alert("xss vulnerable")</script>'
}));

console.log(requestValidator({
    method: 'GET',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));

requestValidator({
    method: 'GET',
    uri: '%appdata%',
    version: 'HTTP/1.1',
    message: '-recursive'
});


