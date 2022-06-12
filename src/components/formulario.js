import { useState, useEffect } from "react";



function Form({handleSetData}) {
  const [data, setData] = useState(new Date());
  

  const handleForm = (evt) => {
    evt.preventDefault();
    const dataAtual = new Date(data);
    const dataNova = `${dataAtual.getMonth()+1}/${dataAtual.getDate()+1}/${dataAtual.getFullYear().toString().substr(-2)}`;
    handleSetData(dataNova)
  }
return((
  
<form>
        <input type="date" id="data" name="fnumero" value={data} onChange = {(evt) => setData(evt.target.value)} />
        <button onClick={handleForm}></button>
      </form>
      
      ))
    }
export default Form;
