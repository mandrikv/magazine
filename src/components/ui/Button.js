import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    display: inline-flex;
    justify-content: center;
    align-self: flex-start;
`;

const Button = ({children}) => (
    <Btn>
        {children}
    </Btn>
);

export default Button;