import React, { useState } from 'react';
import { Button, Modal, Game } from '@/components/';

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

			<Game></Game>
		</div>
	);
}

export default App;
