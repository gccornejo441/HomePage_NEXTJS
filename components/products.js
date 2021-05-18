import data from '../productDate/coffee.json';

const Products = () => {
    const productListOne = data.product_list_one.map(item => (
        <ul>
            <li class="my-2" key={item.id}>
                <img class="h-72 w-27" src={item.image} alt={item.name} />
            </li>
        </ul>
    ))
    const productListTwo = data.product_list_two.map(item => (
        <ul>
            <li class="my-2" key={item.id}>
                <img class="h-72 w-27" src={item.image} alt={item.name} />
            </li>
        </ul>
    ))
    const productListThree = data.product_list_three.map(item => (
        <ul>
            <li class="my-2" key={item.id}>
                <img class="h-72 w-27" src={item.image} alt={item.name} />
            </li>
        </ul>
    ))
    const productListFour = data.product_list_four.map(item => (
        <ul>
            <li class="my-2" key={item.id}>
                <img class="h-72 w-27" src={item.image} alt={item.name} />
            </li>
        </ul>
    ))
    return (
        <>
        <div class="container mx-auto  flex justify-around">
            <div class="flex flex-col">{productListTwo}</div>
            <div class="flex flex-col">{productListOne}</div>
            <div class="flex flex-col">{productListThree}</div>
            <div class="flex flex-col">{productListFour}</div>
        </div>
        </>
    )
}

export default Products;