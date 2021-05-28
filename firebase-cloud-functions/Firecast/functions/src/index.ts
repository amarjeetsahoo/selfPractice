import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as serviceAccount from "./permissions.json";


admin.initializeApp({
  credential: admin.credential.cert({
    privateKey: serviceAccount.private_key,
    clientEmail: serviceAccount.client_email,
    projectId: serviceAccount.project_id,
  }),
  databaseURL: "https://firecast-app-b5ee6.firebaseio.com/",
});

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  admin.firestore().doc("cities/ctc").get()
      .then((snapshot) => {
        const data = snapshot.data();
        response.send(data);
      })
      .catch((error) => {
        console.log(error);
        response.status(500).send(error);
      });
});
