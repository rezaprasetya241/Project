import React, { useEffect, useState } from 'react'
import millify from 'millify'
import {Card, Row, Col, Input} from 'antd'


import { useGetCryptosQuery } from '../services/cryptoApi'
import { Link } from 'react-router-dom'

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100 /* untuk menampilkan hanya 10 crypto teratas */
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')


  // for search button
  useEffect(() => {
    setCryptos(cryptoList?.data?.coins)

    const filterdData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))

    setCryptos(filterdData)
  }, [cryptoList, searchTerm])

  console.log(cryptos)

  if(isFetching) return 'Loading...'
  return (
    <>
      {/* for show input search in web when go show more crypto */}
      {!simplified && (
        <div className='search-crypto'>
          <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
      )}
      {/* end */}

      <Row gutter={[32, 32]} className='crypto-card-container'>
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`} >
              <Card 
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl}/>}
                hoverable
                id='card'
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}%</p>
                </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies