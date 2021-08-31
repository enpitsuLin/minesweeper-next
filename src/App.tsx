import React, { useState } from 'react';
import { Button, Modal, GameBoard, GameSetting } from '@/components/';
import styled from 'styled-components';

const Game = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	.title {
		margin-top: 20px;
		margin-bottom: 30px;
		text-align: center;
		font-size: 24px;
		padding: 5px;
	}
`;

function App() {
	const [visible, setVisible] = useState(false);
	return (
		<div>
			<Button onClick={setVisible.bind(this, true)}>
				<span>切换</span>
			</Button>
			<Modal
				visible={visible}
				title="标题"
				closeOnModal={false}
				onOk={() => {
					setVisible(false);
				}}
				onCancel={() => {
					setVisible(false);
				}}
			>
				内容
			</Modal>

			<Game>
				<div className="title">扫雷</div>
				<GameSetting
					onChangeLevel={level => {
						console.log(level);
					}}
				/>
				<GameBoard
					level={{ totalMines: 10, size: [10, 10] }}
					onGameEnd={type => {
						console.log(type);
					}}
				/>
			</Game>
		</div>
	);
}

export default App;
