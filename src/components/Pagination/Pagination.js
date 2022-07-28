import React from "react";
import "./PaginationSyles.css"

const Pagination = (props) => {
    //totalPages
    //currentPage
    //nextPage

    const listOfPageLinks = []

    for (let i = 1; i < 41; i++) {


        // console.log(props.currentPage);
        let active = props.currentPage === i;

        listOfPageLinks.push(
            <div
                className={active ? 'active' : 'not_active'}
                key={i}
                onClick={() => props.nextPage(i)}
            >
                {i}
            </div>
        )
    }


    return (
        <div>
            <hr/>
            <div className={'divPagination'}>
                <div className={'inRow'}>
                    {
                        listOfPageLinks
                    }
                </div>
            </div>
        </div>
    )

}


export default Pagination;