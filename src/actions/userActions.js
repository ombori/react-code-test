export function getUsers(currentPage) {
  return dispatch => {
    return fetch(`https://reqres.in/api/users?page=${currentPage}`)
      .then(res => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then(response =>
        dispatch({
          type: "SET_USER",
          payload: {
            users: response && response.data ? response.data : [],
            totalPages: response.total_pages,
            currentPage: response.page
          }
        })
      )
      .catch(err => console.log("The api returned the following eror", err));
  };
}
