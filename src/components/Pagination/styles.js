import styled from 'styled-components';

const Ul = styled.ul`
    display: flex;
    margin: 0 -10px;
    padding: 20px 0;
    border-top: 1px solid #ccc;
`;

const Li = styled.li`
    display: flex;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 10px;
    
    &.active {
        cursor: default;
        color: #ccc;
    }
`;

export { Ul, Li };
