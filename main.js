Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

    camera = document.getElementById("Camera");

    Webcam.attach('#Camera');
    
    function Capture(){
        Webcam.snap(function(data_uri) {
        document.getElementById("output").innerHTML = '<img id="capture" src = "'+data_uri+'"/>';

        
    });
    }


    console.log('ml5 version', ml5.version);

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SBBVSbNYQ/model.json',modelLoaded);