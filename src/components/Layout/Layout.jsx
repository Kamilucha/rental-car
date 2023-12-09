import { NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react";
import { Header, HeaderContainer, Nav} from "./Layout.styled";

const Layout = () => {

return <div>
    <Header>
        <HeaderContainer>
         <Nav>
           <NavLink to="/catalog">Catalog</NavLink>
           <NavLink to="/favorites">Favorites</NavLink>
         </Nav>
        </HeaderContainer>
    </Header>
    <main>
        <Suspense fallback={<div>Loading...</div>}>
           <Outlet/>  
        </Suspense>
    </main>
        </div>
   }
   
   export default Layout