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