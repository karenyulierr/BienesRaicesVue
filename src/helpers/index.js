export const priceProperty = (precie) =>
    Number(precie).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
