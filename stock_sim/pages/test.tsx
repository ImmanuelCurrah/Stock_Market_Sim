import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import axios from "axios"

// type Props = {
//   stocks: any
// }

// {stocks} : Props
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
      <div>{currentStocks.firstStock}</div>
      <div>{currentStocks.secondStock}</div>
      <div>{currentStocks.thirdStock}</div>
      <div>{currentStocks.fourthStock}</div>
      <div>{currentStocks.fifthStock}</div>
      <div>{currentStocks.sixthStock}</div>
      <div>{currentStocks.seventhStock}</div>
      <div>{currentStocks.eightStock}</div>
      <div>{currentStocks.ninthStock}</div>
      <div>{currentStocks.tenthStock}</div>
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
