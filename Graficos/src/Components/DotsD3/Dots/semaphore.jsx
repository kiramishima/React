import d3 from 'd3'

class Semaphore {
    constructor (config) {
      this.set(config)
    }
    set (config) {
      Object.assign(this, config)
    }
    init () {
      this._svg = d3.select(this.target)
    }
}

export default Semaphore
