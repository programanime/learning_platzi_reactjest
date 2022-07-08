export const getData = (api) => {
    return fetch(api).then(response => {
                return response.json()
            }).catch(error=>error);
            
            
}
