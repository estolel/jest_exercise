import { Typography } from "@material-ui/core"
import { mount } from "enzyme"
import Account from "../component/Account"

const user = {
    name: "Suletta Mercury",
    email: "lp041@asticassia.edu.com",
    username: "AerialNumber1"
}
describe("Account Tests", () => {
    it('should contain Name', () => {
        const wrapper = mount(<Account user = {user}/>)
        const value = wrapper.find(".name").find('p').text()

        expect(value).toEqual("Name: Suletta Mercury")
        
    })


    it('should contain E-mail address', () => {
        const wrapper = mount(<Account user={user}/>)

        const typoList = wrapper.find(Typography)
        const nameTypo = typoList.at(0)
        const emailTypo = typoList.at(1)
        expect(emailTypo.text()).toEqual("E-mail Address: lp041@asticassia.edu.com")
        expect(typoList.length).toBe(2)
    })
})