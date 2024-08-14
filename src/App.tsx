import Footer from "./Footer";
import Header from "./Header";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import UserGreetings from "./UserGreetings";
import MyComponent from "./MyComponent";
function App() {

return(
    <>
    <Header></Header>
    <Food></Food>
    <Footer></Footer>
    <Card name='abdul'></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Button></Button>
    <UserGreetings isLoggedIn={true} username="Abdul"/>
    <MyComponent></MyComponent>
    </>
)
}

export default App;