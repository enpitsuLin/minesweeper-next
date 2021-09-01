import React, { useState } from 'react';
import { Button, Modal, Game } from '@/components/';
import { alert } from './components/Modal';
import Card from './components/Card';

function App() {
	const [visible, setVisible] = useState(false);
	return (
		<div>
			<Button
				onClick={() => {
					alert(
						'标题',
						<>
							<p>测试渲染自定义content</p>
							<p>
								<span style={{ color: 'red' }}>危险 危险 </span>好久不见
							</p>
						</>
					);
					// setVisible(true);
				}}
			>
				<span>切换</span>
			</Button>
			<Card title="title" style={{ width: 300 }}>
				<p>content</p>
			</Card>
			<Modal
				visible={visible}
				title="标题"
				appendToBody={true}
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
