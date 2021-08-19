export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQDBx30yjYWdQKiKjP3_FqlxfJcWanhSIJ5qGhHW7LAUzr3WjULaqDW-OB-SxUt9Rofm2BK2hy5Uvu00y80vp7vdIuGgEU0aMpBfWHHbyKr_oYnYF4H1Tj-jnZvQyVAl9ilbPsoPprVSCmhonyUe7n5cek-d7v6m06ATxOysY4QAk57K',
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        default:
            return state
    }

}

export default reducer;