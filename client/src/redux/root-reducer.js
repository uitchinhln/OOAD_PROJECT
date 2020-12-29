import { combineReducers } from 'redux';
import LangProvider from './LanguageProvider/reducer'
import ThemeProvider from './ThemeProvider/reducer'
import Preloader from './Preloader/reducer'
import Auth from './Auth/reducer'

export default combineReducers({
    LangProvider,
    ThemeProvider,
    Preloader,
    Auth
});
