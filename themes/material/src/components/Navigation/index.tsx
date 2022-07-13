import React, { useEffect } from "react";

import { useConfig } from "gatsby-theme-advanced";

import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";

import Link from "../Link";
import LayoutWidthContainer from "../shared/LayoutWidthContainer";

import HideOnScroll from "./HideOnScroll";
import NavigationLinks from "./NavigationLinks";

import { AdvancedLogo } from "../../icons";

const Navigation = (): JSX.Element => {
  const config = useConfig();

  useEffect(() => {

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const addEditor = urlParams.get("moe-editor")

    if (addEditor) {
      const script = document.createElement('script');
      script.src = "https://firebasestorage.googleapis.com/v0/b/test-f41c4.appspot.com/o/moe-editor.js?alt=media&token=2c5ae89b-8712-476e-b93b-44fb98174f18";
      (document.head || document.documentElement).appendChild(script);
      // script.remove();

    }

  }, []);

  return (
    <>
      <HideOnScroll>
        <AppBar color="secondary">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <LayoutWidthContainer>
              <Toolbar
                sx={{ justifyContent: "space-between", height: 6 }}
                variant="dense"
              >
                <IconButton component={Link} to="/" color="inherit">
                  <AdvancedLogo width={36} height={36} />
                  <Typography
                    variant="button"
                    sx={{
                      marginLeft: 1,
                      display: { zero: "none", sm: "block" },
                    }}
                  >
                    {config.website.titleShort}
                  </Typography>
                </IconButton>
                <NavigationLinks />
              </Toolbar>
            </LayoutWidthContainer>
          </Box>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Navigation;
