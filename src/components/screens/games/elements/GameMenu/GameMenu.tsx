import React from 'react'
import { Game } from '../../../../../types/Game.ts'
import GameItem from './GameItem/GameItem.tsx'

interface GameMenuProps {
  data: Game[]; 
}

const GameMenu: React.FC<GameMenuProps> = ({ data }) => {
  if (!data.length) {
    return <p>There are some troubles on server</p>;
  }

  return (
    <div>
      {data.map((game) => (
        <GameItem key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameMenu;
