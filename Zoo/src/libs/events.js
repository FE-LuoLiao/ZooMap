export default {

    events: {},

    on(name, callback) {
        if (this.events[name]) {
            this.events[name].push(callback)
        } else {
            this.events[name] = [callback]
        }
    },

    dispatchEvent(name, data1, data2, data3, data4, data5, data6) {
        if (this.events[name] && this.events[name].length > 0) {
            this.events[name].forEach(callback => {
                if (callback instanceof Function) {
                    callback(data1, data2, data3, data4, data5, data6)
                }
            });
        }
    }
}