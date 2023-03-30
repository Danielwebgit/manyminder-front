import { useEffect, useState } from 'react';
import { Card } from "@material-ui/core";
import { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import SuppliersTable from '../../components/Table/SuppliersTable';
import Spinner from '../../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchSuppliersAction } from '../../redux/store/fetchActions';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Suppliers = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchSuppliersAction());

    }, [])

    const [age, setAge] = useState('');

    //  interface AuthState {
    //     auth: {
    //         isAuthentication: boolean;
    //     };
    //     user: User | null;
    //     token: string | null;
    //   }

    // const  isAuthentication = useSelector((state: AuthState) => state.auth.isAuthentication);

    interface LoadingState {
        loading: {
            isLoading: boolean
        }
    }


    const   loading   = useSelector((state: LoadingState) => state.loading.isLoading);

    console.log(loading)
    // const handleChange = (event: SelectChangeEvent) => {
    //     setAge(event.target.value);
    // };

    return (
        <Grid container spacing={0} style={{ marginTop: 40 }}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ display: "flex", backgroundColor: "#8545", justifyContent: "center" }}>
                <div style={{ position: 'absolute' }}>
                    <Card>

                        {
                            loading ?
                                <>
                                    <Link to={'/produtos/registrar'}>
                                        <Button style={{ marginBottom: '10px', float: 'right', height: 40, width: 200 }} variant="contained" color="primary">
                                            Cadastrar novo
                                        </Button>
                                    </Link>
                                    <div style={{ width: 800, height: '100%', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        {/* <BasicTable products={products}/>  */}
                                        <SuppliersTable />
                                    </div>
                                </>
                                : <Spinner />
                        }


                    </Card>
                </div>

            </Grid>
        </Grid>
    )
}
export default Suppliers;