import { HeaderContent } from "./style";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import useLoggedIn from '../../Hooks/LoggedIn';
import useLogout from '../../Hooks/Logout';
import { useEffect } from "react";

export default function Header(this: any) {

  const login = useLoggedIn();
  const logout = useLogout();

  useEffect(() => {
  },[login])

  return (
    login.isLogged ?
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ backgroundColor: "#8545" }}>
          <HeaderContent>
            <div className="logo">
              <img
                style={{
                  borderRadius: "15px",
                  height: "49px"
                }}
                alt="complex"
                src="https://www.manyminds.com.br/assets/images/manyminds.png"
              />
            </div>
            <Box>
              <ul className="menu">
                <>
                  <li>
                    <NavLink to="/fornecedores" className="nav-link">
                      FORNECEDORES
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/produtos" className="nav-link">
                      PRODUTOS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/usuarios" className="nav-link">
                      USUÁRIOS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" onClick={logout} className="nav-link">
                      Sair
                    </NavLink>
                  </li>
                </>
              </ul>
            </Box>
          </HeaderContent>
        </Grid>
      </Grid>
    : <div></div>
  )

}