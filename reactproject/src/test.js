const Func = () => {
    let currDate = new Date(2020,5,20,17);
    currDate = currDate.getHours();
    
    let greeting = "";
    
    if(currDate >= 1 && currDate <12){
      greeting = "Good morning";
    }
    else if(currDate >=12 && currDate < 19){
      greeting = "Good Afternoon";
    }
    else{
      greeting = "Good Night";
    }
  return <h1>Hello,{greeting}</h1>;
};

export default Func;
