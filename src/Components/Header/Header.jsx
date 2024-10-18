import { HeaderProvider } from '../../Contexts/HeaderContext';
import NavBar from './NavBar';

const Header = () => {
    return (
        <HeaderProvider>
            <NavBar />
        </HeaderProvider>
    );
};

export default Header;
