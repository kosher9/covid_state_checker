import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/configStore';
import RegionPage from '../pages/Home';

describe('Region page test', () => {
  it('render test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <RegionPage />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
