import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Card } from "@material-ui/core";
import { TextField, Button, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const SingUp = () => {

    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

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
                    <FormLabel>CADASTRO DE FORNECEDOR</FormLabel>

                        <FormControl>
                            <FormGroup style={{margin: 12}}>
                                <TextField size="small" variant="outlined" style={{background: '#fff', borderWidth: "1"}} name="name" label="Nome" />
                            </FormGroup>

                            <FormGroup style={{margin: 12}}>
                                <TextField size="small" variant="outlined" style={{background: '#fff', borderWidth: "1"}} name="email" label="E-mail" />
                            </FormGroup>

                            <FormGroup style={{margin: 12}}>
                                <TextField size="small" variant="outlined" style={{background: '#fff', borderWidth: "1"}} name="password" label="Senha" />
                            </FormGroup>
                            {/* <FormGroup style={{margin: 12}}>
                                <InputLabel id="demo-select-small">Produtos</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={age}
                                    label="Tipo de usuário"
                                    onChange={handleChange}
                                    size="small"
                                >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormGroup> */}
                        </FormControl>

                        <Button style={{display: "flex", height: 40, width: 100}} type="submit" variant="contained" color="primary">
                            ENVIAR
                        </Button>
                    </div>
                </Card>
            </Grid>
            </Grid>
        </Container>
    )
}
export default SingUp;