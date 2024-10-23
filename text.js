

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










