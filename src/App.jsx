import React, { useState } from 'react'
import { createBrowserRouter, Route, RouterProvider, Routes, BrowserRouter } from 'react-router-dom';
import UserLogin from './Pages/UserRegister/UserLogin/UserLogin';
import NotFound from './Pages/NotFound/NotFound';
import ContactUs from './Pages/ContactUs/ContactUs';
import Main from './Components/Main/Main';
import ToDoList from './Pages/ToDoList/ToDoList';
import UserRegister from './Pages/UserRegister/UserRegister';
import Movies from './Pages/Movies/Movies';
import Values from './Pages/AboutUs/Values/Values';
import Vision from './Pages/AboutUs/Vision/Vision';
import AboutUs from './Pages/AboutUs/AboutUs';
import MovieDetails, { DetailsLoader } from './Pages/Movies/MoviesDetails/MovieDetails';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import Favorites from './Components/Favorites/Favorites';
import {LanguageProvider} from './contexts/language';


const routes = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            { path: '/', element: <Movies />, errorElement: <NotFound /> },
            {
                path: 'About-Us', element: <AboutUs />, children: [
                    { index: true, element: <Values /> },
                    { path: 'Vision', element: <Vision /> }
                ]
            },
            { path: 'Contact-Us', element: <ContactUs /> },
            { path: 'TodoList', element: <ToDoList /> },
            { path: 'Favorites', element: <Favorites /> },


            { path: 'UserRegister', element: <UserRegister /> },
            { path: 'UserLogin', element: <UserLogin /> },
            { path: 'MovieDetails/:id', element: <MovieDetails />, loader: DetailsLoader, errorElement: <NotFound /> },
        ], errorElement: <NotFound />
    },

    { path: '*', element: <NotFound /> },
])


function App() {
    const [language, setLanguage] = useState('en')


    return(
        //  <LanguageProvider value={{language,setLanguage}}>
        <Provider store={Store}>
            <RouterProvider router={routes} />
        </Provider>
    // </LanguageProvider>
    )

}

export default App
