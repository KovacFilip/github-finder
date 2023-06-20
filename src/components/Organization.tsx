interface orgProps {
    organization: Organization;
}

export const Organization: React.FC<orgProps> = ({ organization }) => {
    return <div>{organization.name}</div>;
};
