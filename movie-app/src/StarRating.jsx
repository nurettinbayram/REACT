import { useState } from "react";
import PropTypes from "prop-types";

StarRating.propTypes = {
  //burada bu componenti cagiran kisinin props turunu veya propsun zorunlu olup olmamasi durumunu kontrol eder
  maxRating: PropTypes.number.isRequired, // isRequired ile bu props zorunlu hale getirildi
  color: PropTypes.string,
  size: PropTypes.number,
};

export default function StarRating({
  //buradaki degerler componentin defoult degerleridir
  maxRating = 5,
  color = "#ffc419",
  size = 48,
}) {
  //buradaki  =5 degeri eger componente herhangi bir deger gonderilnezse  5 ayarlanir defoult degeri olur

  const [rating, setRating] = useState(0);
  const [hoveRating, setHoverRating] = useState(0);
  return (
    <div style={containerStyle}>
      <div style={itemContainerStyle}>
        {Array.from({ length: maxRating }, (val, i) => (
          <Star
            onRating={() => setRating(i + 1)}
            onHoverEnter={() => setHoverRating(i + 1)}
            onHoverLeave={() => setHoverRating(0)}
            key={i}
            fill={hoveRating ? hoveRating >= i + 1 : rating >= i + 1} //hoveRating true ise o an hoveRating in izerinde oldugu yere kadar doldurur eger false ise rating degerini getirir
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{hoveRating || rating || ""}</p>
      {/* buradaki mantik  hoveRating sifirdan fakli bir degerdeyse onu getir eger ki false yani sifirsa rating degerini getir tabi sifirdan farkli olmasi gerekir yani false olmamali egerki false ise son olan bos stringi getir*/}
    </div>
  );
}

function Star({ onRating, onHoverEnter, onHoverLeave, color, size, fill }) {
  // bu bolumde svg bootstrap marketinden alip kendi ikonumuzu siteden yada dosyalarindan bagimsiz bir sekilde olusturduk
  return (
    <span
      onClick={onRating}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
      //   {/**onMouseLeave={() => onHoverLeave} bu sekilde bir cagirim yapilmis olsaydi hover ise uararamazdi cunku bizden uzerindeyken tiklamamizi bekleyecek ama errow fonksiyonunu kaldirip metodu direct yazarsak uzerinde dolastigimizda islem goruruz */}
    >
      {/**burada tiklandigi yildiz sayisi kadar bir cikti alir */}
      {fill ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill={color}
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill={color}
          viewBox="0 0 16 16"
        >
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
        </svg>
      )}
    </span>
  );
}

const containerStyle = {
  display: "flex",
  gap: "1rem",
};
const itemContainerStyle = {
  display: "flex",
  gap: ".2rem",
};
const textStyle = {
  margin: "0",
};
