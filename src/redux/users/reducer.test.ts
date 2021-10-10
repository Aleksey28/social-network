import reducer, { actions, InitialState } from './reducer';

let state: InitialState;

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
    };
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
});
