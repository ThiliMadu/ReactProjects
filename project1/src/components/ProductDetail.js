
import { useParams } from "react-router-dom"
export const ProductDetail = () => {
  const param = useParams();
  console.log(param);
  return (
    <div className="component">{param.id}ProductDetails</div>
  )
}
