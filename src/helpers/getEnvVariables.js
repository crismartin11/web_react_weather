
export const getEnvVariables = () => {
    // eslint-disable-next-line no-unused-expressions
    import.meta.env.MODE;

    return {
        ...import.meta.env
    };
};
