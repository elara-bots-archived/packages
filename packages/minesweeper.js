module.exports = class Minesweeper {
    /**
     * The constructor of the Minesweeper class.
     * @constructor
     * @param {MinesweeperOpts} opts - The options of the Minesweeper class.
     */
    constructor(opts) {
        this.rows = opts?.rows ?? 5;
        this.columns = opts?.columns ?? 5;
        this.mines = opts?.mines ?? 5;
        this.matrix = [];
        this.types = {
            mine: opts?.emote ?? "bomb",
            numbers: [
                'zero', 'one', 'two', 
                'three', 'four', 'five', 
                'six', 'seven', 'eight'
            ]
        };
    }

    /**
     * Fills the matrix with "zero" emojis.
     */
    generateEmptyMatrix() {
        for (let i = 0; i < this.rows; i++) {
            const arr = new Array(this.columns).fill(this.types.numbers[0]);
            this.matrix.push(arr);
        }
    }
    /**
     * Plants mines in the matrix randomly.
     */
    plantMines() {
        for (let i = 0; i < this.mines; i++) {
            const x = Math.floor(Math.random() * this.rows);
            const y = Math.floor(Math.random() * this.columns);
            if (this.matrix[x][y] === this.types.mine) i--;
            else this.matrix[x][y] = this.types.mine;
        }
    }
    /**
     * Gets the number of mines in a particular (x, y) coordinate
     * of the matrix.
     * @param {number} x - The x coordinate (row).
     * @param {number} y - The y coordinate (column).
     * @returns {string}
     */
    getNumberOfMines(x, y) {
        if (this.matrix[x][y] === this.types.mine) return this.types.mine;
        let counter = 0;
        const hasLeft = y > 0;
        const hasRight = y < (this.columns - 1);
        const hasTop = x > 0;
        const hasBottom = x < (this.rows - 1);
        counter += +(hasTop && hasLeft && this.matrix[x - 1][y - 1] === this.types.mine);
        counter += +(hasTop && this.matrix[x - 1][y] === this.types.mine);
        counter += +(hasTop && hasRight && this.matrix[x - 1][y + 1] === this.types.mine);
        counter += +(hasLeft && this.matrix[x][y - 1] === this.types.mine);
        counter += +(hasRight && this.matrix[x][y + 1] === this.types.mine);
        counter += +(hasBottom && hasLeft && this.matrix[x + 1][y - 1] === this.types.mine);
        counter += +(hasBottom && this.matrix[x + 1][y] === this.types.mine);
        counter += +(hasBottom && hasRight && this.matrix[x + 1][y + 1] === this.types.mine);
        return this.types.numbers[counter];
    }

    /**
     * Generates a minesweeper mine field and returns it.
     * @returns {(string | string[][] | null)}
     */
    start() {
        if (this.rows * this.columns <= this.mines * 2) return null;
        for (const n of [ "generateEmptyMatrix", "plantMines" ]) this[n]();
        this.matrix = this.matrix.map((row, x) => row.map((col, y) => this.getNumberOfMines(x, y)));
        return this.matrix;
    }
};