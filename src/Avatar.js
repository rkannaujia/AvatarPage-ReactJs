import React from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avtarlist.js';

const Avatar = (props) => {

    const avatarlistarray = [
        {
            id: 1,
            name: "Lucy",
            work: "Web developer"
        },
        {
            id: 2,
            name: "Yogesh Joglekar",
            work: "IT Associate"
        },
        {
            id: 3,
            name: "Samson",
            work: "School Leader"
        },
        {
            id: 4,
            name: "Monali Topare",
            work: "Socail worker"

        }
    ]

    const arrayAvatarCard = avatarlistarray.map((avatarcard, index) => {
        return <Avatarlist id={avatarlistarray[index].id}
            name={avatarlistarray[index].name}
            work={avatarlistarray[index].work} />
    })
    return (
        <div className="mainpage">
            <h1>Welcome to Avatar world</h1>
        
            {/* <Avatarlist id={avatarlistarray[0].id}
                name={avatarlistarray[0].name}
                work={avatarlistarray[0].work} />
            <Avatarlist id={avatarlistarray[1].id}
                name={avatarlistarray[1].name}
                work={avatarlistarray[1].work} />
            <Avatarlist id={avatarlistarray[2].id}
                name={avatarlistarray[2].name}
                work={avatarlistarray[2].work} />
            <Avatarlist id={avatarlistarray[3].id}
                name={avatarlistarray[3].name}
                work={avatarlistarray[3].work} /> */}

                {arrayAvatarCard}
            <button> Subcribe </button>

        </div>

    )
};

export default Avatar;