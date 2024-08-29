"use client";

import React from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./RollingDrawer.css";

const RollingDrawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  return (
    <Drawer
      anchor="bottom"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      PaperProps={{
        style: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: "100vh",
          overflow: "hidden",
        },
      }}
    >
      <Box
        className="top-nav"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"8px"}
        top={0}
        width={"100%"}
        zIndex={1000}
      >
        <IconButton
          onClick={() => setIsDrawerOpen(false)}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box />
        <Box>
          <Typography className="title" variant="h6" textAlign="center" >
            Rolling Square Club
          </Typography>
        </Box>
      </Box>
     
      <Box className="main-container" height={"100vh"}>
      <p className="offer">Your Offer</p>
        <Box className="mini-box" height={"500px"}>
            <p>incharge Mini</p>
            <img src="./mini.gif"/>
            <p className="bottom" ></p>
            <div className="coupon"> 50% Coupon Code</div>
            <input type="text" placeholder="Enter Coupon Code"/>
            <div className="button btn">Save Contact</div>
        </Box>
      </Box>
    </Drawer>
  );
};

export default RollingDrawer;
