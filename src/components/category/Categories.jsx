import { xs } from '../../responsive';
import styled from "styled-components";
import { categories } from "../../data";
import CategoryItem from "./CategoryItem";
import { CircularProgress } from '@material-ui/core';

const Container = styled.div`
    background-color: #f5f5f5 !important;
    margin: 2rem 0 0.8rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 2.5rem !important;
    padding-bottom: 2.5rem !important;

    h2 {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        -webkit-box-align: center;
        align-items: center;
        text-align: center;
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 2.0rem !important;
    }
`;

const CatContainer = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${xs({
        padding: '0px',
        flexDirection: 'column',
    })};
`;

const Categories = () => {
    return (
        <Container>
            <h2 className="">Top Categories Of The Month</h2>
            {categories.length > 0 ? (
                <CatContainer>
                    {categories.map(item => (
                        <CategoryItem item={item} key={item.id}/>
                    ))}
                </CatContainer>
            ) : (
                <div style={{
                    width: "100%",
                    height: "20vh",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'transparent'
                }}>
                    <CircularProgress />
                </div>
            )}
        </Container>
    )
}

export default Categories;
