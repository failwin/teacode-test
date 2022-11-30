import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '../store';
import { dataProvider, Contact, Id } from '../services/dataProvider';

export type { Contact } from '../services/dataProvider';

export type SliceState = {
  list: Contact[];
  highlighted: Id[];
  query: string;
  loading?: boolean;
  error?: string;
};

export const fetchContacts = createAsyncThunk<
  Contact[],
  string,
  { state: RootState; dispatch: AppDispatch }
>('fetchContacts', async (searchQuery: string) => {
  return await dataProvider.getContacts(searchQuery);
});

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: [],
    highlighted: [],
    query: '',
  } as SliceState,
  reducers: {
    applySearch: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    toggleHighlight: (state, action: PayloadAction<Id>) => {
      const { highlighted } = state;
      const index = highlighted.indexOf(action.payload);
      if (index === -1) {
        // add
        state.highlighted = [...highlighted, action.payload];
      } else {
        // remove
        state.highlighted = [...highlighted];
        state.highlighted.splice(index, 1);
      }
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
        state.list = [];
        state.error = action.error.message;
      });
  },
});

export const { applySearch, toggleHighlight } = contactsSlice.actions;

export const selectAll = (state: RootState) => state.contacts.list;

export const selectLoading = (state: RootState) => state.contacts.loading;

export const selectSearchQuery = (state: RootState) => state.contacts.query;

export const selectIsHighlighted = (id: Id) => (state: RootState) => {
  return state.contacts.highlighted.indexOf(id) !== -1;
};

export default contactsSlice;
