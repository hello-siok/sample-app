// pull report from manage API
const axios = require('axios');
const { auth } = require('express-oauth2-jwt-bearer');

const client_id = "X2HjV8KsX703AdGhpKztBos6pgmJYj4Q";
const client_secret = "9ibO1oCR8eAeVIfcPawOG3IxFV_P8r5-wEzZk6_NvREaUlPCYdKwdkb4xAkMJd9Z";
const audience = "https://dev-fbz1l8vopdo0g0hj.us.auth0.com/api/v2/";
const grant_type = "client_credentials";
const auth_url = "https://dev-fbz1l8vopdo0g0hj.us.auth0.com/oauth/token";
const report_url = "https://dev-fbz1l8vopdo0g0hj.us.auth0.com/api/v2/actions/actions";

let data = {client_id: client_id, client_secret: client_secret, audience: audience, grant_type: grant_type};

async function get_token(auth_url) {
    try {
      const response = await axios.post(auth_url, data, {
        headers: {
          'Content-Type': "application/json"
        }
      });
  
      const token = response.data.access_token;
      if (response.status === 200) {return token}
      else {return ''}

    } catch (error) {
      console.log('API request failed:'); //, error.response.data
      console.log(error);
    } 
}

async function pull_report(report_url, token){
try {
    const response = await axios.get(report_url, {
        headers: {'Authorization': `Bearer ${token}`}
    })
    const responseData = response.data;
    //console.log(responseData);
    return responseData;
} catch (error) {
    console.log('Report pulling API returned error.');
    console.log(error);
}
}


get_token(auth_url).then((token) => {
    let results = pull_report(report_url, token);
    return results;
}).then((results) => {
    exports.report = results;
})


