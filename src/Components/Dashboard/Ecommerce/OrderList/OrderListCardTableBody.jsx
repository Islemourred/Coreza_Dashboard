import { orderlist } from "../../../../Data/OrderList/orderList";

const OrderListCardTableBody = () => {
  return (
    <tbody>
      {orderlist.map((item) => (
        <tr key={item.id}>
          <td>
            <div className="d-flex">
              <div className="number-dot">
                <span className="f-w-700">{item.number}</span>
              </div>
              <div className="flex-grow-1">
                <span className="f-14 f-w-600">{item.hash}</span>
              </div>
            </div>
          </td>
          <td><span>{item.status}</span></td>
          <td>{item.Operator}</td>
          <td>{item.date}</td>
          <td>{item.address}</td>
          <td>{item.price}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default OrderListCardTableBody;