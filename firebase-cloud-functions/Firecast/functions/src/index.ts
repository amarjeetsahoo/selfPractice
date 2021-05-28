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

export const getData = functions.https.onRequest(async (request, response) => {
  try {
    const snapshot = await admin.firestore().doc("cities/ctc").get();
    const data = snapshot.data();
    response.send(data);
  } catch (error) {
    console.log(error);
    response.status(500).send(error);
  }
});
