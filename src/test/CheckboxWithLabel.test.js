import { shallow } from "enzyme"
import CheckboxWithlabel from "../component/CheckboxWithLabel"


describe('Checkbox With Label test', () => {
    it('CheckboxWithLabel changes the text after click', () => {
        const wrapper = shallow(<CheckboxWithlabel labelOn = "On" labelOff = "Off"/>)
        
        // const componentByClassName = wrapper.find('.check-input').simulate('change')
        expect(wrapper.text()).toEqual("Off")
        wrapper.find('input').simulate('change')
        expect(wrapper.text()).toEqual("On")
    })
})