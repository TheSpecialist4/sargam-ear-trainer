/* @flow */
import React, { Component } from 'react';
import SoundFont from 'soundfont-player';

import getRandomNotes from '../utils/getRandomNotes';
import getAudioContext from '../utils/getAudioContext';

type Props = {

}

type State = {
    notes: Array<string>
};

class Player extends Component<Props, State> {
    props: Props;
    state: State;

    constructor(props: Props) {
        super(props);

        this.state = {
            notes: []
        };

        this.playNotes = this.playNotes.bind(this);
        this.loadNotes = this.loadNotes.bind(this);
    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes: () => void;
    loadNotes() {
        this.setState({ notes: getRandomNotes(4) }, () => console.log('notes-- ', this.state.notes));
    }

    playNotes: () => void;
    playNotes() {
        const { notes } = this.state;
        const ac = getAudioContext();
        SoundFont.instrument(ac, 'electric_grand_piano')
            .then(piano => {
                piano.stop();
                let instantTime = 0;
                const notesSchedule = notes.reduce((schedule, note) => {
                    schedule.push({ time: instantTime += 0.75, note });
                    return schedule;
                }, []);
                piano.schedule(ac.currentTime, notesSchedule);
            })
            .catch(err => console.error(err));
    }

    render() {
        return <div>
            <h1>Press button to play notes</h1>
            <button onClick={this.playNotes}>Play notes</button>
            <button onClick={this.loadNotes}>Shuffle</button>
        </div>
    }
}

export default Player;