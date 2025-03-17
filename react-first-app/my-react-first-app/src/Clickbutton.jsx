function Clickbutton()
{
    const imgurl="./src/assets/profile.jpg";
    const handle=(e)=>e.target.style.display="none";

    return(<img onClick={(e)=>handle(e)} src={imgurl}></img>);
}
export default Clickbutton