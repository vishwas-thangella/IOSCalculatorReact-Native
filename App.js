import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, TouchableOpacity, View , Text} from 'react-native';

const App = () =>{
  let [value,setValue] = useState('0');
  return(
    <View style={Styles.View}>
      <StatusBar style='auto'/>
      <View style={{marginTop:"26%"}}>
        <TextInput style={Styles.TextInput} value={value}/>
        <View style={Styles.Horizontal}>
          <TouchableOpacity style={[Styles.Gray,Styles.Touchable]} onPress={()=>{
            setValue('0')
          }}><Text style={{fontSize:29,color:"black"}}>AC</Text></TouchableOpacity>
          <TouchableOpacity style={[Styles.Gray,Styles.Touchable]}
          onPress={()=>{
            if(value==='0'){setValue('+')}
            else setValue(value+='+')
          }}
          ><Text style={{fontSize:29,color:"black"}}>+/-</Text></TouchableOpacity>
          <TouchableOpacity style={[Styles.Gray,Styles.Touchable]}
          onPress={()=>{
            if(value==='0'){setValue('%')}
            else setValue(value+='%')
          }}
          ><Text style={{fontSize:29,color:"black"}}>%</Text></TouchableOpacity>
          <TouchableOpacity style={[Styles.Orange,Styles.Touchable]}
          onPress={()=>{
            if(value==='0'){setValue('/')}
            else setValue(value+='/')
          }}
          ><Text style={{color:"white",fontSize:40}}>÷</Text></TouchableOpacity>
        </View>
        <View style={Styles.Horizontal}>   
          <TouchableOpacity style={[Styles.Black,Styles.Touchable]} onPress={()=>{
            if(value==='0'){setValue('8')}
            else setValue(value+='8')
          }}><Text style={{fontSize:29,color:"white"}}>8</Text></TouchableOpacity>
          <TouchableOpacity style={[Styles.Black,Styles.Touchable]} onPress={()=>{
            if(value==='0'){
              setValue('7')
            }else setValue(value+='7')
          }}><Text style={{fontSize:29,color:"white"}}>7</Text></TouchableOpacity>
          <TouchableOpacity style={[Styles.Black,Styles.Touchable]} onPress={()=>{
            if(value==='0'){setValue('9')}
            else setValue(value+='9')
          }}><Text style={{fontSize:29,color:"white"}}>9</Text></TouchableOpacity>
          <TouchableOpacity style={[Styles.Orange,Styles.Touchable]} onPress={()=>{
            if(value==='0'){setValue('*')}
            else setValue(value+='*')
          }}><Text style={{fontSize:29,color:"white",fontSize:30}}>X</Text></TouchableOpacity>
        </View>
        <View style={Styles.Horizontal}>
          <TouchableOpacity style={[Styles.Black,Styles.Touchable]} onPress={()=>{
            if(value==='0'){setValue('4')}
            else setValue(value+='4')
          }}><Text style={{fontSize:29,color:"white"}}>4</Text></TouchableOpacity>
          <TouchableOpacity style={[Styles.Black,Styles.Touchable]} onPress={()=>{
            if(value==='0'){setValue('5')}
            else setValue(value+='5')
          }}><Text style={{fontSize:29,color:"white"}}>5</Text></TouchableOpacity>
          <TouchableOpacity style={[Styles.Black,Styles.Touchable]} onPress={()=>{
            if(value==='0'){setValue('6')}
            else setValue(value+='6')
          }}><Text style={{fontSize:29,color:"white"}}>6</Text></TouchableOpacity>
          <TouchableOpacity style={[Styles.Orange,Styles.Touchable]} onPress={()=>{
            if(value==='0'){setValue('-')}
            else setValue(value+='-')
          }}><Text style={{fontSize:29,color:"white",fontSize:40}}>-</Text></TouchableOpacity>
        </View>
        <View style={Styles.Horizontal}>
          <TouchableOpacity style={[Styles.Black,Styles.Touchable]} onPress={()=>{
            if(value==='0'){setValue('1')}
            else setValue(value+='1')
          }}><Text style={{fontSize:29,color:"white"}}>1</Text></TouchableOpacity>
          <TouchableOpacity style={[Styles.Black,Styles.Touchable]} onPress={()=>{
            if(value==='0'){setValue('2')}
            else setValue(value+='2')
          }}><Text style={{fontSize:29,color:"white"}}>2</Text></TouchableOpacity>
          <TouchableOpacity style={[Styles.Black,Styles.Touchable]} onPress={()=>{
            if(value==='0'){setValue('3')}
            else setValue(value+='3')
          }}><Text style={{fontSize:29,color:"white"}}>3</Text></TouchableOpacity>
          <TouchableOpacity style={[Styles.Orange,Styles.Touchable]} onPress={()=>{
            if(value==='0'){setValue('+')}
            else setValue(value+='+')
          }}><Text style={{fontSize:29,color:"white",fontSize:40}}>+</Text></TouchableOpacity>
        </View>
        <View style={Styles.Horizontal}>
          <TouchableOpacity style={[Styles.Black,Styles.Touchable,{width:180}]} onPress={()=>{
            if(value==='0'){setValue('0')}
            else setValue(value+='0')
          }}><Text style={{fontSize:29,color:"white"}}>0</Text></TouchableOpacity>
          <TouchableOpacity style={[Styles.Black,Styles.Touchable]} onPress={()=>{
            if(value==='0'){setValue('.')}
            else setValue(value+='.')
          }}><Text style={{fontSize:29,color:"white"}}>.</Text></TouchableOpacity>
          <TouchableOpacity style={[Styles.Orange,Styles.Touchable]} onPress={()=>{
            const ans = String(eval(value));
            setValue(ans);
          }}><Text style={{fontSize:29,color:"white",fontSize:40}}>=</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({
  View:{
    flex:1,
    backgroundColor:"black"
  },
  TextInput:{
    width:"100%",
    color:"white",
    fontSize:50,
    textAlign:"right",
    paddingRight:40
  },
  Horizontal:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:10
  },
  Gray:{
    backgroundColor:"#A5A5A5",
    color:"white"
  },
  Touchable:{
    width:90,
    height:90,
    borderRadius:50,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  Orange:{
    backgroundColor:"#FE9505",
    color:"white"
  },
  Text:{
    fontSize:20,
  },
  Black:{
    backgroundColor:"#333333"
  }
});
export default App;