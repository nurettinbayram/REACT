import { useState } from 'react';
import {sculptureList} from './data'

function App() {
  const [index, setIndex] = useState(0);//burada index bir degisken, index degiskenin icini degistirmeye yarayan setIndex metodu kullanilir 
  const [showMore, setShowMore] = useState(false);
  let sculpture = sculptureList[index]; //data dosyasindan bilgiler getiriliyor

  console.log(sculpture)

  function handleNextClick(){
    if(index<sculptureList.length-1){
    setIndex(index+1)
  }
  else{
    setIndex(0)
  }
  }
  function handlePreviusClick(){
    if(index>0){
    setIndex(index-1)
  }
  else{
    setIndex(sculptureList.length-1)
  }
  }

  function handleMoreClick(){
    setShowMore(!showMore) //show more degiskenini her butona basildiginda setShowMore metodu ile durumunu degistirir
  }

  return (
   <>
    
    <button onClick={handlePreviusClick}>Previus</button>{/*buradada arrow fonksiyon ile bu tanimlamayi yaptik eger arrow fonksiyon kullanilmadan alert("previus") yazdirilirsa bu durumdada butona basilmadan alert mesaji calismis olur */}
    <button onClick={handleNextClick}>Next</button>{/*eger buttonun icindeki fonksiyondan sonra parantezler eklenirse() dosya kaydedildigi gibi fonksiyon cagirilir. eklenmezse butona basildiginda fonksiyon cagirilir*/}

    <h2><i>{sculpture.name}</i> by {sculpture.artist}</h2>
    <h3>({index+1} of {sculptureList.length})</h3>
    <img src={sculpture.url} alt={sculpture.alt} /><br/>
    <button onClick={handleMoreClick}>{showMore ? "Hide" : "Show"} Details</button>{/*? : --> soru isareti ve iki nokta if else olarak calisir */}
    {showMore && <p>{sculpture.description}</p> /*bu kisimda && if olarak calisir dikkat */}
   </>      
  )
}

export default App
