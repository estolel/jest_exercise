const { shallow } = require("enzyme")
const { default: App } = require("../component/App")

describe('Application test', () => {
    it("renders without App crashing", () => {
        const wrapper = shallow(<App></App>)
        expect(wrapper).not.toBe(null)
    })

    it("renders Active Account header", () => {
        const wrapper = shallow(<App></App>)
        const header = <h1 style ={{marginLeft: 10}}>Display Active Account Details</h1>
        expect(wrapper.contains(header)).toEqual(true)
    })
    
    it("renders Inactive Account header", () => {
        const wrapper = shallow(<App></App>)
        const header = <h1 style ={{marginLeft: 10}}>Display Inactive Account Details</h1>
        expect(wrapper.contains(header)).toEqual(true)
    })

    
})

