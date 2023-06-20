export const dateDisplay = (datestr: string) => {
    const date = new Date(datestr);

    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};
