import Todo from './components/Todo'; // importo il componente


function App() {
  return (
   <div>
     <h1>My Todoo</h1>  
     {/* la sintassi per importare il componente  , si può scrivere anche <Todo></Todo> IMPORTANTE la lettera maiuscola fondamentale in React 
          posso utilizzare il mio componente a mio piacimento per aggiungere quanti blocchi html voglia*/}
      <Todo text='First'/> 
      <Todo text='Second'/>
      <Todo text='Third' />
   </div>
  );
}

export default App;
      
