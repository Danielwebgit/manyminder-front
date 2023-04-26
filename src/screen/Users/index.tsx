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

  const { authorization } = useSelector((state: RootState): any => state.products);

  if (authorization.payload == false) {
    navigate('/nao-autorizado');
  }

  useEffect(() => {

    dispatch(fetchUsers());

  }, [])

  return (
    <Grid container spacing={0} style={{ marginTop: 40 }} >
      <Grid item xs={12} sm={12} md={12} lg={12} style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <Card>

            <Link to={'/produtos/registrar'}>
              <Button style={{ marginBottom: '10px', float: 'right', height: 40, width: 200 }} variant="contained" color="primary">
                Cadastrar novo
              </Button>
            </Link>
            {
              loading ? <Spinner /> :
                <div style={{ width: 800, height: '100%', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  {/* <BasicTable products={products}/>  */}
                  <UsersTable />
                </div>
            }

          </Card>
        </div>
      </Grid>
    </Grid>
  )
}
export default Users;