import { useSelector } from 'react-redux';

export default ({ children }) => {
    const data = useSelector((store) => store.data.get('data'));
    return data ? children(data) : null;
};
