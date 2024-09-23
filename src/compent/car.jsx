function Car(props){

const{ model}= props

    const text = `this car name is ${model}`;
    return(
       
     <h1>{text}</h1>    
     
    
    );

}
export default Car;