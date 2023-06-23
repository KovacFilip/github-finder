import { getUserOrganizations } from "../api/api";
import { StoreDispatch } from "../store";
import { setOrganizations } from "../store/githubUserSlice";

export const fetchOrganizationsAndSetStore = async (
    dispatch: StoreDispatch,
    username: string
) => {
    try {
        const userOrgs = await getUserOrganizations(username);
        const organizations: Organization[] = [];
        const orgsData = userOrgs.data;

        for (let i = 0; i < orgsData.length; i++) {
            const currentOrg = orgsData[i];
            const org: Organization = {
                name: currentOrg.login,
                img_url: currentOrg.avatar_url,
                description: currentOrg.description,
            };
            organizations.push(org);
        }

        dispatch(setOrganizations(organizations));
    } catch (error) {
        throw error;
    }
};
