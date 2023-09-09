import Container from "../Container/Container";
import NavIcon from "../NavIcon/NavIcon";
import NavSearch from "../NavSearch/NavSearch";
import NavMenu from "../NavMenu/NavMenu";


const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
{/* navbar image section ---------------- */}
<div><NavIcon/></div>
{/* navbar search section ---------------- */} 
<div><NavSearch/></div>
{/* navbar Menu section ---------------- */} 
<div><NavMenu/></div>
          </div>
        </Container>
      </div>
    </div>
    );
};

export default Navbar;