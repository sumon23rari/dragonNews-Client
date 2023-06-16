import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Catagory = () => {
    const catagoryNews=useLoaderData();
    return (
        <div>
            <h3>this is Catagory page has new {catagoryNews.length}</h3>
            {
                catagoryNews.map(news=><NewsSummaryCard
                key={news._id}
                news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Catagory;