import React from 'react';
import DataLoader from 'components/loaders/DataLoader';
import DataProvider from 'components/providers/DataProvider';
import DataIterator from 'components/iterators/DataIterator';
import SingleElement from 'components/partials/SingleElement';
import styles from './styles/DataView.scss';

const DataView = () => {
    return (
        <DataLoader>
            <DataProvider>
                {(data) => (
                    <div className={styles.wrapper}>
                        <DataIterator data={data}>
                            {(singleElement, index) => (
                                <SingleElement singleElement={singleElement} key={index}/>
                            )}
                        </DataIterator>
                    </div>
                )}
            </DataProvider>
        </DataLoader>
    );
};

export default DataView;
