/*@ flow */
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

module.exports = () => {
    return audioContext;
}