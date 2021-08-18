import React, { useState } from 'react';
import Game from './components/Game';
import Modal from './components/Modal';

function App() {
	const [visible, setVisible] = useState(false);
	return (
		<div>
			<button
				onClick={() => {
					setVisible(!visible);
				}}
			>
				切换
			</button>
			<Modal
				visible={visible}
				title="标题"
				onOk={() => {
					setVisible(false);
				}}
				onCancel={() => {
					setVisible(false);
				}}
			>
				内容
			</Modal>
			<Game level={10} />
		</div>
	);
}

export default App;
