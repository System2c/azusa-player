import React, { forwardRef, useState, useEffect, memo } from "react";
import { Lyric } from './Lyric';
import { LyricMobile } from './LyricMobile';
import Box from "@mui/material/Box";
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Slide from '@mui/material/Slide';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const theme = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  };

export const LyricOverlay = memo(function ({ showLyric, currentTime, audioName, audioId, audioCover, artist, setOpenStateEmitter, isMobile = false}) {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        setOpenStateEmitter(!open)
        setOpen(!open)
    }, [showLyric])

    const handleClose = () => {
        setOpen(false);
        setOpenStateEmitter(false);
    };

    return (
        <div >
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                hideBackdrop
                TransitionComponent={Transition}
                PaperProps={{
                    style: {
                        backgroundImage: 'url(' + audioCover + ')',
                        backgroundSize: 'cover',
                        boxShadow: 'none',
                    },
                }}
            >
                <div id="blur-glass" style={{display:'flex',flexDirection: 'column',overflow: 'hidden'}}>
                    <IconButton
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                        style={{borderRadius:'0'}}
                    >
                        <KeyboardArrowDownIcon />
                    </IconButton>
                    { isMobile? 
                        <LyricMobile 
                            currentTime={currentTime} 
                            audioName={audioName} 
                            audioId={audioId} 
                            audioCover={audioCover}
                            artist={artist} /> 
                        : <Lyric currentTime={currentTime} audioName={audioName} audioId={audioId} audioCover={audioCover} artist={artist}/>
                    }
                    
                </div>
            </Dialog>
        </div>
    );
})