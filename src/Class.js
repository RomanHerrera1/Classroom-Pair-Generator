import Group from './Group';

function Class(props) {
    return <div className="class">
        <div className="half">
            {props.groupings.slice(0, props.groupings.length/2).map(group => <Group group={group} num ={1} key={group[0].id}/>)}
        </div>
        <div className="half">
            {props.groupings.slice(props.groupings.length/2, props.groupings.length).map(group => <Group group={group} num={2} key={group[0].id}/>)}
        </div>
    </div>
}

export default Class;
