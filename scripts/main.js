function getUrl(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function main() {
    let data = getUrl("https://api.adviceslip.com/advice")
    let advice = JSON.parse(data);

    let pAdvice = document.getElementById('advice');
    pAdvice.innerHTML = advice.slip.advice
}

main();