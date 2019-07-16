import React, { Component } from 'react';
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

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length: props.length,
            limit: props.limit,
        };
    }

    getPage = () => {
            const { func, currentPage } = this.props;
        let n = 1,
            allPage = Math.ceil(this.props.length / this.props.limit),
            output = [];

        while (n <= allPage) {
            output.push(`${n}`);
            n++;
        }

        return (
            <Ul>
                {output.map((item, index) => <Li className={currentPage === index + 1 && 'active'} onClick={func(index + 1)} key={index}>{item}</Li>)}
            </Ul>
        );
    };

    render() {
        return (
            <div className="pagination">
                {this.getPage()}
            </div>
        );
    }
}

export default Pagination;