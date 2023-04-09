type b = {
    value:string,
    color:string,
    onHandler:()=>void
}
const Button = (props:b) => {
    return (
        <div>
            <button type="button" className={props.color} onClick={props.onHandler}>{props.value}</button>
            
        </div>
    )
}
export default Button;