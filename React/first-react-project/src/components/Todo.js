function Todo(props) {   // props è un oggetto dove ogni key -> value è dichiarata in app.js <Todo text='First'/> 
    
    function deleteBtn() {
        console.log('ciao ' + props.text);
    }

    return(
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteBtn}>Delete</button>
            </div>
        </div>
    );
}

export default Todo;    //esportare sempre il file per usarlo negli altri components , IMPORTANTE:creare components con maiuscola iniziale