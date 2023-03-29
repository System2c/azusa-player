import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { skins } from '../../styles/skin';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { setLocalStorage, readLocalStorage, FAV_FAV_LIST_KEY } from '../../objects/Storage';


const buttonStyle = css`
    cursor: pointer;
    &:hover {
        color: ${skins().reactJKPlayerTheme.sliderColor};
    };
    background-color: transparent;
    color: ${skins().desktopTheme === "light"? "7d7d7d" : "white"};
`

export default ({ song }) => {

    const [liked, setLiked] = useState(false);
    
    useEffect(() => {
        readLocalStorage(FAV_FAV_LIST_KEY).then(val => {
            setLiked(val.songList.filter(val => val.id === song.id).length > 0);
        });
    }, [song.id])

    const handleClick = async () => {
        let favFavList = await readLocalStorage(FAV_FAV_LIST_KEY);
        if (liked) {
            favFavList.songList = favFavList.songList.filter(val => val.id !== song.id);
        } else {
            favFavList.songList.push(song);
        }
        setLocalStorage(FAV_FAV_LIST_KEY, favFavList);
        setLiked(!liked);
    }

    return (
        <React.Fragment >
            <span
                className="group audio-download"
                css={buttonStyle}
                onClick={() => handleClick(!liked)}
                title={liked? "不喜欢了" : "特别喜欢！"}
            >
                {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </span>
        </React.Fragment>
    )
}