import { useEffect, useState } from "react";
import { getUserOrganizations } from "../api/api";
import { Organization } from "./Organization";
import { PaperWrapper } from "./PaperWrapper";

export const Organizations: React.FC = () => {
    const [orgs, setOrgs] = useState<Organization[] | undefined>(undefined);

    useEffect(() => {
        getUserOrganizations("Kiwi").then((res) => {
            const orgs: Organization[] = res.data.map((org: any) => {
                const newOrg: Organization = {
                    img_url: org.avatar_url,
                    url: org.url,
                    name: org.login,
                };

                return newOrg;
            });

            setOrgs(orgs);
        });
    }, []);

    const orgsObjs = orgs
        ? orgs.map((org, index) => (
              <Organization key={index} organization={org} />
          ))
        : "";

    return <PaperWrapper title="Organizations">{orgsObjs}</PaperWrapper>;
};
