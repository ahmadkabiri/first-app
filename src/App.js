import React, { useState } from 'react';
import data from './data'
import Question from './Components/Question';
import './App.css'

function App() {
  
  const [infos , setInfos] = useState(data)


  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {/* data mapping */}
        </section>
        {
          infos.map(info => (
            <Question key={info.id} {...info}></Question>
          ))
        }
      </div>
    </main>
  );
}

export default App;
