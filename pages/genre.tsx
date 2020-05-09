const Test = () => {
  return (
    <div>
      <p style={{ paddingBottom: "1rem" }}>
        "project_id": {process.env.PROJECT_ID}
      </p>
      <p style={{ paddingBottom: "1rem" }}>
        "private_key":{" "}
        {process.env.PRIVATE_KEY &&
          process.env.PRIVATE_KEY.replace(/\\n/g, "\n")}
      </p>
      <p style={{ paddingBottom: "1rem" }}>
        "client_email": {process.env.CLIENT_EMAIL}
      </p>
      <p style={{ paddingBottom: "1rem" }}>
        "apiKey": {process.env.FIREBASE_APIKEY}
      </p>
      <p style={{ paddingBottom: "1rem" }}>
        "authDomain": {process.env.FIREBASE_AUTHDOMAIN}
      </p>
      <p style={{ paddingBottom: "1rem" }}>
        "databaseURL": {process.env.FIREBASE_DATABASE_URL}
      </p>
      <p style={{ paddingBottom: "1rem" }}>
        "projectId": {process.env.FIREBASE_PROJECTID}
      </p>
      <p style={{ paddingBottom: "1rem" }}>
        "appId": {process.env.FIREBASE_APPID}
      </p>
    </div>
  );
};

export default Test;
