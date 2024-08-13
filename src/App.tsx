import Footer from "./Footer";
import Header from "./Header";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import UserGreetings from "./UserGreetings";
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
    <UserGreetings isLoggedIn={false} username="Abdul"/>
    </>
)
}

export default App;