import React from 'react';
import { article, brand, cta, feature, navbar } from './components';
import { footer, header, blog,features,possibility,whatgpt3 } from './containers';

const App = () => {
    return (
        <div>
            <div className='App'>
                <div className='gradient_bg'>
                 <navbar />
                 <header />
                </div>
                <brand />
                <whatgpt3 />
                <features />
                <possibility />
                <cta />
                <blog />
                <footer />
           </div>
       </div>
    )
}

export default App
