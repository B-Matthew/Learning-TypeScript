import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {   // props è un oggetto dove ogni key -> value è dichiarata in app.js <Todo text='First'/> 
    const [modalOpen, setModal] = useState(false);    // userstate è una funzione di react che ritorna un array con 2 elementi dove il secondo è una funzione

    function deleteBtn() {
        setModal(true);
    }

    function closeModal() {
        setModal(false);
    }

    return(
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteBtn}>Delete</button>
            </div>
            {modalOpen && <Modal onCancel={closeModal} />}    {/*shortcut per il ternario*/}
            {modalOpen && <Backdrop onCancel={closeModal} />}      {/*per usare la funzione devo passare come parametro props nel component e dichiarare l'onClick nel mio component BackDrop*/}
        </div>
    );
}

export default Todo;    //esportare sempre il file per usarlo negli altri components , IMPORTANTE:creare components con maiuscola iniziale