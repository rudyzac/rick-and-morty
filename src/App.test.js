import { mount, shallow } from 'enzyme'
import App from './App'
import CharacterCard from './pages/CharacterGrid'

describe('<App />', () => {
  it('renders without exploding', () => {
    const wrapper = mount(<App />)

    expect(wrapper.find(App).length).toBe(1)
  })
})
