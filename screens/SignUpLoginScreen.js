import React ,{Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Modal,Alert, ScrollView,KeyboardAvoidingView} from 'react-native'
import db from '../config'
import firebase from 'firebase'
export default class SignUpLoginScreen extends Component{
    constructor(){
        super()
        this.state={
           username:'',
            password:''
        }
    }
    userSignUp=(username,passwor)=>{
       
            firebase.auth().createUserWithEmailAndPassword(username,password)
            .then((response)=>{
                return Alert.alert("USER ADDED SUCCESSFULLY")
            })
            .catch(function(error){
                var errorCode=error.code;
                var errorMessage=error.message;
                return Alert.alert(errorMessage)
            })
        
    }
    userLogin=(username,password)=>{
        firebase.auth().signInWithEmailAndPassword(username,password)
        .then(()=>{
            return Alert.alert(" user successfully logined")
        })
        .catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }
    render(){
        return(
            <View>
                <Text style={{color:'#ff5722',fontSize:18,fontWeight:'bold',marginLeft:55}}>username</Text>
                <View style={{alignItems:center}}>
                <TextInput
                style={styles.loginBox}
                keyboardType='email-address'
                onChangeText={()=>{
                    this.setState({
                        username:text
                    })
                }}
                />
               
                     <TextInput style={styles.loginBox}
                    placeholder="enterPassword"
                   secureTextEntry={true}
                    onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}/> <TouchableOpacity
                    style={[styles.button,{marginBottom:20,marginTop:20}]}
                    onPress={()=>{
                        this.userLogin(this.state.emailId,this.state.password)
                    }}>
<Text style={styles.buttonText}>
    login
</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{
                       this.setState({'isModalVisible':true})
                    }}>
<Text style={styles.buttonText}>
   sign up
</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f8be85',
        
    },
    title:{
        fontSize:65,
        fontWeight:'300',
        paddingBottom:30,
        color:'#ff3d00'
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:'#ff9800',
        shadowColor:'#00000',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.30,
      shadowRadius:10.32,
       elevation:16
    },
    loginBox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        borderColor:'#ff8a65',
        fontSize:20,
        margin:10,
        paddingLeft:10,
    },
    buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20
    },
    buttonContainer:{
        flex:1,
        alignItems:'center'
    },
    KeyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modalTitle:{
        justifyContent:'center',
        alignItems:'center',
        fontSize:30,
        color:'#ff5722',
        margin:50
    },
})