import { useState } from 'react'
import './App.css'
import { CloudSun, MapPin } from 'lucide-react';

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

        {/* Caixa de Busca */}
        <div className="busca-box">
          <div className="busca-container">
            <input
             type="text" 
             placeholder="Digite o nome da cidade.."
             />
            <button>Buscar</button>
            </div>
          </div>

            {/* Resultado do Clima */}
            <div id="card-resultado">
              <div id="cidade-info">
                <div id="cidade-nome">
                <MapPin style={{color: '#3562eb'}} size={48} />
                  Campinas, BR
                </div>
                <p id="cidade-desc">
                  Nublado
                </p>
                </div>{/* </div>Fecha #cidade-desc */}

                {/* Temperatura principal */}
                <div id="temperatura-box">
                  <div id="temp-valor">21°C</div>
                  <div id="temp-sens"></div>
                    Sensação Térmica: 21°C
                  </div>
                

            </div>{/* Fecha #card-resultado*/}

        
      </div>
     </div>
    </>
  )
}

export default App
