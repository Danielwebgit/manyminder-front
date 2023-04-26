import api from '../../../Services/api';
import apiService from '../../../Services/apiService';
import { setProducts, deleteProduct } from '../ducks/products';
import { setAuthorization } from '../ducks/authorization';

import { setSuppliers } from '../ducks/suppliers';
import { setLoading } from '../ducks/loading';
import { setUsers } from '../ducks/users';
import { setLogin } from '../ducks/login';
import Swal from 'sweetalert2'
import 'react-toastify/dist/ReactToastify.css';

export const actionLogin = (email: string, password: string) => {
  
  return (dispatch: any) => {
    const loginRequest: any = apiService.login(email, password)
    
    loginRequest.then((response: any) => {
      dispatch(setLogin(true))
      console.log(response.data)
      localStorage.setItem('token', response.data.token)
    }).catch((response: any) => {
      dispatch(setLogin(false))
    })
  }
}

export const fetchProducts = (): any => {
  
  return (dispatch: any) => {
    
    dispatch(setLoading(true));
    
    api.get('/products').then((response) => {

      dispatch(setProducts(response.data));
      dispatch(setAuthorization(true));
      dispatch(setLoading(false))

    }).catch((error) => {
      console.log(error)
    });
  }
}

export const fetchSuppliersAction = (): any => {
  
  return (dispatch: any) => {
    
    dispatch(setLoading(true));
    api.get('/suppliers').then((response) => {
      console.log(response.data)
      dispatch(setSuppliers(response.data));
      dispatch(setLoading(false))
    }).then((error) => {
      console.log(error)
      dispatch(setAuthorization(false));
    });
  }
}

export const fetchUsers = (): any => {
  
  return (dispatch: any) => {
    
    dispatch(setLoading(true));
    
    api.get('/users').then((response) => {
      console.log(response.data)
      dispatch(setUsers(response.data));
      dispatch(setAuthorization(true));
      dispatch(setLoading(false))

    }).catch(() => {

      dispatch(setLoading(false))
      dispatch(setAuthorization(false));

    });
  }
}

export const actionDeleteProduct = (productId: any) => {

return (dispatch: any) => {

  Swal.fire({
    title: 'Excluir produto?',
    text: "Tem certeza que deseja excluir esse produto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, manda para o espaço!'
  }).then((result: any) => {
    if (result.isConfirmed) {
      
      api.post(`/products/delete/${productId}`).then((response) => {
        console.log(response)
        dispatch(deleteProduct(productId))
      })
      Swal.fire(
        'Deletado!',
        'Esse produto não consta mais na lista.',
        'success'
      )
    }
  })
  }
}