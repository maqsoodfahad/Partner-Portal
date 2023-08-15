import {React, useState} from 'react'
import download from "../../../../assets/HomeAssets/assets/images/icon/download.png";
import search from "../../../../assets/HomeAssets/assets/images/icon/search.png";
import expand from "../../../../assets/HomeAssets/assets/images/icon/expand.png";
import { Link } from 'react-router-dom';



const PayoutHistory = () => {
    const [isInputVisible, setInputVisible] = useState(false);

    const handleSearchClick = () => {
      setInputVisible(!isInputVisible);
    };
  return (
    <>
    <h1 className="f24 mb-0 text-white mt-64 ">Payout History</h1>
      <div className="table_width PayoutHistory-table mt-32">
        <div className="custom_table    table-wrapper">
          <table className="table giro-table table-bordered">
            <thead>
              <tr>
                <th className="br-r-8 w-153">
                  <Link className="Invoice_link"> 
                    <img src={download} alt="download" /> Identifier
                  </Link>
                </th> 
                <th className="w-18 pl-0 ">Payment date</th>
                <th className="pl-0">Amount</th>
                <th className="pl-custom"> Status</th>
                <th className="pl-custom w-352 ">
                    <div className='search_box d-flex justify-content-end'>
                    <div className='search_inner'>
                    <Link className='icon-table search_btn' onClick={handleSearchClick}>
                        <img src={search} alt='search' />
                    </Link>
                    {isInputVisible && (
                        <div className='input_wrap_search'>
                        <div className='form-group'>
                            <input type='text' className='search-input' />
                            <Link className='' onClick={handleSearchClick}>
                            <img src={search} alt='search' />
                            </Link>
                        </div>
                        </div>
                    )}
                    </div>
                        <Link className='icon-table'><img src={expand} alt='expand'/></Link>
                    </div>
                </th>
              </tr>
            </thead>
            <tbody className="scroll_bar ">
              <tr>
                <td className="br-r-8 w-153">
                  <div className="redio_wrap">
                    <input type="checkbox" id="one" name="gender" />
                    <label for="one" className='txt-blue'><u>PAY-8752</u></label>
                  </div>
                </td>
                <td className="w-19">June 15, 2023</td>  
                <td className="pl-0 text-center">$100.00</td>
                <td className="pl-0 text-center">Completed</td> 
                <td className=" "></td> 
              </tr>
              <tr>
                <td className="br-r-8 w-153">
                  <div className="redio_wrap">
                    <input type="checkbox" id="two" name="gender" />
                    <label for="two" className='txt-blue'><u>PAY-8751</u></label>
                  </div>
                </td>
                <td className="w-19">June 15, 2023</td> 
                <td className="text-center">$30.00</td> 
                <td className="pl-0 text-center">Completed</td>
                <td className="pl-0 text-center"></td>
              </tr>
            </tbody>
          </table>
          <button type='button' className='btn_load_more'>Load more invoices</button>
        </div>
      </div>
    </>
  )
}

export default PayoutHistory