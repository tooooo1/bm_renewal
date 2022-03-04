import { useState, useEffect } from 'react';
import * as Styled from './styled';
// import axios from 'axios';

type Props = {};

const Home = (props: Props) => {
    // const [data, setData] = useState({ items: [] });
    // useEffect(() => {
    // const fetchData = async () => {
    //     const result = await axios(
    //         'https://us-central1-react-baemin.cloudfunctions.net/merchantInfo'
    //     );
    //     setData(result.data);
    //     };
    //     fetchData();
    // }, []);

    const [choiceMenu, setChoiceMenu] = useState<string>('분식');
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const tabClickHandler = (index:number) => {
        setActiveIndex(index);
    };

    

    return (
        <Styled.Wrapper>
            <Styled.Title> { choiceMenu }</Styled.Title>
            <Styled.Menu> </Styled.Menu>








            {/* {data.items.map((item) => (
                <li key={item}>
            </li>
            ))} */}
        </Styled.Wrapper>
  );
}

export default Home;