export default ({data, children}) => {
    return data ? data.map((singleElement, index) => children(singleElement, index)) : null;
};
