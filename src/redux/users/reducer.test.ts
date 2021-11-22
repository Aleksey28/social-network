import reducer, { actions, follow, InitialState } from './reducer';
import usersAPI from '../../api/usersAPI';
import { ApiResponse, ResultCode } from '../../api/api';
import { FilterFriend } from '../../utils/enums';

jest.mock('../../api/usersAPI');

let state: InitialState;
const mockDispatch                     = jest.fn();
const mockGetState                     = jest.fn();
const mockUserAPI                      = usersAPI as jest.Mocked<typeof usersAPI>;
const successResponseData: ApiResponse = { data: {}, messages: [], resultCode: ResultCode.Success };

describe('Users reducer tests', () => {
  beforeEach(() => {
    state = {
      users:                 [
        {
          id:       '1',
          followed: false,
          name:     'User 1',
          photos:   {
            large: '',
            small: '',
          },
          status:   'Users 1 status'
        },
        {
          id:       '2',
          followed: false,
          name:     'User 2',
          photos:   {
            large: '',
            small: '',
          },
          status:   'Users 2 status'
        },
        {
          id:       '3',
          followed: true,
          name:     'User 3',
          photos:   {
            large: '',
            small: '',
          },
          status:   'Users 3 status'
        },
        {
          id:       '4',
          followed: true,
          name:     'User 4',
          photos:   {
            large: '',
            small: '',
          },
          status:   'Users 4 status'
        },
      ],
      usersCount:            3,
      pageSize:              5,
      currentPage:           0,
      isFetching:            false,
      isTogglingFollowUsers: [],
      filters:               {
        term:   '',
        friend: FilterFriend.AllUsers,
      },
    };
    mockDispatch.mockClear();
    mockGetState.mockClear();
    mockUserAPI.follow.mockClear();
  });

  test('Follow success', () => {
    state = reducer(state, actions.setFollow('1'));

    expect(state.users[0].followed).toBeTruthy();
    expect(state.users[1].followed).toBeFalsy();
  });

  test('Unfollow success', () => {
    state = reducer(state, actions.setUnfollow('3'));

    expect(state.users[2].followed).toBeFalsy();
    expect(state.users[3].followed).toBeTruthy();
  });

  test('Succeed follow thunk', async () => {
    mockUserAPI.follow.mockResolvedValue(successResponseData);

    const thunk = follow('1');

    await thunk(mockDispatch, mockGetState, {});

    expect(mockDispatch).toBeCalledTimes(3);
    expect(mockDispatch).toHaveBeenNthCalledWith(1, actions.setIsTogglingFollow('1', true));
    expect(mockDispatch).toHaveBeenNthCalledWith(2, actions.setFollow('1'));
    expect(mockDispatch).toHaveBeenNthCalledWith(3, actions.setIsTogglingFollow('1', false));
  });

  test('Succeed unfollow thunk', async () => {
    mockUserAPI.follow.mockResolvedValue(successResponseData);

    const thunk = follow('3');

    await thunk(mockDispatch, mockGetState, {});

    expect(mockDispatch).toBeCalledTimes(3);
    expect(mockDispatch).toHaveBeenNthCalledWith(1, actions.setIsTogglingFollow('3', true));
    expect(mockDispatch).toHaveBeenNthCalledWith(2, actions.setFollow('3'));
    expect(mockDispatch).toHaveBeenNthCalledWith(3, actions.setIsTogglingFollow('3', false));
  });
});
