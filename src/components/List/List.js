import React, { Component } from 'react';
import Item from '../Item/Item';
import Pagination from '../Pagination/Pagination';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.data,
            array: props.data,
            limitItems: 5,
            currentPage: 1,
            startItem: 0,
            endItem: 5,
        };
        this.onClick = this.onClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {currentPage} = this.state;
        const {currentPage: currentPageNext} = nextState;
        return currentPage !== currentPageNext;
    }

    getItems = () => {
        const { startItem, endItem, array = [] }  = this.state;
        return array.slice(startItem, endItem).map((item, index) => (
                <Item
                    key={index}
                    data={item}
                />
            )
        );
    };

    onClick = (page) => (event) => {
        this.setState(prevState => {
            const {limitItems} = prevState;

            return {
                currentPage: page,
                startItem: page * limitItems - limitItems,
                endItem: page * limitItems,
            }
        });
    };

    render() {
        const {items, limitItems, currentPage} = this.state;
        return(
            <div>
                <div className="items">
                    {this.getItems()}
                </div>
                <Pagination
                    length={items.length}
                    limit={limitItems}
                    func={this.onClick}
                    currentPage={currentPage}
                />
            </div>
        )
    }
}

export default List;