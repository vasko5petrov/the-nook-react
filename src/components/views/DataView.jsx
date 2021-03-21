import React from 'react';
import DataLoader from 'components/loaders/DataLoader';
import DataProvider from 'components/providers/DataProvider';
import DataIterator from 'components/iterators/DataIterator';
import SingleElement from 'components/partials/SingleElement';

const DataView = () => {
    return (
        <DataLoader>
            <DataProvider>
                {(data) => (
                    <React.Fragment>
                        <DataIterator data={data}>
                            {(singleElement, index) => (
                                <SingleElement singleElement={singleElement} key={index}/>
                            )}
                        </DataIterator>
                    </React.Fragment>
                )}
            </DataProvider>
        </DataLoader>
    );
};

export default DataView;
