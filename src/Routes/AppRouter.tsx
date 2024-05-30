import { 
    Route, 
    Routes 
} from 'react-router-dom';
import MainPage from './Main/MainPage';
import ContactPage from './Contact/ContactPage';
import CoursesPage from './Courses/CoursesPage';
import AboutPage from './About/AboutPage';

const AppRoutes = () => (
    <Routes>
        <Route>
            <Route path="/main" element={<MainPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/courses" element={<CoursesPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
        </Route>
    </Routes>
)   

export default AppRoutes