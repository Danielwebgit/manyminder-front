import { Routes, Route, Navigate } from 'react-router-dom';
import SingIn from '../screen/SignIn';
import SignUp from '../screen/SignUp';
import Suppliers from '../screen/Suppliers';
import Product from '../screen/Product';
import Users from '../screen/Users';
import CreateProduct from '../screen/Product/create';
import NoAuthorization from '../screen/NoAuthorization';
import CreateSupplier from '../screen/Suppliers/create';
import { Provider } from 'react-redux';
import store from '../redux/store';
import jwtDecode from 'jwt-decode';

export const AppRoutes = () => {

    interface Token {
        API_TIME: number;
      }

    function checkIsAuthenticated()  {
        const token = localStorage.getItem('token');

        if (!token) {
         
          return false;
        }
      
        try {

            const decodedToken = jwtDecode<Token>(token);

            const minutos = Math.floor((decodedToken.API_TIME / 60) % 60);
            
            const horaDecodeToken = Math.floor(1680057212 * 1000);
            
            const expirationDate = new Date(horaDecodeToken);
            console.log(minutos)
            const now = new Date();
            
            return now < expirationDate;
        } catch (err) {
          return false;
        }
      }

    function PrivateRoute({children}: any) {

        
        if (true) {
            
            return children
          }
            
         return <Navigate to="login" />
    }

    return (
        <Provider store={store}>
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
                <Route path='/fornecedor/registrar' element={
                <PrivateRoute>
                    <CreateSupplier/>
                </PrivateRoute>
                    }/>

                <Route path='/nao-autorizado' element={
                        <NoAuthorization/>
                }/>
                
                <Route path='*' element={<Navigate to="login" />}/>
            </Routes>
        </Provider>
    )
}