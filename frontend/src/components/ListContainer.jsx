import React from 'react';
import List from './List'

function ListContainer(props) {

    const renderLists = () => {
        if(props.lists){
            return props.lists.map(list => <List key={list.id} listData={list.list_data} />)
        }
    }

    return(
        <div>
            <h4 className="text-center">Your TopFive Lists</h4>
            {renderLists()}
        </div>
    )

}

export default ListContainer