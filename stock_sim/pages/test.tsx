import { useEffect, useState } from 'react';
// import { GetStaticProps } from 'next';
import LogoutButton from '../components/Logout';
import axios from "axios"

// type Props = {
//   stocks: any
// }

// {stocks} : Props

//The only reason I didn't do it through the staticProps was because I could not get seInterval to work with it.
const test = () => {
  // let stockResults = JSON.parse(stocks);
  const [currentStocks, setCurrentStocks] = useState<any>()

  useEffect(() => {
    const fetchStocks = async () => {
      const res = await axios.get("http://localhost:3001/");
      setCurrentStocks(res.data.stocks)
      
    }
   
    
    const interval = setInterval(fetchStocks, 2000)

    return () => clearInterval(interval)
  }, [])
  

  if (!currentStocks) {
    return "loading"
  }
  
  return (
    <div>
      <div>
        <p>Stock one:</p>
        <div>{currentStocks.firstStock}</div>
      </div>
      <div>
        <p>Stock Two:</p>
        <div>{currentStocks.secondStock}</div>
      </div>
      <div>
        <p>Stock Three</p>
        <div>{currentStocks.thirdStock}</div>
      </div>
      <div>
        <p>Stock Four</p>
        <div>{currentStocks.fourthStock}</div>
      </div>
      <div>
        <p>Stock Five</p>
        <div>{currentStocks.fifthStock}</div>
      </div>
      <div>
        <p>Stock Six</p>
        <div>{currentStocks.sixthStock}
      </div></div>
      <div>
        <p>Stock Seven</p>
        <div>{currentStocks.seventhStock}</div>
      </div>
      <div>
        <p>Stock Eight</p>
        <div>{currentStocks.eighthStock}</div>
      </div>
      <div>
        <p>Stock Nine</p>
        <div>{currentStocks.ninthStock}</div>
      </div>
      <div>
        <p>Stock Ten</p>
        <div>{currentStocks.tenthStock}</div>
      </div>
      <LogoutButton/>
    </div>
  )
}

export default test;

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await axios.get("http://localhost:3001/")
//   const stocks = JSON.stringify(res.data)

//   return {
//     props: {
//       stocks
//     }
//   }
// }
