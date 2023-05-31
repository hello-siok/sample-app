import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getAdminResource } from "../services/message.service";
import 'bootstrap/dist/css/bootstrap.css';


export const AdminPage: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [myArray, setMyArray] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const { getAccessTokenSilently } = useAuth0();

  const extract_app = (item:String) => {
    if (typeof item === 'undefined') {
      return "All apps";
    } else if(item.includes("event.client.name") === false) {
      return "All apps";
    } else {
      let regex = /event\.client\.name === \".{0,}/g;
      let matched = [...item.matchAll(regex)].join(', ');
      matched = matched.replace(/event\.client\.name === \"/g, '');
      matched = matched.replace(/\"\) \{/g, '');
      console.log(matched);
      return matched;
    }
  };

  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const accessToken = await getAccessTokenSilently();
      const { data, error } = await getAdminResource(accessToken);

      if (!isMounted) {
        return;
      }

      if (data) {
        setMessage(JSON.stringify(data, null, 2));
      }

      if (error) {
        setMessage(JSON.stringify(error, null, 2));
      }
    };

    getMessage();

    return () => {
      isMounted = false;
    };
  }, [getAccessTokenSilently]);

  useEffect(() => {
    //console.log("message changed");
    //console.log(message);
    try {
      let myArray = JSON.parse(message).report.actions;
      setMyArray(myArray);
      //console.log(myArray);
    } catch {
      //console.log(message)
    }

  }, [message]);

  function CollapsibleRow({ }) {
    setIsExpanded(!isExpanded);

  }

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Report only for 'Manager'
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              This page retrieves the <strong>"action - action bound trigger - application report"</strong> from 
              manage API.
            </span>
            <span>
              <strong>
                Only authenticated users with the{" "}
                <code>read:admin-messages</code> permission should access this
                page.
              </strong>
            </span>
          </p>
          <CodeSnippet title="Status" code={message.includes("Permission denied")?"Permission Denied!":"You are manager and can access the report!"} />
          <p/><br/>
          {message.includes("report")&&
          <div className="code-snippet">
          <div className="code-snippet__title">Report</div>
          <table className="code-snippet__container table table-dark table-hover code-snippet__body">
            <thead>
                <tr>
                <th scope="col">Application</th>
                <th scope="col">Action</th>
                <th scope="col">Trigger</th>
                <th scope="col">Deployed Status</th>
                </tr>
            </thead>
            <tbody>
            {myArray.map((item, index) => (
                <tr key={index}>
                  <td>{extract_app(item['code'])}</td>
                  <td>
                  <div ><span onClick={CollapsibleRow}>{String(item['name'])}</span>
                  {isExpanded && <div className="card-body" style={{"fontSize":"0.8em","color":"grey","lineHeight":'1.5',"fontFamily":"monospace"}}>
                        {(typeof item['code'] === 'undefined')? "No custom code defined":item['code']}
                      </div>}
                  </div>
                  </td>
                  <td>{String(item['supported_triggers'][0]["id"])}</td>
                  <td>{String(item['all_changes_deployed'])}</td>
                </tr>
              ))}
            </tbody>
        </table>
        </div>
        } 
          
        </div>
      </div>
    </PageLayout>
  );
};
