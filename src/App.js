import './App.css';
import Class from './Class';
import {useState} from 'react';

const herrera_class = [
    {
        name: "Alana",
        img: "./images/alana.jpg",
        id: 0
    },
    {
        name: "Andrew",
        img: "./images/andrew.jpg",
        id: 1
    },
    {
        name: "Axel",
        img: "./images/axel.jpg",
        id: 2
    },
    {
        name: "Cameron",
        img: "./images/cameron.jpg",
        id: 3
    },
    {
        name: "Chloe",
        img: "./images/chloe.jpg",
        id: 4
    },
    {
        name: "Christian",
        img: "./images/christian.jpg",
        id: 5
    },
    {
        name: "Dominic",
        img: "./images/dominic.jpg",
        id: 6
    },
    {
        name: "Ella",
        img: "./images/ella.jpg",
        id: 7
    },
    {
        name: "Joesph",
        img: "./images/joseph.jpg",
        id: 8
    },
    {
        name: "Lily",
        img: "./images/lily.jpg",
        id: 9
    },
    {
        name: "Logan",
        img: "./images/logan.jpg",
        id: 10
    },
    {
        name: "Luna",
        img: "./images/luna.jpg",
        id: 11
    },
    {
        name: "Maverick",
        img: "./images/maverick.jpg",
        id: 12
    },
    {
        name: "Ruby",
        img: "./images/ruby.jpg",
        id: 13
    },
    {
        name: "Sofia",
        img: "./images/sofia.jpg",
        id: 14
    },
    {
        name: "Valeria",
        img: "./images/valeria.jpg",
        id: 15
    },
]

function App() {
    const [groupings, setGroupings] = useState([]);
    const [numStudentsInGroups, setNumStudentsInGroups] = useState(2)
    const valid_group_sizes = [];
    for (let i = 1; i <= herrera_class.length; i++) {
        valid_group_sizes[i] = i;
    }

    function generateNewPairings() {
        let temp_class = [...herrera_class];
        let newGroupings = [];
        let curGroup = [];
        while (temp_class.length > 0) {
            const student_index = Math.floor(Math.random() *  temp_class.length);
            const student = temp_class.splice(student_index, 1)[0];
            curGroup.push(student)
            if(curGroup.length >= numStudentsInGroups){
                newGroupings.push(curGroup);
                curGroup = [];
            }
        }
        if(curGroup.length > 0){
            newGroupings.push(curGroup)
        }
        setGroupings(newGroupings)
    }

    return (
        <div className="App">
            <div className="header">
                <h2>Classroom Groups Generator</h2>
                <span>Number of students per group: </span>
                <select value={numStudentsInGroups} onChange={e => setNumStudentsInGroups(parseInt(e.target.value))}>
                    {valid_group_sizes.map(size => <option key={size}>{size}</option>)}
                </select>
                <br/>
                <button className="generator_button" onClick={() => generateNewPairings()}>Generate new pairings</button>
            </div>
            <hr/>
            <Class groupings={groupings}/>
        </div>
    );
}

export default App;
