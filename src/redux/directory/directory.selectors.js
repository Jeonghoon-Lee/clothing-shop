import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectroySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
