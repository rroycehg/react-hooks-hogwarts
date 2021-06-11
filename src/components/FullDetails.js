function FullDetails(props){
    return(
        <div>
            <p>{props.weight}</p>
            <p>{props.specialty}</p>
            <p>{props.greased ? "Greased" : "Not Greased"}</p>
            <p>{props.medal}</p>
        </div>
    )
}
export default FullDetails;