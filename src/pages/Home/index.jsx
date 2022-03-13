import { useState, useEffect } from 'react'
import * as Styled from './styled';
import axios, { AxiosPromise } from 'axios';


const MenuList = () => {
    const [items, setItems] = useState([]);

    const tempCategory = items.map((cate) => cate.category_name);
    let category = [];

    tempCategory.forEach((element) => {
        if (!category.includes(element)) category.push(element)
    });

    useEffect(() => {
        const fetchData = async () => {
            const axiosPromise = axios(
                'https://us-central1-react-baemin.cloudfunctions.net/merchantInfo'
            );
            
            const { data } = await axiosPromise;
            
            setItems(data.items);
            console.log(data.items);
        };
        fetchData();
    }, []);

    return (
        <Styled.Wrapper>
            {category.map((v) => {
                return (
                    <>
                        <Styled.CategoryTitle>{v}</Styled.CategoryTitle>
                        <>
                            {
                                items.map((k) => {
                                    if (k.category_name === v) {
                                        return (
                                            <>
                                                <div>{k.name}</div>
                                                <div>{k.price}</div>
                                            </>
                                        )
                                    }
                                })
                            }
                        </>
                    </>
                )
            })}
        </Styled.Wrapper>
    )
}

export default MenuList;