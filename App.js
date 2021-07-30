import React from 'react';
import { StyleSheet, Text, View , Image,ScrollView} from 'react-native';








export default function App() {
  return (
    <>
      <ScrollView >

        <View style={{flexDirection:'row'}}>
          <Image
            style={styles.banner}
            source={require("./assets/img/bag.jpg")}
          />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en Paris</Text>
            <ScrollView horizontal>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require("./assets/img/actividad10.jpg")}
                />  
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require("./assets/img/actividad20.jpg")}
                />  
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require("./assets/img/actividad30.jpg")}
                />  
              </View>

              <View>
                <Image
                  style={styles.ciudad}
                  source={require("./assets/img/actividad40.jpg")}
                />  
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require("./assets/img/actividad50.jpg")}
                />  
              </View>

            </ScrollView>
              {/*  */}
            <Text style={styles.titulo}>Los mejores Alojamientos</Text>
            <View>
              <View>
                <Image
                  style={styles.mejores}
                  source={require('./assets/img/mejores10.jpg')}
                />
              </View>
              <View>
                <Image
                  style={styles.mejores}
                  source={require('./assets/img/mejores20.jpg')}
                />
              </View>
              <View>
                <Image
                  style={styles.mejores}
                  source={require('./assets/img/mejores30.jpg')}
                />
              </View>
            </View>
            {/*  */}
            <View >
              <Text style={styles.titulo}>Hospedaje en LA</Text>
              <View style={styles.listado}>
                <View style={styles.listadoItem}>
                  <Image
                    style={styles.hospedaje}
                    source={require('./assets/img/hospedaje10.jpg')}
                  />
                </View>
                <View style={styles.listadoItem}>
                  <Image
                    style={styles.hospedaje}
                    source={require('./assets/img/hospedaje20.jpg')}
                  />
                </View>
                <View style={styles.listadoItem}>
                  <Image
                    style={styles.hospedaje}
                    source={require('./assets/img/hospedaje30.jpg')}
                  />
                </View>
                <View style={styles.listadoItem}>
                  <Image
                    style={styles.hospedaje}
                    source={require('./assets/img/hospedaje40.jpg')}
                  />
                </View>
              </View>
            </View>


        </View>
        
      </ScrollView>
    </>
    
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 220,
    flex:1
  },
  titulo:{
    marginVertical:20,
    fontWeight:'bold',
    fontSize:20,
  },
  contenedor:{
    
    marginLeft:10
  },
  ciudad:{
     width: 210,
     height: 260,
     marginRight:10,
     marginRight:20
  },
  mejores:{
    width:'97.7%',
    height: 150,
    marginVertical:5
  },
  listado:{
     flexDirection:'row',
     flexWrap:'wrap',
     justifyContent:'space-between',
     marginBottom:10
  },

  listadoItem:{
   
      flexBasis:'50%',
  },
  hospedaje:{
    width: 170,
    height: 170,
    
    marginTop:6
  }
  


});
