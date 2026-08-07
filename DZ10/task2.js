function delayText(text, milliseconds) {
    setTimeout(() => {
        console.log(text);
    }, milliseconds);
}

delayText("Hello, world!", 2000); 
delayText("JavaScript", 5000);    