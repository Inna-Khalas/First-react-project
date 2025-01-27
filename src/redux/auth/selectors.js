const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

const selectUser = (state) => state.auth.user;

const selectRefresh = (state) => state.auth.isRefreshing;
