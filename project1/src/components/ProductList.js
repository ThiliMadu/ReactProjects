
import { useSearchParams,useLocation } from "react-router-dom"
export const ProductList = () => {
  const [searchParams]= useSearchParams();
  const [locationParam]= useSearchParams();
  console.log(searchParams.get('q'),searchParams.get('keyword'));
  console.log(locationParam);
  return (
    <div className="component">ProductList</div>
  )
}
