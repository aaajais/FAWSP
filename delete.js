const {v4}=require('uuid')
const AWS=require('aws-sdk')
exports.deleteUser= async(event)=>{
    const dynamo=new AWS.DynamoDB.DocumentClient()
    const id=event.pathParameters
    console.log(id)
    await dynamo.delete({
        TableName:"CURDOPERATION",
        Key:id
    }).promise()
    return {
        statusCode:200,
        body:JSON.stringify({
            message:"Deleted successfully"
        })
    }
    
}
