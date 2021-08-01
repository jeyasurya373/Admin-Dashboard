import React from 'react';
import "./sidebar.css";
import { ViewList, SettingsBackupRestore, AddBox, Person, LocalMall, Assessment, Email, Feedback, ChatBubbleOutline } from '@material-ui/icons';

function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Dashboard</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistiteam active">
                            <ViewList classname="sidebaricon" />Home

                        </li>
                        <li className="sidebarlistiteam">
                            <SettingsBackupRestore classname="sidebaricon" />Components

                        </li>
                        <li className="sidebarlistiteam">
                            <AddBox classname="sidebaricon" />Utilities

                        </li>

                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Quick Menu</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistiteam ">
                            <Person />Users

                        </li>
                        <li className="sidebarlistiteam">
                            <LocalMall />Products

                        </li>
                        <li className="sidebarlistiteam">
                            <Assessment />Reports

                        </li>

                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Notification</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistiteam ">
                            <Email classname="sidebaricon" />Mail

                        </li>
                        <li className="sidebarlistiteam">
                            <Feedback classname="sidebaricon" />Feedback

                        </li>
                        <li className="sidebarlistiteam">
                            <ChatBubbleOutline classname="sidebaricon" />Massage

                        </li>

                    </ul>
                </div>
            </div>

        </div>
    )
}
export default sidebar