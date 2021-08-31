import React, { FunctionComponent, useState } from 'react';
import Button from '../Button';
import './style.scss';

interface GameLevel {
	size: [number, number];
	totalMines: number;
}

interface Props {
	onChangeLevel: (level: GameLevel) => void;
}

const easyLevel: GameLevel = { totalMines: 10, size: [10, 10] };

const midLevel: GameLevel = { totalMines: 40, size: [16, 16] };

const hardLevel: GameLevel = { totalMines: 99, size: [16, 30] };

const presetLevel: { [key: string]: GameLevel } = { easyLevel, midLevel, hardLevel };

const GameSetting: FunctionComponent<Props> = props => {
	const [level, setLevel] = useState<GameLevel>(easyLevel);

	const changePresetLevel = (level: 'easy' | 'mid' | 'hard') => {
		setLevel(presetLevel[`${level}Level`]);
	};
	return (
		<div className="game-setting">
			<div className="game-setting__content">
				<div className="levels">
					<Button onClick={changePresetLevel.bind(this, 'easy')}>简单</Button>
					<Button onClick={changePresetLevel.bind(this, 'mid')}>中级</Button>
					<Button onClick={changePresetLevel.bind(this, 'hard')}>高级</Button>
					<Button>自定义</Button>
				</div>
				<div className="size">
					<span>雷区尺寸：</span>
					<input
						type="number"
						value={level.size[0]}
						min="8"
						max="50"
						onChange={e => {
							setLevel((val: GameLevel) => ({ ...val, size: [Number(e.target.value), level.size[1]] }));
						}}
					/>
					×
					<input
						type="number"
						value={level.size[1]}
						min="8"
						max="50"
						onChange={e => {
							setLevel((val: GameLevel) => ({ ...val, size: [level.size[0], Number(e.target.value)] }));
						}}
					/>
				</div>
				<div className="mine">
					<span>地雷数量：</span>
					<input
						type="number"
						value={level.totalMines}
						min="1"
						max="99"
						onChange={e => {
							setLevel((val: GameLevel) => ({ size: level.size, totalMines: Number(e.target.value) }));
						}}
					/>
				</div>
			</div>
			<div className="game-setting__bottom">
				<Button
					onClick={() => {
						props.onChangeLevel(level);
					}}
				>
					确定
				</Button>
			</div>
		</div>
	);
};

export default GameSetting;
