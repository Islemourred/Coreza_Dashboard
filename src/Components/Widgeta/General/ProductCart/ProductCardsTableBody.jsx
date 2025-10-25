import { productcard } from "../../../../Data/ProductCard/productcard";

const ProductCardsTableBody = () => {
  return (
    <tbody>
      {productcard.map((item) => (
        <tr key={item.id}>
          <td>{item.Details}</td>
          <td>{item.Qty}</td>
          <td>{item.Price}</td>
          <td className="text-end">
            <span className={`badge badge-light-${item.badgeClass}`}>
              {item.Status}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ProductCardsTableBody;