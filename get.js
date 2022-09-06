const AWS=require('aws-sdk')
exports.getUser= async(event)=>{
    const dynamo=new AWS.DynamoDB.DocumentClient()
    let data;
    try {
        var result= await  dynamo.scan({TableName:"CURDOPERATION"}).promise()
        console.log(result)
        data=result.Items
    } catch (error) {
        console.log(result)
        console.log(error)
        
        
    }
    
    return {
        statusCode:200,
        body:JSON.stringify(data)
    }
    
}
