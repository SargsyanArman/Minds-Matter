import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import ThemeModes from '../Components/Shared/ThemeModes';
import { SearchProvider } from '../Contexts/SearchContext';

const DefaultLayout = () => {
    return (
        <ThemeModes tagName='gray-div'>
            <SearchProvider>
                <Header />
                <>
                    <Outlet />
                </>
                <Footer />
            </SearchProvider>
        </ThemeModes>
    );
};

export default DefaultLayout;
