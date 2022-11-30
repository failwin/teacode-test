import {
  createSlice,
  createAsyncThunk,
  createSelector,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '../store';
import { dataProvider, Contact } from '../services/dataProvider';

type SliceState = {
  list: Contact[];
  query: string;
  loading?: boolean;
  error?: string;
};

export const fetchContacts = createAsyncThunk<
  Contact[],
  void,
  { state: RootState; dispatch: AppDispatch }
>('posts/fetchPosts', async () => {
  return await dataProvider.getContacts();
});

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: [],
    query: '',
  } as SliceState,
  reducers: {
    applySearch: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { applySearch } = contactsSlice.actions;

export const selectSearchQuery = (state: RootState) => state.contacts.query;

export const selectAll = createSelector(
  (state: RootState) => state.contacts.list,
  selectSearchQuery,
  (list, query) => {
    if (query) {
      return list.filter((item) => dataProvider.filterByQuery(item, query));
    }
    return list;
  }
);

export default contactsSlice;
