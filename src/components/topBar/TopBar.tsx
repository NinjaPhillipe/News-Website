import logo from '../../assets/images/logo.svg';
import iconMenu from '../../assets/images/icon-menu.svg';
import iconCloseMenu from '../../assets/images/icon-menu-close.svg';
import './TopBar.css';


function displayMenu() {
  console.log('display menu');
  const ddd =  document.getElementById("mobileMenu")!
  if(ddd){
    ddd.classList.toggle("hidden");
  }
}

function NavLink({navClass, linkClass}: {navClass: string, linkClass:string} ) {
  return (
    <nav className={"font-inter " + navClass}>
      <a className={linkClass}>Home</a>
      <a className={linkClass}>New</a>
      <a className={linkClass}>Popular</a>
      <a className={linkClass}>Trending</a>
      <a className={linkClass}>Categories</a>
    </nav>);
}

function TopBar() {
  return (
    <div className="flex my-10">
        <img className="h-8" src={logo}  alt="logo" />
        <NavLink navClass="flex ml-auto items-center mr-3" linkClass="topBar-field text-gray-500" />
        <img className="sm:hidden h-4 w-10 my-auto" onClick={displayMenu} src={iconMenu}  alt="icon-menu" />
        <div id="mobileMenu" className="hidden absolute sm:hidden top-0 left-0">
            <div className="w-screen h-screen opacity-50 bg-gray-700 z-10"></div>
            <div className="bg-slate-50 w-2/3 h-full absolute top-0 right-0">
              <div className="flex flex-row ml-auto mr-4 mt-4 h-8 w-8">
                <img className="absolute z-20" onClick={displayMenu} src={iconCloseMenu}  alt="icon-close-menu" />
              </div>
              <NavLink navClass="topBar-menu" linkClass="hover:text-soft-orange pt-5" />
            </div>
        </div>
    </div>
  );
}

export default TopBar;