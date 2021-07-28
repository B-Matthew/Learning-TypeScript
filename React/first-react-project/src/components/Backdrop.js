function Backdrop(props) {
    return <div className='backdrop' onClick={props.onCancel} />;  // in react alternativa per chiudere un tag senza contenuto
};

export default Backdrop;