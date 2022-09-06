const {v4}=require('uuid')
const AWS=require('aws-sdk')
exports.addUser= async(event)=>{
    const dynamo=new AWS.DynamoDB.DocumentClient()
    const data=JSON.parse(event.body);
    const id=v4()
    const list={
        id,
        data

    }
    await dynamo.put({ 
        TableName: "CURDOPERATION",
        Item: list
    }).promise()
    return {
        statusCode:200,
        body:JSON.stringify(list)
    }
    
}
