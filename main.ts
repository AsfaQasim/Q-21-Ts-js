interface item{
    name: string
    price:number
}
// create two objects
const book : item ={
    name:`ESSENTIAL TYPESCRIPT`,
    price: 500

}
const apple: item ={
    name:`apple`,
    price: 200
}
    console.log(`book name: ${book.name}, price: $${book.price}`)
    console.log(`APPLE name: ${apple.name}, price: $${apple.price} `)

