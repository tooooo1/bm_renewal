import { useState, useEffect } from 'react';
import * as Styled from './styled';
import { Items } from "../../model/interface";
import axios, { AxiosPromise } from 'axios';
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

type Props = {};

const Home = (props: Props) => {
    const [items, setItems] = useState<Items[]>([]);
    useEffect(() => {
        const fetchData = async () => {
        
        const axiosPromise = axios(
            'https://us-central1-react-baemin.cloudfunctions.net/merchantInfo'
        ) as AxiosPromise<{ items: Items[] }>;
        
        const { data } = await axiosPromise;
        
        setItems(data.items);
        console.log(data.items);
        };
        fetchData();
    }, []);

// axios 문서
// 제네릭.

    

    return (
        <Styled.Wrapper>
            {/* <Tabs>
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                        
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs> */}


            {
                items.map((item, i) => (
                <li key={i}>
                    {item.name}
                </li>
            ))
            }

            
        </Styled.Wrapper>
  );
}

export default Home;