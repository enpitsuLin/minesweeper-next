import { useState, useEffect } from 'react';

/**
 * 定时器自定义hooks
 * @param timeout
 * @param callback
 * @returns
 */
export function useTimer(timeout = 1000, callback?: () => void) {
	const [timer, setTimer] = useState<number | null>();
	const [time, setTime] = useState(0);
	/** 开始计时器 */
	const startTimer = () => {
		setTimer(
			window.setInterval(() => {
				/** 调用回调函数 */
				callback && callback();
				setTime(val => val + 1);
			}, timeout)
		);
	};
	/** 清除计时器 */
	const clearTimer = () => {
		window.clearInterval(timer);
	};
	// like componentWillUnmount
	useEffect(() => {
		return () => clearTimer();
	}, []);
	return { timer, time, startTimer, clearTimer };
}
