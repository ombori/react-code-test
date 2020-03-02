import React, { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader.component';
import ContactList from './components/ContactList/ContactList.component';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.component';
import { getContacts, IContact } from './services/Contacts/Contacts.service';

import './App.scss';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [contacts, setContacts] = useState<IContact[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const fetchPage = (page = currentPage) => {
        if (page < currentPage) { return; }
        setIsError(false);

        getContacts(page)
            .then((response) => {
                setContacts([...contacts, ...response.data]);
                setTotalPage(response.total_pages);
                setCurrentPage(response.page);
            })
            .catch((e) => {
                setIsError(true);
                setErrorMessage(e);
            })
            .finally(() => setIsLoading(false))
    };

    useEffect(() => {
        // timeout just for have chances to see animation and prevent from "blinking"
        setTimeout(() => fetchPage(), 1500);
    }, []);

    return (
        <div id="e30">
            {(isLoading && !isError) && <Loader />}
            {(!isLoading && !isError) && <ContactList
                contacts={contacts}
                page={currentPage}
                total_page={totalPage}
                onLoadMore={fetchPage}
            />}
            {isError && <ErrorMessage text={errorMessage} />}
        </div>
    );
}

export default App;
