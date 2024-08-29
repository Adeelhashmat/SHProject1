"use client";
import "./SettingDrawer.css";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SettingDrawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  return (
    <Drawer
      anchor="bottom"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
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
        <Typography
          variant="h6"
          component="div"
          fontWeight="600"
          fontSize={"25px"}
          style={{ flexGrow: 1, textAlign: "center" }}
        >
          Settings
        </Typography>
        <IconButton
          className="close-icon"
          onClick={() => setIsDrawerOpen(false)}
          style={{ position: "absolute", right: "16px" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box className="main_container" role="presentation">
        <Box
          display={"flex"}
         
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          flexGrow={1}
          marginTop={"10px"}
        >
          <Typography
            variant="h5"
            marginBottom={"20px"}
            marginRight={"330px"}
            fontSize={"20px"}
            fontWeight={"600"}
          >
            Profile
          </Typography>
          <Box className="profile-box" width={"390px"} height={"650px"}>
            <Box
              className="prf-img"
              display="flex"
              justifyContent={"center"}
              width={"390px"}
              alignItems={"center"}
            >
              <img src="./profile.jpeg" borderRadius={"100%"} />
            </Box>
            <Box className="name">
              <input type="text" name="name" placeholder="First Name" />
              <input type="text" name="name" placeholder="Last Name" />
            </Box>
            <Box className="job">
              <input type="text" name="text" placeholder="Job Position" />
              <input type="text" name="text" placeholder="Company" />
            </Box>
            <h4>Bio</h4>
            <Box className="bio-box">
              <textarea placeholder="Company" />
            </Box>
          </Box>
          <Typography className="password">Create Your Password</Typography>
          <Typography className="url">Your Short URL</Typography>
          <Box className="qr-code">
            <p>https://www.nomdius.com/muhammad</p>
            <img src="./QR.png" />
            <h5>Use the QR code to share your Sherr.it profile.</h5>
          </Box>
          <h1 className="redirect">Redirect</h1>
          <Box className="redirect-box">
            <Box className="redirect-top">
              <h2>Redirect to an External URL</h2>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </Box>
            <input
              className="link"
              type="text"
              placeholder="Place your link here"
            />
            <Box className="redirect-top">
              <h2>Redirect to Contact Card </h2>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </Box>
          </Box>
          <h1 className="redirect">Your Items</h1>
          <Box className="item-box qr-code" marginBottom={"30px"}>
            <p>Muhammad's TAU 2</p>
            <img src="./bag.png"/>
            <h2>Linked to your account 64 days ago</h2>
            <div className="button btn">Save Contact</div>
          </Box>
          <Box className="item-box qr-code" >
            <p>Muhammad's AirCard</p>
            <img src="./aircard.png"/>
            <h2>Linked to your account 64 days ago</h2>
            <div className="button btn">Save Contact</div>
          </Box>
          <Box className="logout-box">
              <button className="logout">LOGOUT</button>
              <button className="done-btn">DONE</button>
          </Box>
          <Typography className="account"> Delete Account</Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SettingDrawer;
