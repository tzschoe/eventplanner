
function InteractionDemo() {
  

  function handleClick() {
    console.log("Button geklickt");
  }


  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <>  
      <input type="text" onChange={handleChange} 
      />
      
      <button onClick={handleClick}>
        Klick mich
      </button>
    </>
  );
}

export default InteractionDemo;
