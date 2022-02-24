import { shallow, mount } from 'enzyme';
import CharacterCard from './CharacterCard';

const characterFixture = {
  status: "test-status",
  image: "test-image",
  name: "test-name",
  species: "test-species",
  gender: "test-gender"
}

describe('<CharacterCard />', () => {
  it('renders without exploding', () => {
    const wrapper = mount(<CharacterCard character={characterFixture} />)

    expect(wrapper.find(CharacterCard).length).toBe(1)
  })

  describe('Inner structure', () => {
    let wrapper = {}
    beforeEach(() => {
      wrapper = shallow(<CharacterCard character={characterFixture} />)
    })

    it('shows the status indicator', () => expect(wrapper.find(`[data-test-id="status-indicator"]`).length).toBe(1))

    it('shows the avatar', () => expect(wrapper.find(`[data-test-id="avatar"]`).length).toBe(1))

    it('shows the name', () => expect(wrapper.find(`[data-test-id="name"]`).length).toBe(1))

    it('shows the species', () => expect(wrapper.find(`[data-test-id="species"]`).length).toBe(1))

    it('shows the gender', () => expect(wrapper.find(`[data-test-id="gender"]`).length).toBe(1))
  })
})
