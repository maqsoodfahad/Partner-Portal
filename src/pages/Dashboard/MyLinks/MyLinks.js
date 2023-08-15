import React from "react";
import { Link } from "react-router-dom";
import delet from "../../../assets/HomeAssets/assets/images/icon/delet.png";
import copy from "../../../assets/HomeAssets/assets/images/icon/copy.png";
const MyLinks = () => {
  return (
    <>
      <h1 className="f24 mb-0 text-white mt-64 ">My Links</h1>
      <div className="table_width mt-32">
        <div className="custom_table    table-wrapper">
          <table class="table giro-table table-bordered">
            <thead>
              <tr>
                <th className="br-r-8 w-153">
                  <Link className="Invoice_link">
                    {" "}
                    <img src={delet} alt="delet" /> Title
                  </Link>
                </th>
                <th className="w-19 ">Description</th>
                <th className="w-18 pl-0 ">Link</th>
                <th className="pl-0">Clicks</th>
                <th className="pl-custom"> Accounts</th>
                <th className="pl-custom"> Profit</th>
              </tr>
            </thead>
            <tbody className="scroll_bar  ">
              <tr>
                <td className="br-r-8 w-153">
                  <div className="redio_wrap">
                    <input type="checkbox" id="one" name="gender" />
                    <label for="one">Holidays 23</label>
                  </div>
                </td>
                <td className="w-19">Holidays giveaway</td>
                <td className="w-18">
                  <div className="link-box">
                    <span className="f16">https://lionspri.de/HZYPQ</span>
                    <Link className="copy_wrap">
                      <img src={copy} alt="copy" />
                    </Link>
                  </div>
                </td>
                <td className="text-center">$362</td>
                <td className="pl-0 text-center">168</td>
                <td className="pl-0 text-center">$23.2k</td>
              </tr>

              <tr>
                <td className="br-r-8 w-153">
                  <div className="redio_wrap">
                    <input type="checkbox" id="two" name="gender" />
                    <label for="two">YouTube</label>
                  </div>
                </td>
                <td className="w-19">Youtube Channel</td>
                <td className="w-18">
                  <div className="link-box">
                    <span className="f16">Link Copied!</span>
                    <Link className="copy_wrap">
                      <img src={copy} alt="copy" />
                    </Link>
                  </div>
                </td>
                <td className="text-center">891</td>
                <td className="pl-0 text-center">42</td>
                <td className="pl-0 text-center">$212</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyLinks;
