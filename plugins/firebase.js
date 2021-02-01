import firebase from 'firebase'
import Vue from 'vue'
import Calendar from '~/components/Calendar'

Vue.component('full-calendar', Calendar)

const config = {
  projectId: process.env.FIREBASE_PROJECT_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase