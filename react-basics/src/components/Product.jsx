export default function Product({productObj}){
    if(!productObj.isActive) return null //eger productObj.isActve false ise bos deger dondurerek o urun listeye eklenmez
    return (
      <div className='card shadow-sm '>
      <img src={"/img/" + productObj.image}  className="card-img-top p-2 p-md-3  border-bottom " alt=''/>
      <div className='card-body'>
        <h2 className='card-title'>{productObj.title}</h2>
        <p className='card-text'>{productObj.discription}</p>
        <span className='badge text-bg-success'>{productObj.price} TL</span>
      </div>
      </div>
    )
  }