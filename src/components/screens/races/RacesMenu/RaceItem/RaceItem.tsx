import React from 'react'
import { useFullscreen } from '../../../../../hooks/useFullScreen.tsx'
import { Race } from '../../../../../types/Race'
import styles from './RaceItem.module.css'

interface RaceItemProps {
  race: Race; 
}

export default function RaceItem({ race }: RaceItemProps) {
  const { toggleFullscreen } = useFullscreen();

  const handleToggleFullscreen = (e: React.MouseEvent<HTMLDivElement>) => {
    toggleFullscreen(e.currentTarget as HTMLElement);
  };

  return (
    <div className={styles.raceItem} onClick={handleToggleFullscreen}>
      <img src={race.image} alt={race.title} />
      <h1>{race.title}</h1>
      <p>{race.text}</p>
    </div>
  );
}