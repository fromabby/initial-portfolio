import './App.scss';

import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Route>

            </Routes>
        </>
    );
}

export default App;
