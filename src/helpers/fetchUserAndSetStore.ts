import { getUser } from "../api/api";
import { StoreDispatch } from "../store";
import { setUser } from "../store/githubUserSlice";

export const fetchUserAndSetStore = async (
    dispatch: StoreDispatch,
    username: string
) => {
    try {
        const userRes = await getUser(username);
        const userData = userRes.data;

        const user: User = {
            username: userData.login,
            avatarUrl: userData.avatar_url,
            bio: userData.bio,
            email: userData.email,
            created: userData.created_at,
            followers: userData.followers,
            following: userData.following,
            githubUrl: userData.html_url,
        };

        dispatch(setUser(user));
    } catch (err) {
        console.log(err);
        throw err;
    }
};
