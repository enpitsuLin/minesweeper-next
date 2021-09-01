import { useEffect } from 'react';
import { isFunction } from '../utils';

const useUnmount = (callback: any) => {
	useEffect(
		() => () => {
			if (isFunction(callback)) {
				callback();
			}
		},
		[]
	);
};

export default useUnmount;
