import React from 'react'
import './styles.css'
import { Audio } from 'react-loader-spinner'

const CurrencyTable = ({ data, marketFlag, pageNum, setPageNum, loader, setMarketPages, marketPages, getAnalytics,
    marketTokenFlag, tokenFlag }) => {

    return (
        <div style={{ marginTop: 10 }}>
            <table
                style={{
                    width: '100%',
                    paddingTop: 10,
                    paddingBottom: 10,
                    border: '1px solid rgba(0, 0, 0, 0.87)',
                    borderRadius: 40,
                    borderCollapse: 'collapse'
                }}
            >
                <tr style={{
                    borderBottom: '1px solid black',
                    border: '1px solid black',
                    borderRadius: 10,
                    backgroundColor: 'white'

                }}>
                    <td style={{ width: 100, height: 27 }}>Chain</td>
                    <td className='tableColumnWidth'>Name</td>
                    <td style={{ width: 100 }}>{marketFlag ? 'APR' : 'Price'}</td>
                    <td className='tableColumnWidth'>Liquidity</td>
                    <td className='tableColumnWidth'>Volume</td>
                </tr>

                {data.map((data, index) => {
                    return (
                        <tr style={{
                            backgroundColor: index % 2 !== 0 ? 'rgb(255 177 195)' : 'white'
                        }}>
                            <td style={{ width: 100 }}>{data?.chainShortName}</td>
                            <td className='tableColumnWidth'>{data?.name}
                                <span style={{ opacity: 0.5, fontSize: 15 }}>
                                    {` (${data?.chainShortName})`}
                                </span>
                            </td>
                            <td style={{ width: 100 }}>
                                {
                                    data?.price?.derivedNative ? `${data?.price?.derivedNative.substring(0, 7)}M $`
                                        :
                                        data?.apr.length > 3 ? `${data?.apr.substring(2, 4)}%` : '0.00%'
                                }</td>
                            <td className='tableColumnWidth'>{`${data?.liquidityUSD.substring(0, 3)}.${data?.liquidityUSD.substring(4, 6)}M $`}</td>
                            <td className='tableColumnWidth'>{data?.volumeUSD.substring(0, 1)}.{data?.volumeUSD.substring(1, 4)}B $</td>
                        </tr>
                    )
                })}
                {loader &&
                    <tr >
                        <td colspan={5}

                        >
                            <Audio
                                height="20"
                                radius="9"
                                color="rgb(255 177 195)"
                                ariaLabel="loading"
                                wrapperStyle
                                wrapperClass
                                text-align="center"
                                width="100%"
                            />
                        </td>
                    </tr>
                }
                <tr style={{
                    height: 33,
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <div>
                        {(pageNum > 0 || marketPages > 0) &&
                            <span
                                onClick={() => { marketFlag ? setMarketPages(marketPages - 1) : setPageNum(pageNum - 1); }}
                                style={{ cursor: 'pointer' }}
                                className='rightLeftIconContainer'
                            >
                                {'<'}
                            </span>
                        }
                        {(pageNum + 1 <= data.length / 20 || marketPages + 1 <= data.length / 20) &&
                            <span
                                onClick={() => marketFlag ? setMarketPages(marketPages + 1) : setPageNum(pageNum + 1)}
                                style={{ cursor: 'pointer' }}
                                className='rightLeftIconContainer'
                            >
                                {'>'}
                            </span>
                        }
                    </div>
                </tr>
            </table>
        </div>
    )
}

export default CurrencyTable