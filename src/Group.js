function Group(props) {
    return <div className={"group group"+ props.num}>
        {props.group.map(student => <div className="student" key={student.id}><img src={require("" + student.img)} alt={"photo of" + student.name} /><span>{student.name}</span></div>)}
    </div>
}


export default Group;
