/**
 * 游戏难度等级
 */
export interface GameLevel {
	size: [number, number];
	totalMines: number;
}
/**
 * 雷区区块类型
 */
export interface CellItem {
	row: number;
	col: number;
	isOpen: boolean;
	isMark: boolean;
	isMine: boolean;
	adjMine: number;
}
