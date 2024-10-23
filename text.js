
// const click_to_convert = document.getElementById('click_to_convert');
// const convert_text = document.getElementById('convert_text');


// click_to_convert.addEventListener('click',function(){
//     var speech = true;
//     window.SpeechRecognition = window.webkitSpeechRecognition;
//     const recognition = new SpeechRecognition();
//     recognition.interimResults = true;

//     recognition.addEventListener('result', e=>{
//         const transcript =Array.from(e.results)
//         .map(result =>result[0])
//         .map(result => result.transcript)

//         convert_text.innerHTML = transcript;
//     })

//     if(speech==true){
//         recognition.start();
//     }
// })






// const click_to_convert = document.getElementById('click_to_convert');
// const convert_text = document.getElementById('convert_text');

// click_to_convert.addEventListener('click', function() {
//     // Check if the SpeechRecognition API is available
//     if (!('webkitSpeechRecognition' in window)) {
//         alert('Speech recognition is not supported in this browser.');
//         return;
//     }

//     const recognition = new webkitSpeechRecognition(); // Use webkitSpeechRecognition directly
//     recognition.interimResults = true; // Allow interim results

//     recognition.addEventListener('start', () => {
//         console.log('Speech recognition started'); // Debugging line
//     });

//     recognition.addEventListener('result', e => {
//         const transcript = Array.from(e.results)
//             .map(result => result[0])
//             .map(result => result.transcript)
//             .join(''); // Join the transcripts into a single string

//         convert_text.value = transcript; // Set the transcript as the value of the textarea
//         console.log('Transcript: ', transcript); // Debugging line
//     });

//     recognition.addEventListener('end', () => {
//         console.log('Speech recognition ended'); // Debugging line
//     });

//     recognition.addEventListener('error', (event) => {
//         console.error('Speech recognition error: ', event.error); // Error logging
//     });

//     recognition.start(); // Start recognition
// });






let speech = new SpeechSynthesisUtterance();
let voices = []; // Corrected the typo from `voice` to `voices`
let voiceSelect = document.querySelector('select'); // Consistent casing for the variable

// Load voices when they are available
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // Set the default voice

    // Populate the select dropdown with voice options
    voices.forEach((voice, i) => {
        const option = document.createElement('option');
        option.value = i; // Set the index as the option value
        option.textContent = voice.name; // Display the voice name in the dropdown
        voiceSelect.appendChild(option);
    });
};

// Update speech voice when the user selects a different option
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// Handle the "Listen" button click to speak the text in the textarea
document.querySelector("button").addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech); // Corrected typo in speechSynthesis
});







