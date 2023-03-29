import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Card } from "@material-ui/core";
import UsersTable from '../../components/Table/UsersTable';
import Spinner from '../../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchUsers } from '../../redux/store/fetchActions';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  interface loadignState {
    products: {
      loading: {
        payload: boolean
      }
    }
  }

  const loading = useSelector((state: loadignState) => state.products.loading.payload);
  //const loading = useSelector((state: loadignState) => state.products.loading.payload);
  const { products } = useSelector((state: RootState): any => state.products);

  const { authorization } = useSelector((state: RootState): any => state.products);
  
  if(false) {
    navigate('/nao-autorizado');
  }
  
  useEffect(() => {

    dispatch(fetchUsers());

  }, [])

    return (
        <Container maxWidth={false} style={{ backgroundColor: "#f3f3f366", width: "55%", height: "1000px" }}>
            <Grid container spacing={2} >
            <Grid item xs={6} sm={12} md={12}>
                <Card style={{ height: "150px", display: "flex",justifyContent: "center", alignItems: "center"}}>
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
                <Card style={{ height: "800px", display: "flex",justifyContent: "center", alignItems: "center"}}>
                    <div>
                      <Link to={'/produtos/registrar'}>
                        <Button style={{display: "flex", marginBottom: '10px', float: 'right', height: 40, width: 200}} variant="contained" color="primary">
                                  NOVO
                        </Button>
                      </Link>
                        {
                          loading ? <Spinner /> :
                          <div style={{ width: 800,height: '100%', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            {/* <BasicTable products={products}/>  */}
                            <UsersTable />
                          </div>
                        }
                    </div>
                </Card>
            </Grid>
            </Grid>
        </Container>
    )
}
export default Users;