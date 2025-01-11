"use client";
import Middle from './/middle'; // Importing the middle component
import Upper from ".//upper"; // Importing the upper component
import Footer  from "./footer"; // Importing the upper component
/* <button
onClick={() => setShowCart((prev) => !prev)}
className="bg-blue-500 text-white px-4 py-2 rounded"
>
{showCart ? "Hide Cart" : "View Cart"} ({cartItems.length})
</button>*/
export default function HomePage() {
  return (
    <>
     <Upper/>
<Middle/>

    </>
  );
}
