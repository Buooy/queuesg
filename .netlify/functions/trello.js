exports.handler = async (event, context) => {
  console.log('event', event.body)

  if (event.body !== null) {
    const data = JSON.parse(event.body)
    console.log('data', data)
  } else {
    console.log('no event body')
  }

  return {
    statusCode: 200
  }
}