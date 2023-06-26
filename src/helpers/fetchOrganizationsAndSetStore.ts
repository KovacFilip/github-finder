import { getOrganization, getUserOrganizations } from "../api/api";
import { StoreDispatch } from "../store";
import { setOrganizations } from "../store/githubUserSlice";

export const fetchOrganizationsAndSetStore = async (
    dispatch: StoreDispatch,
    username: string
) => {
    try {
        const userOrgs = await getUserOrganizations(username);
        console.log(userOrgs);
        const organizations: Organization[] = [];
        const orgsData = userOrgs.data;

        for (let i = 0; i < orgsData.length; i++) {
            const currentOrg = orgsData[i];

            const org: Organization = {
                name: currentOrg.login,
                img_url: currentOrg.avatar_url,
                description: currentOrg.description,
                githubUrl: undefined,
                websiteUrl: undefined,
            };

            if (org.name !== "") {
                const orgDetails = await getOrganization(org.name);
                const orgDetailsData = orgDetails.data;

                if (orgDetailsData.html_url) {
                    org.githubUrl = orgDetailsData.html_url;
                }

                if (orgDetailsData.blog) {
                    org.websiteUrl = orgDetailsData.blog;
                }
            }

            organizations.push(org);
        }

        dispatch(setOrganizations(organizations));
    } catch (error) {
        throw error;
    }
};
