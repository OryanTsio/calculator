import React , {useState} from 'react';
import { View , Text , StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const calculator = () => {

  const [equal , setEqual] = useState("");
  //const [result , setResult]  = useState("");

  const calculate = () => {
    setResult(eval(equal))
  }
  return(
    <View style={myStyles.container}>
      <View style = {myStyles.screen}>
        <Text style = {myStyles.screenText}>{equal}</Text>
      </View>

      <View style = {myStyles.numberContiner}>
        <View style={myStyles.numberRowContainer}>
            <TouchableOpacity style = {myStyles.numericActions}><Text style = {myStyles.text}>/</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn}><Text style = {myStyles.text}>%</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn}><Text><Feather name = "delete" size = {24} /></Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn}><Text style = {myStyles.text}>AC</Text></TouchableOpacity>
        </View>

       <View style = {myStyles.numberRowContainer}>
            <TouchableOpacity style = {myStyles.numericActions}><Text>x</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn} onPress={() => setEqual(equal + '9')}  ><Text style = {myStyles.text}>9</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn} onPress={() => setEqual(equal + '8')}><Text style = {myStyles.text}>8</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn} onPress={() => setEqual(equal + '7')}><Text style = {myStyles.text}>7</Text></TouchableOpacity>
       </View>

       <View style = {myStyles.numberRowContainer}>
            <TouchableOpacity style = {myStyles.numericActions}><Text style = {myStyles.text}>-</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn} onPress={() => setEqual(equal + '6')}><Text style = {myStyles.text}>6</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn} onPress={() => setEqual(equal + '5')}><Text style = {myStyles.text}>5</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn} onPress={() => setEqual(equal + '4')}><Text style = {myStyles.text}>4</Text></TouchableOpacity>
       </View>
       

       <View style={myStyles.numberRowContainer}>
            <TouchableOpacity style = {myStyles.numericActions}><Text>+</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn} onPress={() => setEqual(equal + '3')}><Text style = {myStyles.text}>3</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn} onPress={() => setEqual(equal + '2')}><Text style = {myStyles.text}>2</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn} onPress={() => setEqual(equal + '1')}><Text style = {myStyles.text}>1</Text></TouchableOpacity>
       </View>

       <View style = {myStyles.numberRowContainer}>
            <TouchableOpacity style = {myStyles.equal} onPress = {calculate}><Text style = {myStyles.text}>=</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn}><Text style = {myStyles.text}>.</Text></TouchableOpacity>
            <TouchableOpacity style = {myStyles.btn}><Text style = {myStyles.text}>0</Text></TouchableOpacity>
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
export default calculator;