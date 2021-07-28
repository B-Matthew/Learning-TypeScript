import classes from './Card.module.css';

function Card(props) {
    return (
    <div className={classes.card}>
        {props.children}    
    </div>
    )
}

export default Card;

//childen è una propietà speciale che permette di prendere il contenuto all'interno 
// del tag Card presente in Mettupitem.js