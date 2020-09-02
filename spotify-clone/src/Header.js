import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from "@material-ui/core"
import { useDataLayerValue } from './DataLayer';

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header_left">
            <SearchIcon />
                <input placeholder="Search for Artist, song" type="text"></input>
            </div>
            <div className="header_ßright">
                <Avatar src= {user?.images[0]?.url} alt="" />
                <h4>{user?.display_name}</h4>

            </div>
        </div>
    )
}

export default Header;
