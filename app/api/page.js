async function getCartData() {
  const res = await fetch("http://localhost:3000/api/cart", {
    cache: "no-store"
  })
  return res.json()
}

export default async function CartPage() {

  const data = await getCartData()

  const subtotal = data.cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0
  )

  const total = subtotal + data.shipping_fee

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Cart</h1>

      {data.cartItems.map(item => (
        <div key={item.product_id} className="flex gap-4 border p-4 mt-4">
          <img src={item.image} width="80"/>
          <div>
            <h2>{item.product_name}</h2>
            <p>₹{item.product_price}</p>
            <p>Qty: {item.quantity}</p>
          </div>
        </div>
      ))}

      <div className="mt-6">
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping: ₹{data.shipping_fee}</p>
        <p className="font-bold">Total: ₹{total}</p>
      </div>

      <a
        href="/address"
        className="bg-green-600 text-white px-4 py-2 mt-4 inline-block"
      >
        Proceed to Checkout
      </a>
    </div>
  )
}