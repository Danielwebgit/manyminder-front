import { Routes, Route, Navigate } from 'react-router-dom';
import SingIn from '../screen/SignIn';
import SignUp from '../screen/SignUp';
import Suppliers from '../screen/Suppliers';
import Product from '../screen/Product';
import Users from '../screen/Users';
import CreateProduct from '../screen/Product/create';
import NoAuthorization from '../screen/NoAuthorization';
import CreateSupplier from '../screen/Suppliers/create';
import jwtDecode from 'jwt-decode';

export const AppRoutes = () => {

    interface Token {
        API_TIME: number;
      }

    function checkIsAuthenticated()  {
        
        const token = localStorage.getItem('token');

        if (!token) {
            return false;
        } else {
            return true;
        }
      }

    function PrivateRoute({children}: any) {

        
        if (checkIsAuthenticated()) {
            
            return children
          }
            
         return <Navigate to="login" />
    }

    return (
        
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
                <Route path='/nao-autorizado' element={
                        <NoAuthorization/>
                }/>
                
                <Route path='*' element={<Navigate to="login" />}/>
        </Routes>
    )
}