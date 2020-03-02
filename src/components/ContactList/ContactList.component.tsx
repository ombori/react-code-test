import React, { useEffect, useRef, useState } from 'react';
import { IContact } from "../../services/Contacts/Contacts.service";
import { debounce, isClose, isScrollable } from '../../common/tools';
import Loader from "../Loader/Loader.component";

import './ContactList.component.scss';

const Contact = ({ avatar, first_name, last_name}: IContact) => {
    const fullName = `${first_name} ${last_name}`;

    return (
        <div className="contact">
            <img src={avatar} alt={fullName} />
            <span>{fullName}</span>
        </div>
    )
};

const RowLoader = () => (
    <div className="rowLoader">
        <Loader />
    </div>
);

interface IListProps {
    contacts: IContact[];
    page?: number;
    total_page?: number;
    onLoadMore?: (page: number) => void;
}

const ContactList =({ contacts, page = 0, total_page = 0, onLoadMore = () => {} }: IListProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isLoadNext, setIsLoadNext] = useState(false);
    const nextPage = debounce(() => onLoadMore(page + 1));
    const onScrollDrag = () => {
        if (!onLoadMore) { return; }

        const { scrollTop, scrollHeight, offsetHeight  } = scrollRef.current as HTMLDivElement;
        const isCloseToEnd = isClose(scrollHeight - offsetHeight, 5);

        if (page < total_page && isCloseToEnd(scrollTop) ) {
            setIsLoadNext(true);
            nextPage();
        }
    };

    useEffect(() => {
        if (!page || !total_page || !onLoadMore) { return ;}
        const shouldLoad = scrollRef.current && !isScrollable(scrollRef.current);

        if (shouldLoad && page < total_page) {
            setIsLoadNext(true);
            onLoadMore(page + 1);
        } else {
            setTimeout(() => setIsLoadNext(false), 1000);
        }
    }, [page, total_page, onLoadMore]);

    return (
        <div className='contactList' ref={scrollRef} onScroll={onScrollDrag}>
            {contacts.map((contact) => (<Contact key={contact.id} {...contact} />))}
            {isLoadNext && (<RowLoader />)}
            {page === total_page && (<footer className="end">There are no more records</footer>)}
        </div>
    )
};

export default ContactList;