const Cal = (n) => {
    const [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
    let weekday= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let monthName= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const day= new Date().getDay()

    for(let i=0; i<n;i++){

    }
}

export default Cal