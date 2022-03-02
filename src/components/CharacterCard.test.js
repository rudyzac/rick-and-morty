import { shallow, mount } from 'enzyme';
import CharacterCard from './CharacterCard';

const characterFixture = {
  status: "test-status",
  image: "test-image",
  name: "test-name",
  species: "test-species",
  gender: "test-gender",
  origin: {
    name: "test-origin-name",
    type: "test-origin-type",
    dimension: "test-origin-dimension",
    numberOfResidents: "test-origin-number-of-residents"
  },
  location: {
    name: "test-location-name",
    type: "test-location-type",
    dimension: "test-location-dimension",
    numberOfResidents: "test-location-number-of-residents"
  }
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
