export default function Footer(){
    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 20;
    const isOpen = hour >= openHour && hour <=closeHour; //bu kisimdan true yada false doner is open degeri de ikisinden biri olur
    console.log(isOpen);
  
    return(
      <footer>
        {
          isOpen 
          ? 
          (//buradaki soru isareti yerine && kullanilip sadece if kismi olusturulabilir yada ? ve : kullanilip else de eklenir
            <p>Aksam {closeHour}'e kadar siparis verebilirsiniz.</p>
          )
          :
          (
            <p>Suanda kapaliyiz</p>
          )
        }
      </footer>
    )
  }