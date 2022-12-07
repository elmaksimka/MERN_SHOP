import { useState, useEffect } from "react";

function TrendingNow() {
  // const [trendingItems, setTrendingItems] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:5000/trendingnow')
  //     .then((res) => res.json())
  //     .then((jsonRes) => setTrendingItems(jsonRes))
  //     .catch((err) => console.log(err));
  // }, [])

  // const displayTrendingItems = trendingItems.map((trendingNow) => {
  //     return (
  //       <TrendingNow key={trendingNow._id} id={trendingNow._id} name={trendingNow.name} price={trendingNow.price} url={trendingNow.url} />
  //     );
  //   });

  return (
    <>
    <div>Trending now content</div>
      {/* <div className="trending-now">
        <div className="trending-now__content">
          <h1 className="trending-now__title">
            Trending now
          </h1>
          <div className="trending-now__products">
            {displayTrendingItems}
          </div>
        </div>
      </div> */}
    </>
  )
}

export default TrendingNow