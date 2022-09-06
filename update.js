const {v4}=require('uuid')
const AWS=require('aws-sdk')
exports.updateUser= async(event)=>{
    const dynamo=new AWS.DynamoDB.DocumentClient()
    const {completed}=JSON.parse(event.body);
    const id=event.pathParameters
    
    await dynamo.update({ 
        TableName:"CURDOPERATION",
        Key:id,
        UpdateExpression:'set completed = :completed',
        ExpressionAttributeValues: {":complete":completed},
        ReturnValue:"ALL_NEW"
    }).promise()
    return {
        statusCode:200,
        body:JSON.stringify({
            message:"Update successful"
        })
    }
    
}
