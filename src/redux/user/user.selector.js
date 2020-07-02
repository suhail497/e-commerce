import { createSelector } from "reselect"

// input selcetor
const selectUser = state => state.user

export const selectCurentUser = createSelector(
    [selectUser],
    user => user.currentUser
)