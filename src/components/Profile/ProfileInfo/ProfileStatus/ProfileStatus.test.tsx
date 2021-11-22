import ProfileStatus from './ProfileStatus';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { actions } from '../../../../redux/profile/reducer';
import { Provider } from 'react-redux';
import store from '../../../../redux/redux-store';
import profileAPI from '../../../../api/profileAPI';

jest.mock('../../../../api/profileAPI');

const mockProfileApi = profileAPI as jest.Mocked<typeof profileAPI>;

describe('Profile status', () => {

  afterEach(cleanup);

  it('Should display <span> after creation with correct status', () => {
    const status = 'I\'m the best';

    store.dispatch(actions.setUserStatus(status));

    const { queryByText } = render(
      <Provider store={store}>
        <ProfileStatus isOwner={true}/>
      </Provider>
    );

    expect(queryByText(status, { selector: 'span' })).not.toBeNull();
  });

  it('Should display <input> after creation with status', () => {
    const status = 'I\'m the best';

    store.dispatch(actions.setUserStatus(status));

    const { queryByText } = render(
      <Provider store={store}>
        <ProfileStatus isOwner={true}/>
      </Provider>
    );
    expect(queryByText(status, { selector: 'input' })).toBeNull();
  });

  it('Should display <input> after creation with correct status in editMode', () => {
    const status = 'I\'m the best';

    store.dispatch(actions.setUserStatus(status));

    const { queryByText, queryByDisplayValue } = render(
      <Provider store={store}>
        <ProfileStatus isOwner={true}/>
      </Provider>
    );

    const element = queryByText(status, { selector: 'span' });

    expect(element).toBeDefined();

    if (element) {
      userEvent.click(element);
    }

    expect(queryByDisplayValue(status)).not.toBeNull();
  });

  it('Should call callback updateStatus', () => {
    const status = 'I\'m the best';

    store.dispatch(actions.setUserStatus(status));

    const { queryByText, container } = render(
      <Provider store={store}>
        <ProfileStatus isOwner={true}/>
      </Provider>
    );

    const element = queryByText(status, { selector: 'span' });

    expect(element).toBeDefined();

    if (element) {
      userEvent.click(element);
    }

    userEvent.click(container);

    expect(mockProfileApi.setStatus.mock.calls.length).toEqual(1);
  });
});
