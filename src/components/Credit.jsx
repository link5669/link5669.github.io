import "../App.css"
const Credit = (props) => {
    return <li style={{color:"white", fontFamily: "Georgia", fontSize:"1.1rem"}}><b>{props.title}</b> | {props.from}</li>
}

export default Credit