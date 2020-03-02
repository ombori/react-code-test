import React from 'react';

import './ErrorMessage.component.scss';

interface IErrorMessageProp {
    title?: string;
    text: string;
}

const ErrorMessage = ({ title = 'Error', text }: IErrorMessageProp) => (
    <div className="ErrorMessage">
        <h1>{title}</h1>
        <div className="content">{text}</div>
    </div>
);

export default ErrorMessage;