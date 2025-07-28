
const HoverComp = () => {

    const greet = () => {
        window.alert("Good Evening friends");
    }

    const welcome = (...std) => {
        window.alert( `welcome You ${std}`)
    }

    return <div>
        <h2>This is Hower components</h2>
        <button type="button" onClick={() => greet()}>Click on me</button>
        <h2 onMouseOver={()=> welcome("Akshay", "Vivek")}>hover on Me to call welcome</h2>
    </div>
}

export default HoverComp;