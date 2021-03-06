export const SET_GEOLOCATION = 'SET_GEOLOCATION'
export const setGeolocation = payload => ({
  type: SET_GEOLOCATION,
  payload
})

export const WATCH_GEOLOCATION = 'WATCH_GEOLOCATION'
export const watchGeolocation = () => dispatch => {
  return new Promise((resolve, error) => {
    dispatch({
      type: WATCH_GEOLOCATION,
      id: navigator.geolocation
        .watchPosition(
          position => {
            dispatch(setGeolocation({ ...position.coords, error: null }))
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            })
          },
          err => {
            dispatch(setGeolocation({ err }))
            error(err)
          }
        )
    })
  })
}

export const CLEAR_WATCH_GEOLOCATION = 'CLEAR_WATCH_GEOLOCATION'
export const clearWatchGeolocation = (id) => dispatch => {
  dispatch({ type: CLEAR_WATCH_GEOLOCATION })
  return navigator.geolocation.clearWatch(id)
}
