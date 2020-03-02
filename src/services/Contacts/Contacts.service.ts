export interface IPaginatedResponse<T> {
    page: number;
    per_page: number
    total: number;
    total_pages: number;
    data: T[];
}

export interface IContact {
    id: number;
    name: string;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export const getContacts = (page = 0, per_page = 4) => new Promise<IPaginatedResponse<IContact>>((success, fail) => {
    const API_URL = 'https://reqres.in/api/users';

    fetch(`${API_URL}?per_page=${per_page}&page=${page}`)
        .then((response) => response.json())
        .then(success)
        .catch(fail);
});