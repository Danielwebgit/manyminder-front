import api  from "./api";
import axios from 'axios'

export const updateProduct = (productId: any, data: any) => {
  api.post(`/products/update/${productId}`, data).then((response) => {
    console.log(response.data)
  });
}

export const deleteProduct = (productId: any) => {
  api.post(`/products/delete/${productId}`);
}

export const verifyPermissionRoute = (userId: any) => {
  return api.get(`/products/testVery/${userId}`);
}

export const fetchSuppliers = () => {
  return api.get(`/suppliers`);
}

export const addProduct = (formData: any) => {
  return api.post(`/products/store`, formData);
}


export const login = (email: any, password: any) => {
  
  const apiLogin = axios.create({
      baseURL: 'http://www.manyminder.com.test',
      headers: {
        'Content-Type': 'multipart/form-data'
      }
  })

  return apiLogin.post('/login', {email, password});
}

export default {
  login,
  updateProduct,
  fetchSuppliers,
  deleteProduct,
  verifyPermissionRoute,
  addProduct
  
}