import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const params = {
<<<<<<< HEAD
    TableName: "notes",
=======
    TableName: process.env.tableName,
>>>>>>> 28d1d3206963d265ad6aef1636cf065c8a77719c
    // 'Key' defines the partition key and sort key of the item to be removed
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'noteId': path parameter
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: event.pathParameters.id
    }
  };

  try {
    const result = await dynamoDbLib.call("delete", params);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 28d1d3206963d265ad6aef1636cf065c8a77719c
