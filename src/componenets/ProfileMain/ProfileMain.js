"use client";

import React, { useState } from "react";
import "./ProfileMain.css";
import SettingsIcon from "@mui/icons-material/Settings";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import CloseIcon from "@mui/icons-material/Close"; 
import SettingDrawer from "../SettingDrawer/SettingDrawer";
import RollingDrawer from "../RollingDrawer/RollingDrawer"; 

const ProfileMain = () => {
  const [isSettingDrawerOpen, setIsSettingDrawerOpen] = useState(false);
  const [isRollingDrawerOpen, setIsRollingDrawerOpen] = useState(false);
  const [isEditSectionOpen, setIsEditSectionOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); 
//uyfyfjhgjhggit
  const handleEditClick = () => {
    setIsEditSectionOpen(!isEditSectionOpen);
    setIsEditing(!isEditing); 
  };

  return (
    <div className="Main">
      <div className="Main-Container">
        <div className="Profile-Main">
          <div className="top-profile">
            <div className="setting">
              <SettingsIcon
                className="setting-icon"
                onClick={() => setIsSettingDrawerOpen(true)}
                style={{ color: "rgb(124, 127, 129)" }}
              />
            </div>
            <div className="profile-img">
              <img src="/profile.jpeg" alt="Profile" />
            </div>
            <div className="edit">
              {isEditing ? (
                <CloseIcon
                  className="setting-icon"
                  onClick={handleEditClick}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <EditTwoToneIcon
                  className="setting-icon"
                  onClick={handleEditClick}
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
          </div>
          <div className="profile-name">ADEEL AHMAD</div>
          <div className="bio">CEO - Avicenna</div>
          <div className="border"></div>
          <div className="bio-dis">
            This is my bio, This is my bio, This is my bio, This is my bio, this is bio
          </div>
          <div className="button-con">
            <div className="button btn">Save Contact</div>
            <div className="button"></div>
            <div className="button"></div>
            <div className="button"></div>
            <div className="button"></div>
            <div className="button"></div>
          </div>
                <div className="empty-div"></div>
          {isEditSectionOpen && (
            <div className="edit-section">
              <div className="edit-field">
                <div className="button">+ Add More</div>
              </div>
              <div className="edit-theme">
                <div>Edit Theme</div>
              </div>
              <div className="theme-color">
                <div className="first-div color-1"></div>
                <div className="first-div color-2"></div>
                <div className="first-div color-3"></div>
                <div className="first-div color-4"></div>
                <div className="first-div color-5"></div>
                <div className="first-div color-6"></div>
              </div>
            </div>
          )}
        </div>
      </div>
        
      <div className="bottom-nav">
        <div className="open-rolling-drawer-btn">
          <img src="./profile.jpeg" onClick={() => setIsSettingDrawerOpen(true)} />
          <img src="./selogo.png" onClick={() => setIsRollingDrawerOpen(true)} />
        </div>
      </div>

      <SettingDrawer
        isDrawerOpen={isSettingDrawerOpen}
        setIsDrawerOpen={setIsSettingDrawerOpen}
      />
      <RollingDrawer
        isDrawerOpen={isRollingDrawerOpen}
        setIsDrawerOpen={setIsRollingDrawerOpen}
      />
    </div>
  );
};

export default ProfileMain;
