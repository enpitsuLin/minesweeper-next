import { GameLevel } from '@/types/game';
import React, { FunctionComponent, useState } from 'react';
import { GameBoard, GameSetting } from '..';
import './style.scss';

type GameStage = 'setting' | 'game';

const Game: FunctionComponent = () => {
	const [stage, setStage] = useState<GameStage>('setting');
	const [level, setLevel] = useState<GameLevel>({ totalMines: 10, size: [10, 10] });
	return (
		<div className="game">
			<div className="title">扫雷</div>
			{stage == 'setting' ? (
				<GameSetting
					onChangeLevel={level => {
						setLevel(level);
					}}
					onLevelConfirm={() => {
						setStage('game');
					}}
				/>
			) : (
				<GameBoard
					level={level}
					onGameEnd={type => {
						console.log(type);
					}}
					onBack={() => {
						setStage('setting');
					}}
				/>
			)}
		</div>
	);
};

export default Game;
