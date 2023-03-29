import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Card } from "@material-ui/core";
import { TextField, Button, FormControl, FormLabel, FormGroup, FormControlLabel } from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Link, useLocation } from 'react-router-dom';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import apiService from '../../Services/apiService';

const CreateProduct = ({RouteMatch : any = null}) => {

  const [formValues, setFormValues] = useState({id: '', name: '', description: '', priceUn: '', username: '', activated: false, supplier_id: ''});
  const [suppliers, setSuppliers] = useState([]);
  const location = useLocation();

  
    useEffect(() => {
      if(location.pathname != '/produtos/registrar'){
        const productData: any = JSON.parse(localStorage.getItem("productData") ?? "");
        setFormValues(productData);      
      }
    
    fetchSuppliers();

    }, []);


    async function fetchSuppliers() {
      const  fetchSuppliers =  await apiService.fetchSuppliers(); 
      setSuppliers(fetchSuppliers.data.fornecedores);
    }

    const handleChange = (event: any) => {

      setFormValues({...formValues, 
        [event.target.name]: event.target.value,
        [event.target.description]: event.target.value,
        [event.target.priceUn]: event.target.value,
        [event.target.supplier_id]: event.target.value,
        [event.target.username]: event.target.value,
      });
    };

    const handleSubmit = async (e: any) => {
      e.preventDefault();
      
      const formData = { name: formValues.name, description: formValues.description, priceUn: formValues.priceUn, supplier_id: formValues.supplier_id, activated: formValues.activated };
      
      if(formValues.id.length > 0){
        apiService.updateProduct(formValues.id, formData);
      } else {
        apiService.addProduct(formData);
      }
  }

    return (
        <Container maxWidth={false} style={{ backgroundColor: "#f3f3f366", width: "55%", height: "600px" }}>
            <Grid container spacing={2} >
            <Grid item xs={6} sm={12} md={12}>
                <Card style={{marginTop: 80, height: "150px", display: "flex",justifyContent: "center", alignItems: "center"}}>
                <div><img
                  style={{
                    borderRadius: "15px",
                    height: "49px",
                    width: "240px",
                  }}
                  alt="complex"
                  src="https://www.manyminds.com.br/assets/images/manyminds.png"
                /></div>
                </Card>
            </Grid>
            <Grid item xs={6} sm={12} md={12}>
                <Card style={{ height: "480px",marginTop: '100px', display: "flex",justifyContent: "center", alignItems: "center"}}>
                    <div style={{backgroundColor: "#eeefef", width: "60%",height: 340, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <FormLabel>{formValues.id.length > 0 ? 'Editando produto' : 'Cadastrando produto'}</FormLabel>
                      <form onSubmit={handleSubmit}>
                          <FormControl>
                              <FormGroup style={{margin: 12}}>
                                  <TextField size="small" variant="outlined" style={{background: '#fff', borderWidth: "1"}} value={formValues.name} onChange={handleChange} name="name" label="Nome" />
                              </FormGroup>

                              <FormGroup style={{margin: 12}}>
                                  <TextField size="small" variant="outlined" style={{background: '#fff', borderWidth: "1"}} value={formValues.description} onChange={handleChange} name="description" label="Descrição" />
                              </FormGroup>

                              <FormGroup style={{margin: 12}}>
                                  <TextField size="small" variant="outlined" style={{background: '#fff', borderWidth: "1"}} value={formValues.priceUn} onChange={handleChange} name="priceUn" label="Preço" />
                              </FormGroup>

                              <FormGroup style={{margin: 12}}>
                              <FormControl>
                                <FormLabel>Status</FormLabel>
                                <RadioGroup value={formValues.activated} onChange={handleChange} name="activated" sx={{ my: 1 }}>
                                  <Radio value={'1'} label="Ativado" />
                                  <Radio value={'0'} label="Desativado" />
                                </RadioGroup>
                                
                              </FormControl>
                              </FormGroup>
                              
                              <FormGroup style={{margin: 12}}>
                                  <InputLabel id="demo-select-small">Fornecedor</InputLabel>
                                  <Select
                                      labelId="demo-select-small"
                                      id="demo-select-small"
                                      name="supplier_id"
                                      value={formValues.supplier_id}
                                      label="Fornecedor"
                                      onChange={handleChange}
                                      size="small"
                                  >
                                      {suppliers.map((item: any) => (
                                        <MenuItem value={item.id}>{item.username}</MenuItem>
                                      )
                                      )}
                                  </Select>
                              </FormGroup>
                          </FormControl>

                          <div style={{  display: 'flex',width: 250, flexDirection: "row", justifyContent: "space-between"}}>
                            <Button style={{ height: 40, width: 100}} type="submit" variant="contained" color="primary">
                                ENVIAR
                            </Button>
                            <Link to={'/produtos'}>
                              <Button style={{ height: 40, width: 100}} type="submit" variant="contained" color="primary">
                                  VOLTAR
                              </Button>
                            </Link>
                          </div>
                        </form>
                    </div>
                </Card>
            </Grid>
            </Grid>
        </Container>
    )
}
export default CreateProduct;