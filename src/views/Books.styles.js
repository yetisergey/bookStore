import styled from 'styled-components';



export const BooksWrap = styled.div`
    width: 100%;
`
export const Navbar = styled.div`
    width: 100%;
    height:50px;
    text-align:right;
    margin-bottom: 10px;
`

export const ListBooks = styled.div`
    display:flex;
    flex-wrap:wrap;
`

export const Book = styled.div`
    width: 450px;
    height: 400px;
    display: flex;
    flex-direction: row;
    border: 1px solid #e7e7e7;
    border-radius: 3px;
    margin:5px;
    div{
        height: 100%;
        flex: 1;
        padding:10px;
    }
`