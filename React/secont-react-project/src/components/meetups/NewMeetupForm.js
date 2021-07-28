import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';
import {useRef} from 'react';      // useRef serve per prelevare i dati dall'input, ritorna un oggetto con value mutabile

function NewMeetupForm() {
    const titleInput = useRef();
    const imageInput = useRef();
    const addressInput = useRef();
    const descInput = useRef();
    function submitHandler(event) {
        event.preventDefault();     // è una funzione che previene il reload della pagina
        const titleEnter = titleInput.current.value;
        const imageEnter = imageInput.current.value;
        const addressEnter = addressInput.current.value;
        const descEnter = descInput.current.value;

        const myData = {
            title: titleEnter,
            image: imageEnter,
            address: addressEnter,
            desc: descEnter
        }
        console.log(myData);
    }
    
    return (
    <Card>
        <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
            <label>Meetup Title</label>
            <input type='text' require id='title' ref={titleInput} />
        </div>
        <div className={classes.control}>
            <label>Meetup image</label>
            <input type='url' require id='image' ref={imageInput} />
        </div>
        <div className={classes.control}>
            <label>Meetup Address</label>
            <input type='text' require id='address' ref={addressInput} />
        </div>
        <div className={classes.control}>
            <label>Meetup Descriptiion</label>
            <textarea id='description' required rows="4" ref={descInput}></textarea>
        </div>
        <div className={classes.actions}>
            <button>Add Meetup</button>
        </div>
        </form>
    </Card>
    )
}

export default NewMeetupForm;