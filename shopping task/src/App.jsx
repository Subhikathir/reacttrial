import React , {useState} from 'react';
import './App.css'
const PAGE_PRODUCTS ='PRODUCTS';
const PAGE_CART ='cart';

function App() {
    const [cart,setCart]= useState([]);
    const [page,setPage]=useState('PAGE_PRODUCTS')
    const[products]=useState([
      {
       category:'Ethnic wears' ,
       name:'Designer pink gown',
       cost:'Rs 3000',
       image:'https://wholesuits.com/wp-content/uploads/2022/02/aglow-pink-color-party-wear-heavy-sequence-work-gown2-400x800.jpeg',
      },
      {
        category:'Ethnic wears' ,
        name:'Floral gown',
        cost:'Rs 2300',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5HA0Eze2KCJxKV1dlulJZQZjeZFgAVn39A&usqp=CAU',
       },
       {
        category:'Ethnic wears' ,
        name:'Black printed gown',
        cost:'Rs 4000',
        image:'https://5.imimg.com/data5/SELLER/Default/2023/2/GZ/IG/PS/69860802/dn320-3--500x500.jpg',
       },
       {
        category:'party wears' ,
        name:'printed shirt',
        cost:'Rs 2000',
        image:'https://www.ottostore.com/cdn/shop/files/dq-colour-changed-and-resized_3_1080x_91c65de4-64c4-4b8a-bc38-e4b9779a5b0d_500x.webp?v=1690361923',
       },
       {
        category:'Formal wears' ,
        name:'plain shirt',
        cost:'Rs 4000',
        image:'https://www.cinejosh.com/gallereys/actors/normal/suriya_interview_photos_0701180229/suriya_interview_photos_0701180229_015.jpg',
       },
       
       {
        
        category:'Party wears' ,
        name:'Coat Suit',
        cost:'Rs 4000',
        image:'https://www.iwmbuzz.com/wp-content/uploads/2021/12/dhanush-and-his-stylish-looks-in-suits-2.png',
       },
    ]);
    const addtocart=(product)=>{
      console.log("you are in Add to Cart")
      setCart([...cart,product]);
    };

    const navigateTo =(nextPage)=>{
    setPage(nextPage);
    };

    const renderProducts =()=>(
      <>
       <h1><center>Products</center></h1>
       <div className='products'>
       {products.map((product,idx)=>(
       <div className='product' key={idx}>
       <h3>{product.category}</h3>
       <h4>{product.name}</h4>
       <h4>{product.cost}</h4>
       <img src={product.image}
       alt={product.name}
       />
       <br></br> <button onClick={()=>addtocart(product)}>
       Add to Cart
       </button>
     
  </div>
))}
</div>
</>
    );
    
   const renderCart =() => (
   <>
    <h1><center>Cart</center></h1>
    <div className='products'>
    {cart.map((product,idx)=>(
      <div className='product' key={idx}>
       <h3>{product.category}</h3>
       <h4>{product.name}</h4>
       <h4>{product.cost}</h4>
       <img src={product.image}
        alt={product.name}
        />
       <button onClick={()=>removefromcart(product)}>
        remove from Cart
    </button>
      </div>
    ))}
    </div>
    </>
);

return(
<div className='App'>
  <header>
  <button onClick={()=>navigateTo(PAGE_CART)}>
      Go to cart({cart.length})
    </button>
    <button onClick={()=>navigateTo(PAGE_PRODUCTS)}>
    View  Products
    </button>
    </header>
  {page ===  "PAGE_PRODUCTS" && renderProducts()}
  {page === "PAGE_CART" &&  renderCart()}

</div>
);
}

export default App
