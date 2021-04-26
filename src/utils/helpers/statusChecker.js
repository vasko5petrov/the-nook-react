export const isLoaded = (status) => status === 'fulfilled';
export const isLoading = (status) => status === 'pending';
export const isRejected = (status) => status === 'rejected';
export const AllLoaded = (indexes, statuses) => statuses ? indexes.every((index) => isLoaded(statuses.get(index))) : false;
export const shouldLoad = (status) => status !== 'fulfilled' && status !== 'pending';