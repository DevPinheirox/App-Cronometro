import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native';
import react,{ useState } from 'react';

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App() {

const [numero, setNumero] = useState('00:00:00');
const [btn, setBtn] = useState('Iniciar');
const [ultimo, setUltimo] = useState(null);

  function init(){
    console.log('vai')
    if(timer !== null){
      clearInterval(timer);
      timer = null;

      setBtn('Iniciar');
    }else{
      timer = setInterval(() =>{
        ss++;
        if(ss === 60){
          ss = 0;
          mm++;

        }

        if(mm === 60){
          mm = 0;
          hh++;
        }

        let format =
        (hh < 10 ? '0'+ hh: hh) + ':'
        + (mm < 10 ? '0'+mm : mm) + ':'
        + (ss < 10 ? '0'+ss : ss);
      
      setNumero(format);
      },1000)

      setBtn('Pausar')

    }

  }

  function stop(){
    if(timer !== null){
      clearInterval(timer);
      timer = null;
    }

  
    setUltimo(numero);
    
    setNumero('00:00:00');
    ss = 0;
    mm = 0;
    hh = 0;

    setBtn('Vai');
  }

  return (
    <View style={styles.container}>

    <Image
    source={require('./src/crono.png')}
    />

    <Text style={styles.timer}> {numero} </Text>

    <View style={styles.ultimaArea}>
        <Text style={styles.textoCorrida}>
        {ultimo ? 'Ultimo tempo: '+ ultimo : ''}  
        </Text>
    </View>

      <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn}  onPress={init}>
                <Text style={styles.btnText}>{btn}</Text>
          </TouchableOpacity>

            
          <TouchableOpacity style={styles.btn} onPress={stop}>
                <Text style={styles.btnText} >Reiniciar</Text>
          </TouchableOpacity>    

        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer:{
    marginTop:-160,
    fontSize: 35,
    fontWeight:'bold',
    color:'#fff'
  },
  btnArea:{
    flexDirection:'row',
    marginTop:40,
    height:45,
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    height:70,
    margin:17,
    borderRadius:9,
  },
  btnText:{
    fontSize:20,
    fontWeight:'bold',
  },
  ultimaArea:{
    marginTop:140,
  },
  textoCorrida:{
    fontSize:25,
    color:'#fff',
    fontStyle:'italic'
  }
});
