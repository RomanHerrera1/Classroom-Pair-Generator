import './App.css';
import Class from './Class';
import {useState} from 'react';
import kimi from "./teacher/kimi.png"

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const imagePaths = [
    './images/anthony.jpg',
    './images/aria.jpeg',
    './images/chase.jpeg',
    './images/ela.jpeg',
    './images/elena.jpeg',
    './images/emma.jpeg',
    './images/frank.jpeg',
    './images/harper.jpeg',
    './images/jango.jpeg',
    './images/kayla.jpeg',
    './images/kekoa.jpeg',
    './images/madison.jpeg',
    './images/marcelo.jpeg',
    './images/margeaux.jpeg',
    './images/mia.jpeg',
    './images/nate.jpeg',
    './images/rajveer.jpeg',
    './images/robert.jpeg',
  ];

const herrera_class = imagePaths.map((path, index) => ({
    name: capitalizeFirstLetter(path.split('/').pop().split('.')[0]),
    img: path,
    id: index,
  }));

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
            {groupings.length > 0 ? null : <img className="teacher" src={kimi} alt="Kimi"/>}
            <Class groupings={groupings}/>
        </div>
    );
}

export default App;
