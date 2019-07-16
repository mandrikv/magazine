import React from 'react';
import styled from 'styled-components';

const WrapperContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    padding: 0 32px 100px;
    
`;

const Wrapper = ({ children }) => (
    <WrapperContent className="wrapper">
        <Content className="content">
            {children}
        </Content>
    </WrapperContent>
);

export default Wrapper;