import reducer, { addPost, removePost } from './reducer';
import { expect } from 'chai';

describe( 'Profile reducer test', () => {
  const state = {
    postsData: [
      {
        id: 1,
        message: 'How are you?',
      },
      {
        id: 2,
        message: 'It is my first post',
      },
    ],
    userInfo: null,
    userStatus: 'no status',
  };

  it( 'Should add new post', () => {
    const action = addPost( { newPost: 'Hello world' } );
    const newState = reducer( state, action );

    expect( newState.postsData.length ).to.equal( state.postsData.length + 1 );
  } );

  it( 'New post should be correct', () => {
    const newPost = 'Hello world';
    const action = addPost( { newPost } );
    const newState = reducer( state, action );

    expect( newState.postsData[newState.postsData.length - 1].message ).to.equal( newPost );
  } );

  it( 'Should remove post', () => {
    const indexPost = state.postsData.length - 1;
    const action = removePost( indexPost );
    const newState = reducer( state, action );

    expect( newState.postsData.length ).to.equal( state.postsData.length - 1 );
  } );

  it( 'Shouldn\'t remove post with non-existing index', () => {
    const indexPost = state.postsData.length;
    const action = removePost( indexPost );
    const newState = reducer( state, action );

    expect( newState.postsData.length ).to.equal( state.postsData.length );
  } );
} );
