import { useState } from 'react'
import './App.css'
import { CloudSun } from 'lucide-react';

function App() {
  const [cidade, setCidade] = useState('');
  const [clima, setClima] = useState(null);
  const [carregando, setCarregamento] = useState(false);
  const [erro, setErro] = useState('');
  
  
  const buscarClima = async () => {

    if (!cidade.trim()){
      setErro('Por favor, digite uma cidade');
      return;
  }

  setCarregando(true);
  setErro('');

  try{

  }catch (error){

  }finally{

  }
}
  return (
    <>
     <div className="container">
      <div className="content">
        <header>
          <h1>
          <CloudSun color="white" size={48} />
            Consulta de Clima
            </h1>
          <p>Exemplo de consumo de API com React</p>
        </header>
        <div className="busca-box">
          <div className="busca-container">
            <input type="text" />
            <button></button>
            </div>
            
        </div>
      </div>
     </div>
    </>
  )
}

export default App
