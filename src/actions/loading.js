export const DATA_LOADING = 'DATA_LOADING'

export const setDataLoaded = (bool) => {
  return {
    type: DATA_LOADING,
    loading: bool
  }
}
