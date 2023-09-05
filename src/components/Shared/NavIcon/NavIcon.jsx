import logoImg from '../../../assets/logo.png'
import { Link } from "react-router-dom";

const NavIcon = () => {
    return (
        <div>
<Link to="/">
          <img
        className='hidden md:block'
        src={logoImg}
        alt='logo'
        width='100'
        height='100'
      />
</Link>
        </div>
    );
};

export default NavIcon;