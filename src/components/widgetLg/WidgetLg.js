import React from "react";
import './WidgetLg.css'
import { transActions } from "../../datas";
export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Lastest TransActions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        {transActions.map(transAction=>(
        <tr key={transAction.id} className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={transAction.img} alt="" className="widgetLgImg"/>
            <span className="widgetLgName">{transAction.customer}</span>
          </td>
          <td className="widgetLgDate">{transAction.date}</td>
          <td className="widgetLgAmount">{transAction.amount}$</td>
          <td className="widgetLgStatus">
            <Button type={transAction.status}></Button>
          </td>
        </tr>
        ))}

      </table>
    </div>
  );
}
