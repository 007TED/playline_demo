import React from 'react';
import './App.css'
import { PlayLineCard, Header, Footer } from "./container/index";

const App = () => {
    return(
        <div className="app">
            <Header/>
            <PlayLineCard/>
            <Footer />
        </div>
    )
}

export default App;