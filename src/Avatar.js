import React from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avtarlist.js';

const Avatar = (props) => {
    return (
        <div>
            <h1>Welcome to Avatar world</h1>
            <Avatarlist id="1" name="Rahul Kannaujia" work ="Web developer" />
            <Avatarlist id="2" name="Yogesh Joglekar" work ="IT Associate" />
            <Avatarlist id="3" name="Rashmi Chainani" work ="School Leader" />
            <Avatarlist id="4" name="Monali Topare" work ="Socail worker" />
            <button> Subcribe </button>

        </div>

    )
};

export default Avatar;