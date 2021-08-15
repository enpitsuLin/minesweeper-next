import React from 'react';

interface Props {
	name: string;
}

function HelloWorld(props: Props = { name: 'world' }) {
	const { name } = props;
	return <h1>Hello {name}</h1>;
}

export default HelloWorld;
