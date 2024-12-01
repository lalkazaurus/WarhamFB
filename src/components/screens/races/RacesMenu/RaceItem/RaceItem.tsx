import React, { useState } from 'react'
import { Race } from '../../../../../types/Race'
import styles from './RaceItem.module.css'

interface RaceItemProps {
  race: Race; 
}

export default function RaceItem({ race }: RaceItemProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = (e) => {
    const element = e.currentTarget;

    if (!isFullscreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) { 
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) { 
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { 
        element.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { 
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { 
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { 
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div className={styles.raceItem} onClick={toggleFullscreen}>
      <img src={race.image} alt={race.title} />
      <h1>{race.title}</h1>
      <p>{race.text}</p>
    </div>
  );
}