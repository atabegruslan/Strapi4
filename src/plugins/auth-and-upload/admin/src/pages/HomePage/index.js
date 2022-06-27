import React, { memo } from 'react';
import { request } from "@strapi/helper-plugin";
import pluginId from '../../pluginId';

const HomePage = () => {
  const [credentials, setCredentials] = React.useState({});

  React.useEffect(() => {
    var authPayload = new FormData();
    authPayload.append("identifier", "auth@auth.com");
    authPayload.append("password", "Lmnopqrstuv2!");

    var authRequestOptions = {
      method: 'POST',
      body: authPayload,
      redirect: 'follow'
    };

    fetch(`${strapi.backendURL}/api/auth/local`, authRequestOptions)
      .then(response => response.json())
      .then(authData => {
        if (authData.jwt)
        {
          fetch('http://localhost:1337/uploads/Capture_51bf2a4667.PNG')
            .then(response => response.blob())
            .then(fileBlob => {
              console.log(`Bearer Token is: ${authData.jwt}`);

              var uploadHeaders = new Headers();
              uploadHeaders.append("Authorization", `Bearer ${authData.jwt}`);

              var uploadPayload = new FormData();
              uploadPayload.append('files', fileBlob);
              uploadPayload.append('fileInfo', JSON.stringify({"alternativeText":'Alt Text',"caption":"","name":'File name'}));

              var uploadRequestOptions = {
                method: 'POST',
                headers: uploadHeaders,
                body: uploadPayload,
                redirect: 'follow'
              };

              fetch(`${strapi.backendURL}/api/upload`, uploadRequestOptions)
                .then(response => response.json())  
                .then(result => {
                  console.dir(result);
                })          
                .catch(error => {
                  throw(error);
                });
            })            
            .catch(error => {
              throw(error);
            });
        }
        else
        {
          console.error('Unable to obtain JWT');
        }
      })            
      .catch(error => {
        throw(error);
      });

  }, []);

  return (
    <div>
      <h1>Auth and Upload</h1>
    </div>
  );
};

export default memo(HomePage);
