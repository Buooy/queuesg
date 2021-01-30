exports.handler = async (event, context) => {
  const data = JSON.parse(event.body)

  console.log('data', data)
  return {
    statusCode: 200
  }
}