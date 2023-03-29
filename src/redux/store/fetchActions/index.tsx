import api from '../../../Services/api';
import apiService from '../../../Services/apiService';
import { setLoading, setProducts, deleteProduct, setAuthorization } from '../ducks/products';
import { setLogin } from '../ducks/login';
import Swal from 'sweetalert2'
import 'react-toastify/dist/ReactToastify.css';

export const actionLogin = (email: string, password: string) => {
  
  return (dispatch: any) => {
    const loginRequest: any = apiService.login(email, password)
    
    loginRequest.then((response: any) => {
      dispatch(setLogin(true))
      localStorage.setItem('token',response.data.token)
    }).catch((response: any) => {
      dispatch(setLogin(false))
    })
  }
}

export const fetchProducts = (): any => {
  
  return (dispatch: any) => {
    
    dispatch(setLoading(true));
    
    api.get('/products').then((response) => {
      console.log(response.data.error)
      if(response.data.error){
        dispatch(setLoading(false))
        dispatch(setAuthorization(false));
      }
      dispatch(setProducts(response.data));
      dispatch(setLoading(false))
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