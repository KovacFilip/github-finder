import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getUserOrganizations } from "../api/api";
import { Organization } from "./Organization";
import { PaperWrapper } from "./PaperWrapper";

export const Organizations: React.FC = () => {
    const [orgs, setOrgs] = useState<Organization[] | undefined>(undefined);

    useEffect(() => {
        getUserOrganizations("Kiwi").then((res) => {
            const orgs: Organization[] = res.data.map((org: any) => {
                console.log(org);
                const newOrg: Organization = {
                    img_url: org.avatar_url,
                    description: org.description,
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

    return (
        <PaperWrapper title="Organizations">
            <Grid container>{orgsObjs}</Grid>
        </PaperWrapper>
    );
};
