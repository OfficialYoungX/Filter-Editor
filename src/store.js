
/**
 * 提供全局的数据store容器
 * 修改内部数据，是通过触发store内部的action
 * 进而由内部函数修改
 * 外部的数据共享者不允许直接修改store中的数据
 */
let store = {
    state: {
        filters: {
            grayscale: 0,
            sepia: 0,
            saturate: 100,
            hueRotate: 0,
            invert: 0,
            opacity: 100,
            brightness: 100,
            contrast: 100,
            blur: 0
        }
    },
    updateFilterVal(filterName, newVal) {
        if(!this.state.filters[filterName] === undefined) throw Error('Wrong filter name!');
        this.state.filters[filterName] = newVal;
    }
}

export { store };