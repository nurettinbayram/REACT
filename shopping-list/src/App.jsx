import { useState } from "react";
const data = [
  { id: 1, title: "Yumurta", quantity: 10, completed: true },
  { id: 2, title: "Ekmek", quantity: 2, completed: true },
  { id: 3, title: "Sut", quantity: 1, completed: false },
  { id: 4, title: "Et", quantity: 3, completed: true },
  { id: 5, title: "Peynir", quantity: 4, completed: true },
];

function App() {
  const [items, setItems] = useState(data);

  function handleAddItem(item) {
    //global olmak zorunda
    setItems((items) => [...items, item]); //burada aslinda items dizisine push metodu ile elemen eklenebilirdi ama bu degisken usestatten geldigi icin degistirilemez bir durumda o yuzden baska yollara ihtiyac duyuturuz ve usestate te zaten const ile degisken olusturuyor yani degisime acik degil.
  }

  function handleDeeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    {
      /*burada ekleme olayi gibi stateteki items dizisini dogrudan degistiremedigimiz icin bu kisimda diziyi filtreleyip gelen id eger listenin icindeki id ile eslesiyorsa o zaman listeden filter metodu ile dusurulur ---- ayrica bunu alt komponentlerde kullanacagimiz icin props yardimiyla eklentiler yapmamiz derekir*/
    }
  }

  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function handleClearList() {
    setItems([]);
  }

  return (
    <div>
      <Header />
      <Form onAddItem={handleAddItem} onClearList={handleClearList} />
      {/* parent ta tanimlanan istems list bilesenleri form dan geldigi icin ve List componentinde kullanilacagi icin burdanda prop yardimi ile erisebiliriz */}
      <List
        items={items}
        onDeleteItem={handleDeeleteItem}
        onUpdateItem={handleUpdateItem}
      />
      {/*formun icerisinde olusturulan items List componentinde kullanilmak isteniyor ve form ve list componenleri siblings olduklari icin parent olan APP componentinden items listesi olusturuldu ve bu liste props yardimi ile List komponentine gonderiliyor */}
      <Summary items={items} />
    </div>
  );
}

function Header() {
  return <h1>🛒 Shoppping List</h1>;
}

function Form({ onAddItem, onClearList }) {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleFormSubmit(e) {
    e.preventDefault();
    const item = { id: Date.now(), title, quantity, completed: false };
    console.log(item);

    onAddItem(item);

    setQuantity(1);
    setTitle("");
  }
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Urun adi griniz"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (v, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <button type="submit">➕ Ekle</button>
      <button type="button" onClick={onClearList}>
        🗑️ Temizle
      </button>
    </form>
  );
}

function List({ items, onDeleteItem, onUpdateItem }) {
  return (
    <>
      {items.length > 0 ? (
        <div className="list">
          <ul>
            {items.map((i, index) => (
              <Item
                item={i}
                key={index}
                onDeleteItem={onDeleteItem}
                onUpdateItem={onUpdateItem}
              />
            ))}
            {/*onDeleteItem App komponentinden geliyor ama burda degilde bir alt komponente kullanacagiz bu yuzden burasi sadece gecis komponenti olmus olur */}
          </ul>
        </div>
      ) : (
        <h3 className="list">No items</h3>
      )}
    </>
  );
}

function Item({ item, onDeleteItem, onUpdateItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onUpdateItem(item.id)}
      />
      <span style={item.completed ? { textDecoration: "line-through" } : {}}>
        {/*burada listede copleted alani true false degerine gore css ozelligini degistirdik */}
        {item.quantity} {item.title}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>X</button>
    </li>
  );
}

function Summary({ items }) {
  if (items.length === 0) {
    return (
      <footer className="summary">
        <p>Alisveris listenizi Hazirlayabilirsiniz</p>
      </footer>
    );
  }
  const itemsCount = items.length;
  const completedItemsCount = items.filter((item) => item.completed).length;
  return (
    <footer className="summary">
      {itemsCount === completedItemsCount ? (
        <p>Alisverisi tamamladiniz...❤️</p>
      ) : (
        <p>
          Alisveris sepetinizde {itemsCount} urunden {completedItemsCount}{" "}
          tanesini Tamamladiniz.
        </p>
      )}
    </footer>
  );
}

export default App;
