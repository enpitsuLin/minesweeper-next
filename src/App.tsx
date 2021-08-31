import React, { useState } from 'react';
import { Button, Modal, GameBoard } from '@/components/';

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
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<GameBoard
					level={{ totalMines: 10, size: [10, 10] }}
					onGameEnd={type => {
						console.log(type);
					}}
				/>
			</div>
		</div>
	);
}

export default App;
