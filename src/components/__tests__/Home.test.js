import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/configStore';
import Home from '../pages/Home';

describe('Home page test', () => {
  it('render test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
