import styled from 'styled-components';

const ListAdsItem = styled.li`
    margin-bottom: 20px;

    &:not(:last-child) {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
    }
`;

const AdsItem = styled.article`
    display: flex;
`;

const AdsImgBlock = styled.div`
    display: flex;
    align-items: flex-start;
    flex: 1 1 150px;
`;

const AdsContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    padding-left: 40px;
`;

const PaginationWrapper = styled.ul`
    display: flex;
    margin: 0 -10px;
    padding: 20px 0;
    border-top: 1px solid #ccc;
`;

const ListWrapper = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const PaginationItem = styled.li`
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

export {
  ListAdsItem,
  AdsItem,
  AdsImgBlock,
  AdsContent,
  PaginationWrapper,
  ListWrapper,
  PaginationItem,
};
