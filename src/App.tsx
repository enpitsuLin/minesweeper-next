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
			<GameBoard level={{ totalMines: 1, size: [10, 10] }} />
		</div>
	);
}

export default App;
