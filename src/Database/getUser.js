import firebase from '../firebase'

export default function getUser() {
    return new Promise((resolve, reject) => {
        var data

        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                resolve(user.displayName)
            }
            else{
                resolve(-1)
            }
        })

    });
}

export function getUserUID() {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                resolve(user.uid)
            }
            else{
                resolve(-1)
            }
        })

    });
}

export function getUserEmail() {
    return new Promise((resolve, reject) => {

        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                resolve(user.email)
            }
            else{
                resolve(-1)
            }
        })

    });
}