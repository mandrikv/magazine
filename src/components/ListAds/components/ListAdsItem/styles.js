import styled from 'styled-components';

const ItemBlock = styled.li`
    margin-bottom: 80px;

    &:not(:last-child) {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
    }
`;

const Wrapper = styled.section`
    display: flex;
`;

const ImgBlock = styled.div`
    display: flex;
    align-items: flex-start;
    flex: 1 1 150px;
`;

const ContentBlock = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    padding-left: 40px;
`;

export {
  ItemBlock,
  Wrapper,
  ImgBlock,
  ContentBlock,
};
