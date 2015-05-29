var recognizer = new webkitSpeechRecognition();
recognizer.lang = "en";
recognizer.continuous = true;
//recognizer.interimResults = true;
recognizer.onresult = function(event) {
    if (event.results.length > 0) {
        var result = event.results[event.results.length - 1];
        charlieResponse(result[0].transcript);
        console.log(result[0].transcript);
    }
};
recognizer.start();
var charlieResponse = function(speech) {
    if (speech == 'Charlie Charlie can we play')
        moveYes();
    else if (speech.indexOf("Charlie") > -1 && speech.split(' ').length > 2) {
        Math.random() < 0.5 ? moveYes() : moveNo();
    } else {
        moveNo();
    }
    setInterval(function() {
        back()
    }, 3000);
};

var moveYes = function() {
    document.getElementById("verticalPen").className = "verticalPenAnimationTrue";
};
var moveNo = function() {
    document.getElementById("verticalPen").className = "verticalPenAnimationFalse";
};
var back = function() {
    document.getElementById("verticalPen").className = "verticalPenStopped";
};