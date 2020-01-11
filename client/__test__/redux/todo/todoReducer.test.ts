import todoReducer from '@redux/todo/todoReducer';
import { ETodoType } from '@redux/todo/todoType';

describe('todoReducer', () => {
  const mockTodoDatas = [
    { id: 0, content: 'hi' },
    { id: 1, content: 'bye' },
  ];

  const initialState = {
    todoDatas: [],
    message: null,
    error: null,
  };

  it('init reducer', () => {
    expect(
      todoReducer(initialState, {} as any)
    ).toEqual(initialState);
  })

  it('loads todoDatas success', () => {
    expect(
      todoReducer(initialState, {
        type: ETodoType.TODO_LOAD_SUCCESS,
        payload: { todoDatas: mockTodoDatas },
      }),
    ).toEqual({ todoDatas: mockTodoDatas, message: null, error: null });
  });

  it('inserts todoData success', () => {
    expect(
      todoReducer(initialState, {
        type: ETodoType.TODO_REGISTER_SUCCESS,
        payload: { todoData: { id: 100, content: 'test' } },
      }),
    ).toEqual({ todoDatas: [{ id: 100, content: 'test' }], message: null, error: null });
  });

  it('removes todoData success', () => {
    expect(
      todoReducer(
        { todoDatas: mockTodoDatas, message: null, error: null },
        {
          type: ETodoType.TODO_ACHIEVE_SUCCESS,
          payload: { id: 0 },
        },
      ),
    ).toEqual({ todoDatas: [{ id: 1, content: 'bye' }], message: null, error: null });
  });
});
