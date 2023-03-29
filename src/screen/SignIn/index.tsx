
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Card } from "@material-ui/core";
import { TextField, Button, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { Form } from "./style";
import store, { RootState } from '../../redux/store';
import { actionLogin } from '../../redux/store/fetchActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface isLoggedState {

    login: {
       isLogged: {
        payload: boolean
      } 
    }
  }


const SingIn = () => {

    const navigate = useNavigate();
    const { isLogged } = useSelector((state: isLoggedState): any => state.login);
    
    if(isLogged.payload){
        navigate('/produtos');
    }

    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
      });

      const handleChange = (event: any) => {
        setFormValues({
          ...formValues,
          [event.target.name]: event.target.value
        });
      };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        store.dispatch(actionLogin(formValues.email, formValues.password));
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
                <Card style={{ height: "342px",marginTop: '100px', display: "flex",justifyContent: "center", alignItems: "center"}}>
                    <div style={{backgroundColor: "#eeefef", width: "60%",height: 340, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <FormLabel>LOGIN</FormLabel>
                    <form style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} onSubmit={handleSubmit}>
                        <FormControl>
                            <FormGroup style={{margin: 12}}>
                                <TextField size="small" variant="outlined" style={{background: '#fff', borderWidth: "1"}} name="email" value={formValues.email} onChange={handleChange} label="Nome" />
                            </FormGroup>

                            <FormGroup style={{margin: 12}}>
                                <TextField size="small" variant="outlined" style={{background: '#fff', borderWidth: "1"}} name="password" value={formValues.password} onChange={handleChange} label="E-mail" />
                            </FormGroup>
                        </FormControl>

                        <Button style={{display: "flex", height: 40, width: 100}} type="submit" variant="contained" color="primary">
                            ENVIAR
                        </Button>
                        <ToastContainer />
                        </form>
                    </div>
                </Card>
            </Grid>
            </Grid>
        </Container>
    )
}
export default SingIn;