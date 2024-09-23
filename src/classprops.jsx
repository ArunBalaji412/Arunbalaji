class Classprops extends React.Component{
    render()
    {
        let name1={
            name:'balaji',
            age:24,}
            return(
                <div>
                 <h1>
                your name is {
                    this.props.name 
                }
                </h1>
                </div>
            );
        }
    }
export default Classprops;