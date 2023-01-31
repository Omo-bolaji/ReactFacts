import reacticon from '../images/reactjs.png';
function Nav() {
    return (
        <>
            <div className="navContainer">
            <img src= {reacticon} className="reacticon" />
                <h2>ReactFacts</h2>
                <p>React Course - Project 1</p>
            </div>
        </>
    )
}
export default Nav;