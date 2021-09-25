import reducer, { actions } from './reducer';

describe('Profile reducer test', () => {
  const state = {
    postsData:  [
      {
        id:      1,
        message: 'How are you?',
      },
      {
        id:      2,
        message: 'It is my first post',
      },
    ],
    userInfo:   null,
    userStatus: 'no status',
  };

  it('Should add new post', () => {
    const action   = actions.addPost('Hello world');
    const newState = reducer(state, action);

    expect(newState.postsData.length).toEqual(state.postsData.length + 1);
  });

  it('New post should be correct', () => {
    const newPost  = 'Hello world';
    const action   = actions.addPost(newPost);
    const newState = reducer(state, action);

    expect(newState.postsData[newState.postsData.length - 1].message).toEqual(newPost);
  });

  it('Should remove post', () => {
    const indexPost = state.postsData.length - 1;
    const action    = actions.removePost(indexPost);
    const newState  = reducer(state, action);

    expect(newState.postsData.length).toEqual(state.postsData.length - 1);
  });

  it('Shouldn\'t remove post with non-existing index', () => {
    const indexPost = state.postsData.length;
    const action    = actions.removePost(indexPost);
    const newState  = reducer(state, action);

    expect(newState.postsData.length).toEqual(state.postsData.length);
  });
});
