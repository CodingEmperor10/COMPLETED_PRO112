prediction_1 = "";

Webcam.set({
width: 350,
height:300,
image_format: 'png',
png_quality: 90
});    

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_image"src ="'+data_uri+'"/>';
});
}

console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/apk2Xgf_4/model.json", modelLoaded);

function modelLoaded(){
console.log(" Model Loaded!");    
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "It's a"+ prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
    }
    
    function check()
    {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);    
    }
    
    function gotResult(error, results)
    {
    if(error) {
    console.error(error);    
    } else{
    console.log(results);
    document.getElementById("result_emotion_name1").innerHTML = results[0].label;
    prediction_1 = results[0].label ;
    speak();
    if ( results[0].label == "Hi" ) {
    document.getElementById("Update_emoji1").innerHTML = "&#128075;";    
    }
    
    if ( results[0].label == "Amazing" ) {
        document.getElementById("Update_emoji1").innerHTML = "&#128076;";    
        }
        
        if ( results[0].label == "Pointing Right" ) {
            document.getElementById("Update_emoji1").innerHTML = "&#128073;";    
            }
    
            if ( results[0].label == "Pointing Left" ) {
                document.getElementById("Update_emoji1").innerHTML = "&#128072;";    
}
}
}