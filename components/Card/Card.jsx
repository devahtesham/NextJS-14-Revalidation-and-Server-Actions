const styles = {
    padding: "10px",
    borderRadius: "20px",
    boxShadow: "0 0 27px 3px #0000003b"
}



export default function Card({children}){
    return(
        <div style={styles}>
            {children}
        </div>
    )
}