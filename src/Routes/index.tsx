import { Routes, Route, Navigate } from 'react-router-dom';
import SingIn from '../screen/SignIn';
import SignUp from '../screen/SignUp';
import Suppliers from '../screen/Suppliers';
import Product from '../screen/Product';
import Users from '../screen/Users';
import CreateProduct from '../screen/Product/create';
import CreateUser from '../screen/Users/create';
import NoAuthorization from '../screen/NoAuthorization';
import NotFoundPage from '../screen/NotFoundPage';
import CreateSupplier from '../screen/Suppliers/create';
import useLoggedIn from '../Hooks/LoggedIn';
import { toast, ToastContainer } from "react-toastify";
import ConfigPermissoes from '../screen/ConfigPermissoes';

export const AppRoutes = () => {

   
    //const notify = () => toast("Wow so easy!");

    const isLogged = useLoggedIn();
    console.log(isLogged)
    function checkIsAuthenticated()  {
        
        //const token = localStorage.getItem('token');

        if (isLogged) {
            return true;
        } else {
            return false;
        }
      }

    function PrivateRoute({children}: any) {

        
        if (checkIsAuthenticated()) {
            return children
          }
            
         return <Navigate to="login" />
    }

    return (
        <>
        <div className="message">
                <ToastContainer />
            </div>
            <Routes>
                <Route path='/login' element={
                    <SingIn/>
                }/>
                <Route path='/cadastrar' element={
                    <PrivateRoute>
                        <SignUp/>
                    </PrivateRoute>
                
                }/>
                <Route path='/fornecedores' element={
                    <PrivateRoute>
                        <Suppliers/>
                    </PrivateRoute>
                }/>
                <Route path='/fornecedores/registrar' element={
                <PrivateRoute>
                    <CreateSupplier/>
                </PrivateRoute>
                    }/>
                <Route path='/produtos' element={
                <PrivateRoute>
                    <Product/>
                </PrivateRoute>
                }/>
                <Route path='/config-permissoes' element={
                <PrivateRoute>
                    <ConfigPermissoes/>
                </PrivateRoute>
                }/>
                <Route path='/usuarios' element={
                <PrivateRoute>
                    <Users/>
                </PrivateRoute>
                }/>
                <Route path='/produtos/registrar' element={
                <PrivateRoute>
                    <CreateProduct/>
                </PrivateRoute>
                }/>
                <Route path='/produtos/editar/:productId' element={
                <PrivateRoute>
                    <CreateProduct/>
                </PrivateRoute>
                }/>

                <Route path='/users/editar/:userId' element={
                <PrivateRoute>
                    <CreateUser/>
                </PrivateRoute>
                }/>

                <Route path='/nao-autorizado' element={
                        <NoAuthorization/>
                }/>

                <Route path='/pagina-nao-encontrada' element={
                        <NotFoundPage/>
                }/>
                
                <Route path='*' element={ <Navigate to="/pagina-nao-encontrada" />}/>
        </Routes>
        </>
    )
}