import React, { Component } from 'react';
import { Ul, Li } from './styles'

class Index extends Component {
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

export default Index;