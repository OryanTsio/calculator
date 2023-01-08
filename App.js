import React , {useState} from 'react';
import { View , Text , StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
export default calculator = () => {
  
  const operatorsCheckList = ['+', '-', '/', '*']

  const [calculations, setCalculations] = useState("")
  const [result, setResult] = useState("")
  
  const calculate = () => {
    
    
    if(integrityCheck(calculations)){
      setResult(eval(calculations))
    }
    else{

      setResult("0")
    }
  }


  const integrityCheck = (calc) => {

    for(let i = 0; i < operatorsCheckList.length; i++){
      for(let j = 0; j < calc.length;j++){

        if(calc[j] == operatorsCheckList[i]){

          for(let k = 0; k < operatorsCheckList.length; k++){

            if(calc[j+1] == operatorsCheckList[k] || j+1 == calc.length){
              setResult("Invalid calculation")
              return false
            }
              
          }
        }
        if(calc[j] == '/' && calc[j+1] == '0'){
          setResult("Attempt to divide by zero")
          return false
        }
          
          
      }
    }

    return true
  }

 
  return(
    <View style={myStyles.container}>
      <View style = {myStyles.screen}>
        <Text style = {myStyles.screenText}>{calculations}</Text>
        <Text style = {[myStyles.screenText , {margin:5 , fontSize:24}]}>{result}</Text>
      </View>

      <View style = {myStyles.numberContiner}>
        <View style={myStyles.numberRowContainer}>
            <TouchableOpacity style = {myStyles.numericActions}  onPress={() => setCalculations(calculations + '/')}><Text style = {myStyles.text}>/</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn}onPress={() => setCalculations(calculations + '%')}><Text style = {myStyles.text}>%</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn}><Text><Feather name = "delete" size = {24} /></Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn} onPress={() => {setCalculations(""); setResult("")}}><Text style = {myStyles.text}>AC</Text></TouchableOpacity>
        </View>

       <View style = {myStyles.numberRowContainer}>
            <TouchableOpacity style = {myStyles.numericActions} onPress={() => setCalculations(calculations + '*')}><Text>x</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn} onPress={() => setCalculations(calculations + '9')}  ><Text style = {myStyles.text}>9</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn} onPress={() => setCalculations(calculations + '8')}><Text style = {myStyles.text}>8</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn} onPress={() => setCalculations(calculations + '7')}><Text style = {myStyles.text}>7</Text></TouchableOpacity>
       </View>

       <View style = {myStyles.numberRowContainer}>
            <TouchableOpacity style = {myStyles.numericActions} onPress={() => setCalculations(calculations + '-')}><Text style = {myStyles.text}>-</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn} onPress={() => setCalculations(calculations + '6')}><Text style = {myStyles.text}>6</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn} onPress={() => setCalculations(calculations + '5')}><Text style = {myStyles.text}>5</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn} onPress={() => setCalculations(calculations + '4')}><Text style = {myStyles.text}>4</Text></TouchableOpacity>
       </View>
       

       <View style={myStyles.numberRowContainer}>
            <TouchableOpacity style = {myStyles.numericActions} onPress={() => setCalculations(calculations + '+')}><Text>+</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn} onPress={() => setCalculations(calculations + '3')}><Text style = {myStyles.text}>3</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn} onPress={() => setCalculations(calculations + '2')}><Text style = {myStyles.text}>2</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn} onPress={() => setCalculations(calculations + '1')}><Text style = {myStyles.text}>1</Text></TouchableOpacity>
       </View>

       <View style = {myStyles.numberRowContainer}>
            <TouchableOpacity style = {myStyles.equal} onPress = {() => calculate()}><Text style = {myStyles.text}>=</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn}><Text style = {myStyles.text}>.</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn}  onPress={() => setCalculations(calculations + '0')}><Text style = {myStyles.text}>0</Text></TouchableOpacity>
       </View>
       
      </View>
    </View>

  )

}

const myStyles = StyleSheet.create({
  container: {
   alignItems:'center',
   flex: 1 ,
   justifyContent:'flex-start',
  },
   screen: {
   margin:'20%',
   height:'25%' ,
   width:'100%',
   backgroundColor:'#ffff' ,
   borderRadius:10,
   alignItems:'flex-start',

  },
   screenText:{
    color:'#000' ,
    fontSize:30,
 },
  numberContiner:{
   backgroundColor:'#E0FBFC',
   width:'100%' ,
   height:'50%' ,
  },
   numberRowContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:3,
    backgroundColor:'#fff',
    alignItems:'center',
  },
  numericActions:{
   backgroundColor:'#00A6A6',
   borderRadius:20,
   padding:25,
  },
  equal:{
    fontSize:100 ,
    backgroundColor:'#EA7317' ,
    borderRadius:20,
    padding:25,
  },
  btn:{
    borderRadius:20,
    backgroundColor:'#fff',
    padding:25,
  },
  text:{
    fontSize:20,
  },
})
//export default function calculate() 
