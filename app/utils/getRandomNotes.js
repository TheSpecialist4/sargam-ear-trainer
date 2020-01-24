/* @flow */
const NOTES = require('../../notes.json');

const MIN = 24; // C2 in json file
const MAX = 72; // C7 in json file

const sanitizeNote = (note: string): string => {
    return note.split('/')[0];
}

module.exports = (count: number) => {
    const getRandomNote = (buffer, _count) => {
        if (_count === count) return buffer;
        const randomIndex = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
        buffer.push(sanitizeNote(Object.keys(NOTES)[randomIndex]));
        return getRandomNote(buffer, _count + 1);
    }

    return getRandomNote([], 0);
}